/**
 * 
 */
package com.keep.impl;

import org.springframework.stereotype.Service;

import com.keep.repository.ICheckItemStateRepository;
import com.keep.repository.IReminderTypeRepository;
import com.keep.services.IAppStarupRunnerService;
import com.keep.utils.GlobalDataUtil;

/**
 * @author swanandm
 *
 */
@Service
public class AppStartupRunnerService implements IAppStarupRunnerService {
	
	private final ICheckItemStateRepository checkItemStateRepository;
	private final IReminderTypeRepository reminderTypeRepostiory;
	
	public AppStartupRunnerService(ICheckItemStateRepository checkItemStateRepository, IReminderTypeRepository reminderTypeRepostiory) {
		this.checkItemStateRepository = checkItemStateRepository;
		this.reminderTypeRepostiory = reminderTypeRepostiory;
	}

	@Override
	public void loadCheckitemStateValues() {
		GlobalDataUtil.setCheckpadStates(checkItemStateRepository.findAll());
		GlobalDataUtil.setReminderTypes(reminderTypeRepostiory.findAll());
		
	}
	
}
