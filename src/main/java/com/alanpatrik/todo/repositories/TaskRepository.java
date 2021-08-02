package com.alanpatrik.todo.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.alanpatrik.todo.entities.Task;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {

	Optional<Task> findByName(String name);
	
	Optional<Task> findById(Long id);
}
