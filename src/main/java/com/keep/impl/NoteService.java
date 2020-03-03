/**
 * 
 */
package com.keep.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.keep.dto.NoteDto;
import com.keep.dto.ServerNotesSearchCriteria;
import com.keep.entity.Note;
import com.keep.enums.NoteType;
import com.keep.repository.INoteRepository;
import com.keep.services.INoteServices;
import com.keep.transformer.NoteTransformer;

/**
 * @author swanandm
 *
 */
@Service
public class NoteService extends CrudService<NoteDto, Note> implements INoteServices {
	
	private final INoteRepository noteRepository;

	public NoteService(INoteRepository noteRepository) {
		super(noteRepository);
		this.noteRepository = noteRepository;
	}

	@Override
	public NoteDto toDto(Note entity) {
		return NoteTransformer.transform(entity);
	}

	@Override
	public Note toEntity(NoteDto dto) {
		return NoteTransformer.transform(dto);
	}

	@Override
	public List<NoteDto> getNotes(ServerNotesSearchCriteria searchDto, Integer userId) {
		List<NoteDto> noteDtoList = new ArrayList<>();

		if(searchDto.getTypeList().contains(NoteType.Note)) {
			List<NoteDto> notepadDtoList = toDtos(this.noteRepository.findNotepad(userId, searchDto));
			noteDtoList.addAll(notepadDtoList);
		}
		
		if(searchDto.getTypeList().contains(NoteType.Checklist)) {
			List<NoteDto> checkpadDtoList = toDtos(this.noteRepository.findCheckpad(userId, searchDto));
			noteDtoList.addAll(checkpadDtoList);
		}
		
		if(searchDto.getTypeList().contains(NoteType.Reminder)) {
			List<NoteDto> reminderDtoList = toDtos(this.noteRepository.findReminder(userId, searchDto));
			noteDtoList.addAll(reminderDtoList);
		}
		
		return noteDtoList;
	}

}
