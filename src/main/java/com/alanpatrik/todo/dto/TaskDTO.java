package com.alanpatrik.todo.dto;

import java.util.Date;

import com.alanpatrik.todo.enums.TaskEnums;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TaskDTO {

	private String name;
	private String descrition;
	private Date date;
	private TaskEnums status;
}
