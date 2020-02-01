package com.keep.transformer;

import com.keep.dto.ApplicationDto;
import com.keep.entity.Application;

public class ApplicationTransformer {

	public static ApplicationDto transform(Application entity) {
		ApplicationDto dto = new ApplicationDto();
		dto.setId(entity.getId());
		dto.setName(entity.getName());
		if(entity.getImage() != null) {
			dto.setImg(entity.getImage().getData());
		}
		return dto;
	}

	public static Application transform(ApplicationDto dto) {
		Application application = new Application();
		return application;
	}

}
