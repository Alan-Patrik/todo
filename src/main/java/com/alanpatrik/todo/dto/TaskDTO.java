package com.alanpatrik.todo.dto;

import java.io.Serializable;
import java.time.Instant;
import java.util.Date;

import com.alanpatrik.todo.enums.TaskEnums;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TaskDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;
	private String name;
	private String descrition;
	private Date startDate;
	private Date endDate;
	private Instant createdAt;
	private Instant lastActivity;
	private TaskEnums status;
}
