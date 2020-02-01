/**
 * 
 */
package com.keep.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.keep.config.DefaultPropertiesConfig;
import com.keep.dto.ApplicationDto;
import com.keep.entity.Application;
import com.keep.repository.IApplicationRepository;
import com.keep.services.IApplicationService;
import com.keep.transformer.ApplicationTransformer;

/**
 * @author swanandm
 *
 */
@Service
public class ApplicationService extends CrudService<ApplicationDto, Application> implements IApplicationService {
	
	private final IApplicationRepository applicationRepository;
	private final DefaultPropertiesConfig defaultProperties;

	public ApplicationService(IApplicationRepository applicationRepository, DefaultPropertiesConfig defaultProperties) {
		super(applicationRepository);
		this.applicationRepository = applicationRepository;
		this.defaultProperties = defaultProperties;
	}

	@Override
	public ApplicationDto toDto(Application entity) {
		ApplicationDto dto = ApplicationTransformer.transform(entity);
		if(dto.getImg() == null) {
			dto.setImg(defaultProperties.getImg());
		}
		
		return dto;
	}

	@Override
	public Application toEntity(ApplicationDto dto) {
		return ApplicationTransformer.transform(dto);
	}

	@Override
	public List<ApplicationDto> getApplications(Integer userId) {
		List<Application> applicationList = applicationRepository.getApplications(userId);
		return toDtos(applicationList);
	}

}
