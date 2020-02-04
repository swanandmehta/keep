/**
 * 
 */
package com.keep.services;

import java.util.List;

import com.keep.dto.ApplicationDto;
import com.keep.dto.NoteDto;
import com.keep.dto.NotesSearchCriteria;
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

	List<NoteDto> getNote(NotesSearchCriteria searchDto, Integer userId);

	NoteDto saveNote(NoteDto noteDto);

}
