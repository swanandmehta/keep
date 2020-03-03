package com.keep.utils;

import java.util.List;

import com.keep.dto.ServerNotesSearchCriteria;
import com.keep.entity.CheckpadState;
import com.keep.entity.Note;
import com.keep.exception.InvalidInputException;

public class NoteUtil {

	public static CheckpadState getCheckPadState(boolean status) {
		List<CheckpadState> checkpandStateList = GlobalDataUtil.getCheckpadStates(); 
		for(CheckpadState state : checkpandStateList) {
			if(state.getName().equalsIgnoreCase(Boolean.toString(status))) {
				return state;
			}
		}
		throw new InvalidInputException("Invalid state of check item state.");
	}
	
	public static StringBuilder getFindNoteQuery(Integer userId, ServerNotesSearchCriteria searchDto, Class<? extends Note> noteType) {
		StringBuilder findNoteQuery = new StringBuilder();
		
		findNoteQuery.append(" SELECT e FROM "+noteType.getName()+" e ");
		
		if(searchDto.getLabelList() != null && !searchDto.getLabelList().isEmpty()) {
			findNoteQuery.append(" JOIN e.labelSet label ");			
		}

		findNoteQuery.append(" WHERE e.userId = :userId ");
		
		if(searchDto.getLabelList() != null && !searchDto.getLabelList().isEmpty()) {
			findNoteQuery.append(" AND label.name IN :labelNameList");			
		}
		
		return findNoteQuery;
	}

}
