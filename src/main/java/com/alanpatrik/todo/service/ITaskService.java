package com.alanpatrik.todo.service;

import java.util.List;
import java.util.Optional;

import com.alanpatrik.todo.dto.TaskDTO;
import com.alanpatrik.todo.entities.Task;

public interface ITaskService {

	List<TaskDTO> findAll();
	
	TaskDTO findById(Long id);
	
	void verifyIfIsAlreadyRegistered(String name);
	
	Task verifyIfIsExist(Long id);
	
	TaskDTO createTask(TaskDTO data);
    
	Optional<TaskDTO> updateTask(Long id, TaskDTO taskDTO);
    
    void deleteTask(Long id);
}
