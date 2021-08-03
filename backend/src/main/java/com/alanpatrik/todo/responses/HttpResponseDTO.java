package com.alanpatrik.todo.responses;

import java.io.Serializable;

import org.springframework.http.HttpStatus;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class HttpResponseDTO<T> implements Serializable {
	private static final long serialVersionUID = 1L;

	private Boolean success;
	private HttpStatus status;
	private Integer code;
	private T data;
	
	public HttpResponseDTO(T data) {
		this.success = true;
		this.status = HttpStatus.OK;
		this.code = HttpStatus.OK.value();
		this.data = data;
	}
	
	public HttpResponseDTO(T data, HttpStatus status) {
		this.success = true;
		this.status = status;
		this.code = status.value();
		this.data = data;
	}
}
