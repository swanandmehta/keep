package com.keep.utils;

import java.util.List;
import java.util.Optional;

import com.keep.dto.ServerNotesSearchCriteria;
import com.keep.entity.CheckpadState;
import com.keep.entity.Note;
import com.keep.entity.NoteState;
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
		findNoteQuery.append(" JOIN e.noteState state ");
		
		if(searchDto.getLabelList() != null && !searchDto.getLabelList().isEmpty()) {
			findNoteQuery.append(" JOIN e.labelSet label ");			
		}

		findNoteQuery.append(" WHERE e.userId = :userId ");
		
		if(searchDto.getLabelList() != null && !searchDto.getLabelList().isEmpty()) {
			findNoteQuery.append(" AND label.name IN :labelNameList ");			
		}
		
		if(searchDto.getNoteStateId() != null && !searchDto.getNoteStateId().isEmpty()) {
			findNoteQuery.append(" AND state.id IN :noteStateIdList ");			
		}
		

		
		return findNoteQuery;
	}

	public static Integer getStateId(String stateName) {
		List<NoteState> noteStateList = GlobalDataUtil.getNoteStates();
		
		Optional<NoteState> noteState = noteStateList.stream().filter(e -> e.getName().equals(stateName)).findFirst();
		
		if(noteState.isPresent()) {
			return noteState.get().getId();
		}
		
		throw new InvalidInputException("Invalid Note state name "+stateName);
		
	}

	public static String getStateName(Integer noteStateId) {
		List<NoteState> noteStateList = GlobalDataUtil.getNoteStates();
		
		Optional<NoteState> noteState = noteStateList.stream().filter(e -> e.getId().equals(noteStateId)).findFirst();
		
		if(noteState.isPresent()) {
			return noteState.get().getName();
		}
		
		throw new InvalidInputException("Invalid Note state id "+noteStateId);
		
	}

}
