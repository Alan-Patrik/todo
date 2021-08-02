package com.alanpatrik.todo.exception.services;

public class CustomNotFoundException extends RuntimeException{
	private static final long serialVersionUID = 1L;
	
	public CustomNotFoundException(Object id) {
		super("Resource not found with id. " + id);
	}

}
