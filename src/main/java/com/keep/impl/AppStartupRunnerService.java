/**
 * 
 */
package com.keep.impl;

import org.springframework.stereotype.Service;

import com.keep.repository.ICheckItemStateRepository;
import com.keep.services.IAppStarupRunnerService;
import com.keep.utils.GlobalDataUtil;

/**
 * @author swanandm
 *
 */
@Service
public class AppStartupRunnerService implements IAppStarupRunnerService {
	
	private final ICheckItemStateRepository checkItemStateRepository;
	
	public AppStartupRunnerService(ICheckItemStateRepository checkItemStateRepository) {
		this.checkItemStateRepository = checkItemStateRepository;
	}

	@Override
	public void loadCheckitemStateValues() {
		GlobalDataUtil.setCheckpadStates(checkItemStateRepository.findAll());
		
	}
	
}
