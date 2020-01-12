/**
 * 
 */
package com.keep.services;

import java.util.List;

import com.keep.dto.ApplicationDto;
import com.keep.entity.Application;

/**
 * @author swanandm
 *
 */
public interface IApplicationService extends ICrudService<ApplicationDto, Application> {

	List<ApplicationDto> getApplications(Integer userId);
	
}
