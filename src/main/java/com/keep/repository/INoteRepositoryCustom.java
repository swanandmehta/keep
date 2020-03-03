package com.keep.repository;

import java.util.List;

import com.keep.dto.ServerNotesSearchCriteria;
import com.keep.entity.Note;

public interface INoteRepositoryCustom {
	
	List<Note> findNotepad(Integer userId, ServerNotesSearchCriteria searchDto);

	List<Note> findCheckpad(Integer userId, ServerNotesSearchCriteria searchDto);

	List<Note> findReminder(Integer userId, ServerNotesSearchCriteria searchDto);

}
