/**
 * 
 */
package com.keep.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.keep.dto.ApplicationDto;
import com.keep.dto.LabelDto;
import com.keep.dto.NoteDto;
import com.keep.dto.ClientNotesSearchCriteria;
import com.keep.dto.ReminderTypeDto;
import com.keep.dto.UserDto;
import com.keep.services.IApplicationService;
import com.keep.services.IKeepService;
import com.keep.services.ILabelService;
import com.keep.services.INoteServices;
import com.keep.services.IUserServices;
import com.keep.transformer.NotesSearchCriteriaTransformer;
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
	private final ILabelService labelService;
	
	public KeepService(UserService userService, ApplicationService applicationService, NoteService noteService,
			LabelService labelService) {
		this.userService = userService;
		this.applicationService = applicationService;
		this.noteService = noteService;
		this.labelService = labelService;
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
	public List<NoteDto> getNote(ClientNotesSearchCriteria searchDto, Integer userId) {
		return noteService.getNotes(NotesSearchCriteriaTransformer.toServerDto(searchDto), userId);
	}

	@Override
	public NoteDto saveNote(NoteDto noteDto) {
		return noteService.persist(noteDto);
	}

	@Override
	public List<ReminderTypeDto> getReminderType() {
		return ReminderTypeTransformer.transform(GlobalDataUtil.getReminderTypes());
	}

	@Override
	public List<LabelDto> getLabels(Integer userId, String label) {
		return labelService.getByUserIdAndName(userId, label);
	}

	@Override
	public List<LabelDto> saveLabel(LabelDto label) {
		return labelService.toDtoList(labelService.persist(label));
	}

	@Override
	public NoteDto archiveNote(NoteDto noteDto) {
		return noteService.archiveNote(noteDto);
	}
}
