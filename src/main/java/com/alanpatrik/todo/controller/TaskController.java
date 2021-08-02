package com.alanpatrik.todo.controller;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.alanpatrik.todo.dto.TaskDTO;
import com.alanpatrik.todo.service.TaskService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping(value = "api/v1/tasks")
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class TaskController {

	private TaskService service;
	
	@GetMapping
	public ResponseEntity<List<TaskDTO>> findAll() {
		List<TaskDTO> list = service.findAll();

		return ResponseEntity.ok().body(list);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<TaskDTO> findById(@PathVariable @Valid Long id) {
		TaskDTO task = service.findById(id);
		
		return ResponseEntity.ok().body(task);
	}
	
	@PostMapping
	public ResponseEntity<TaskDTO> createTask(@RequestBody @Valid TaskDTO data) {
		TaskDTO task = service.createTask(data);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(task.getId()).toUri();
		
		return ResponseEntity.created(uri).body(task);
		
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Optional<TaskDTO>> updateTask(@PathVariable @Valid Long id, @RequestBody TaskDTO data) {
		Optional<TaskDTO> task = service.updateTask(id, data);
		
		return ResponseEntity.ok().body(task);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity deleteTask(@PathVariable Long id) {
		service.deleteTask(id);
		
		return ResponseEntity.ok().build();
	}
}
