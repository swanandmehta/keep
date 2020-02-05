/**
 * 
 */
package com.keep.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.keep.dto.NoteDto;
import com.keep.dto.NotesSearchCriteria;
import com.keep.entity.Note;
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
	public List<NoteDto> getNotes(NotesSearchCriteria searchDto, Integer userId) {
		return toDtos(this.noteRepository.findAll());
	}

}
