/**
 * 
 */
package com.keep.impl;

import org.springframework.stereotype.Service;

import com.keep.repository.ICheckItemStateRepository;
import com.keep.repository.INoteStateRepository;
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
	private final INoteStateRepository noteStateRepository;
	
	public AppStartupRunnerService(ICheckItemStateRepository checkItemStateRepository, IReminderTypeRepository reminderTypeRepostiory, 
			INoteStateRepository noteStateRepository) {
		this.checkItemStateRepository = checkItemStateRepository;
		this.reminderTypeRepostiory = reminderTypeRepostiory;
		this.noteStateRepository = noteStateRepository;
	}

	@Override
	public void loadCheckitemStates() {
		GlobalDataUtil.setCheckpadStates(checkItemStateRepository.findAll());
		
	}

	@Override
	public void loadReminderTypes() {
		GlobalDataUtil.setReminderTypes(reminderTypeRepostiory.findAll());		
	}

	@Override
	public void loadNoteStates() {
		GlobalDataUtil.setNoteStates(noteStateRepository.findAll());
	}
	
}
