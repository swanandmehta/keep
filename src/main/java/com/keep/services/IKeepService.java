/**
 * 
 */
package com.keep.services;

import java.util.List;

import com.keep.dto.ApplicationDto;
import com.keep.dto.LabelDto;
import com.keep.dto.NoteDto;
import com.keep.dto.ClientNotesSearchCriteria;
import com.keep.dto.ReminderTypeDto;
import com.keep.dto.UserDto;

/**
 * @author swanandm
 *
 */
public interface IKeepService {

	UserDto validateEmail(String email);

	UserDto saveUser(UserDto userDto);

	UserDto login(UserDto userDto);

	List<ApplicationDto> getApplications(Integer userId);

	List<NoteDto> getNote(ClientNotesSearchCriteria searchDto, Integer userId);

	NoteDto saveNote(NoteDto noteDto);

	List<ReminderTypeDto> getReminderType();

	List<LabelDto> getLabels(Integer userId, String label);

	List<LabelDto> saveLabel(LabelDto label);

	NoteDto archiveNote(NoteDto noteDto);

}
