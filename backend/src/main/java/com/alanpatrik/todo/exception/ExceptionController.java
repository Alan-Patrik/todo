package com.alanpatrik.todo.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.alanpatrik.todo.responses.HttpResponseExceptionDTO;

@RestControllerAdvice
public class ExceptionController {

	@ExceptionHandler(CustomNotFoundException.class)
	public ResponseEntity<HttpResponseExceptionDTO> handleNotFound(CustomNotFoundException exception) {
		String message = exception.getMessage();
		
		return ResponseEntity
				.status(HttpStatus.NOT_FOUND)
				.header("Error-message", message)
				.body(HttpResponseExceptionDTO
						.builder()
						.isError(true)
						.status(HttpStatus.NOT_FOUND)
						.code(HttpStatus.NOT_FOUND.value())
						.message(message)
						.build()
						);
	}
	
	@ExceptionHandler(CustomBadRequestException.class)
	public ResponseEntity<HttpResponseExceptionDTO> handleBadRequest(CustomBadRequestException exception) {
		String message = exception.getMessage();
		
		return ResponseEntity
				.status(HttpStatus.BAD_REQUEST)
				.header("Error-message", message)
				.body(HttpResponseExceptionDTO
						.builder()
						.isError(true)
						.status(HttpStatus.BAD_REQUEST)
						.code(HttpStatus.BAD_REQUEST.value())
						.message(message)
						.build()
						);
	}
}
