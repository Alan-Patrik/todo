package com.alanpatrik.todo.entities;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import com.alanpatrik.todo.dto.TaskDTO;

@Mapper
public interface TaskMapper {
	TaskMapper INSTANCE = Mappers.getMapper(TaskMapper.class);

	TaskDTO toDTO(Task model);
	Task toModel(TaskDTO dto);
}