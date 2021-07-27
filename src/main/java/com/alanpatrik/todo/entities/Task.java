package com.alanpatrik.todo.entities;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Table;

import com.alanpatrik.todo.entities.enums.TaskEnums;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Users")
public class Task {

	private String name;
	private String descrition;
	private Date date;
	private TaskEnums status;

}
