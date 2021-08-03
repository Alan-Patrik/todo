package com.alanpatrik.todo.responses;

import java.io.Serializable;

import org.springframework.http.HttpStatus;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class HttpResponseExceptionDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Boolean isError;
	private HttpStatus status;
	private Integer code;
	private String message;
}
