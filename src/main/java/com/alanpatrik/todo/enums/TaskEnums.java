package com.alanpatrik.todo.enums;

public enum TaskEnums {
	
	CREATED(0),
	INPROGRESS(1),
	FINISHED(2);
	
	private int code;
	
	private TaskEnums(int code) {
		this.code = code;
	}
	
	public int getCode() {
		return code;
	}
	
	public static TaskEnums valueOf(int code) {
		for (TaskEnums value : TaskEnums.values()) {
			if (value.getCode() == code) {
				return value;
			}
		}
		throw new IllegalArgumentException("Invalid OrderStatus code");
	}
}
