package com.keep.transformer;

import com.keep.dto.ApplicationDto;
import com.keep.entity.Application;

public class ApplicationTransformer {

	public static ApplicationDto transform(Application entity) {
		ApplicationDto dto = new ApplicationDto();
		return dto;
	}

	public static Application transform(ApplicationDto dto) {
		Application application = new Application();
		return application;
	}

}
