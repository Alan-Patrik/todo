package com.alanpatrik.todo.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.alanpatrik.todo.dto.TaskDTO;
import com.alanpatrik.todo.exception.CustomBadRequestException;
import com.alanpatrik.todo.exception.CustomNotFoundException;
import com.alanpatrik.todo.responses.HttpResponseDTO;
import com.alanpatrik.todo.service.TaskService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping(value = "api/v1/tasks")
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class TaskController {

	private TaskService service;
	
	@GetMapping
	public ResponseEntity<HttpResponseDTO<List<TaskDTO>>> findAll() {
		List<TaskDTO> list = service.findAll();

		return ResponseEntity
				.ok()
				.header("status-code", String.valueOf(HttpStatus.OK))
				.contentType(MediaType.APPLICATION_JSON)
				.body(new HttpResponseDTO<>(list));
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<HttpResponseDTO<TaskDTO>> findById(@PathVariable @Valid Long id) throws CustomNotFoundException {
		TaskDTO task = service.findById(id);
		
		return ResponseEntity
				.ok()
				.header("status-code", String.valueOf(HttpStatus.OK))
				.contentType(MediaType.APPLICATION_JSON)
				.body(new HttpResponseDTO<>(task));
	}
	
	@ResponseStatus(HttpStatus.CREATED)
	@PostMapping
	public ResponseEntity<HttpResponseDTO<TaskDTO>> createTask(@RequestBody @Valid TaskDTO data) throws CustomBadRequestException {
		TaskDTO task = service.createTask(data);
		
		return ResponseEntity
				.status(HttpStatus.CREATED)
				.header("status-code", String.valueOf(HttpStatus.CREATED))
				.contentType(MediaType.APPLICATION_JSON)
				.body(new HttpResponseDTO<>(task, HttpStatus.CREATED));
		
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<HttpResponseDTO<TaskDTO>> updateTask(@PathVariable @Valid Long id, @RequestBody TaskDTO data) throws CustomNotFoundException {
		TaskDTO task = service.updateTask(id, data);
		
		return ResponseEntity
				.ok()
				.header("status-code", String.valueOf(HttpStatus.OK))
				.contentType(MediaType.APPLICATION_JSON)
				.body(new HttpResponseDTO<>(task));
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<HttpResponseDTO<TaskDTO>> deleteTask(@PathVariable Long id) throws CustomNotFoundException {
		TaskDTO task = service.deleteTask(id);
		
		return ResponseEntity
				.ok()
				.header("status-code", String.valueOf(HttpStatus.OK))
				.contentType(MediaType.APPLICATION_JSON)
				.body(new HttpResponseDTO<>(task));
	}
}
