package com.alanpatrik.todo.exception.service;

public class ControllerNotFoundException extends RuntimeException{
	private static final long serialVersionUID = 1L;
	
	public ControllerNotFoundException(Object id) {
		super("Resource not found id. " + id);
	}

}
