/**
 * 
 */
package com.keep.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.keep.dto.NoteDto;
import com.keep.dto.NotesSearchCriteria;
import com.keep.entity.Note;
import com.keep.repository.INoteRepository;
import com.keep.services.INoteServices;

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
		NoteDto dto = new NoteDto();
		return dto;
	}

	@Override
	public Note toEntity(NoteDto dto) {
		Note entity = new Note();
		return entity;
	}

	@Override
	public Note save(Note entity) {
		return null;
	}

	@Override
	public Optional<Note> findById(Integer id) {
		return null;
	}

	@Override
	public List<Note> findAllById(List<Integer> idList) {
		return null;
	}

	@Override
	public void delete(Note entity) {

	}

	@Override
	public void deleteById(Integer id) {

	}

	@Override
	public List<NoteDto> getNotes(NotesSearchCriteria searchDto, Integer userId) {
		return toDtos(this.noteRepository.findAll());
	}

}
