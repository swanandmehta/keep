/**
 * 
 */
package com.keep.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.keep.dto.ApplicationDto;
import com.keep.dto.NoteDto;
import com.keep.dto.NotesSearchCriteria;
import com.keep.dto.ReminderTypeDto;
import com.keep.dto.UserDto;
import com.keep.services.IApplicationService;
import com.keep.services.IKeepService;
import com.keep.services.INoteServices;
import com.keep.services.IUserServices;
import com.keep.transformer.ReminderTypeTransformer;
import com.keep.utils.GlobalDataUtil;

/**
 * @author swanandm
 *
 */
@Service
public class KeepService implements IKeepService {
	
	private final IUserServices userService;
	private final IApplicationService applicationService;
	private final INoteServices noteService;
	
	public KeepService(UserService userService, ApplicationService applicationService, NoteService noteService) {
		this.userService = userService;
		this.applicationService = applicationService;
		this.noteService = noteService;
	}

	@Override
	public UserDto validateEmail(String email) {
		return userService.validateEmail(email);
	}

	@Override
	public UserDto saveUser(UserDto userDto) {
		return userService.persist(userDto);
	}

	@Override
	public UserDto login(UserDto userDto) {
		return userService.login(userDto);
	}

	@Override
	public List<ApplicationDto> getApplications(Integer userId) {
		return applicationService.getApplications(userId);
	}

	@Override
	public List<NoteDto> getNote(NotesSearchCriteria searchDto, Integer userId) {
		return noteService.getNotes(searchDto, userId);
	}

	@Override
	public NoteDto saveNote(NoteDto noteDto) {
		return noteService.persist(noteDto);
	}

	@Override
	public List<ReminderTypeDto> getReminderType() {
		return ReminderTypeTransformer.transform(GlobalDataUtil.getReminderTypes());
	}
}
