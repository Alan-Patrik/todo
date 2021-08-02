package com.alanpatrik.todo.service;

import java.time.Instant;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alanpatrik.todo.dto.TaskDTO;
import com.alanpatrik.todo.entities.Task;
import com.alanpatrik.todo.entities.TaskMapper;
import com.alanpatrik.todo.exception.services.CustomNotFoundException;
import com.alanpatrik.todo.repositories.TaskRepository;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class TaskService implements ITaskService {
	
	private TaskRepository repository;
	private final TaskMapper mapper = TaskMapper.INSTANCE;
	
	@Override
	public void verifyIfIsAlreadyRegistered(String name) {
		Optional<Task> task = repository.findByName(name);
		
		if(task.isPresent()) {
			throw new CustomNotFoundException(name);
		}
	}
	
	@Override
	public Task verifyIfIsExist(Long id) {
		return repository.findById(id).orElseThrow(() -> new CustomNotFoundException(id));
	}
	
	public List<TaskDTO> findAll() {
		return repository
				.findAll()
				.stream()
				.map(mapper::toDTO)
				.collect(Collectors.toList());
	}

	@Override
	public TaskDTO findById(Long id) {
		Task task = verifyIfIsExist(id);
		return mapper.toDTO(task);
	}

	@Override
	public TaskDTO createTask(TaskDTO data) {
		verifyIfIsAlreadyRegistered(data.getName());

		Task task = mapper.toModel(data);
		
		task.setName(data.getName());
		task.setDescription(data.getDescription());
		task.setStartDate(new Date());
		task.setEndDate(new Date());
		task.setCreatedAt(Instant.now());
		task.setLastActivity(Instant.now());
		task.setStatus(data.getStatus());
		
		Task savedTask = repository.save(task);

		return mapper.toDTO(savedTask);
	}

	@Override
	public Optional<TaskDTO> updateTask(Long id, TaskDTO taskDTO) {
		
		return Optional
				.of(repository.findById(id))
				.filter(Optional::isPresent)
				.map(Optional::get)
				.map(data -> {
					data.setName(taskDTO.getName());
					data.setDescription(taskDTO.getDescription());
					data.setStartDate(taskDTO.getStartDate());
					data.setEndDate(taskDTO.getEndDate());
					data.setCreatedAt(data.getCreatedAt());
					data.setLastActivity(Instant.now());
					data.setStatus(taskDTO.getStatus());
					
					repository.save(data);
					
					return data;
				}).map(mapper::toDTO);
	}

	@Override
	public void deleteTask(Long id) {
		Task task = verifyIfIsExist(id);
		
		repository.delete(task);
	}
}
