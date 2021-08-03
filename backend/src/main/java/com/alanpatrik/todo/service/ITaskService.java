package com.alanpatrik.todo.service;

import java.util.List;

import com.alanpatrik.todo.dto.TaskDTO;
import com.alanpatrik.todo.entities.Task;
import com.alanpatrik.todo.exception.CustomBadRequestException;
import com.alanpatrik.todo.exception.CustomNotFoundException;

public interface ITaskService {

	List<TaskDTO> findAll();
	
	TaskDTO findById(Long id) throws CustomNotFoundException;
	
	void verifyIfIsAlreadyRegistered(String name) throws CustomBadRequestException;
	
	Task verifyIfIsExist(Long id) throws CustomNotFoundException;
	
	TaskDTO createTask(TaskDTO data) throws CustomBadRequestException;
    
	TaskDTO updateTask(Long id, TaskDTO taskDTO) throws CustomNotFoundException;
    
	TaskDTO deleteTask(Long id) throws CustomNotFoundException;
}
