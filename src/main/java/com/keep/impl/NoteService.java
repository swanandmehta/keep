/**
 * 
 */
package com.keep.impl;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.keep.dto.NoteDto;
import com.keep.dto.ServerNotesSearchCriteria;
import com.keep.entity.Label;
import com.keep.entity.Note;
import com.keep.enums.NoteType;
import com.keep.repository.ILabelRepository;
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
	private final ILabelRepository labelRepository;

	public NoteService(INoteRepository noteRepository, ILabelRepository labelRepository) {
		super(noteRepository);
		this.noteRepository = noteRepository;
		this.labelRepository = labelRepository;
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
	public Note save(Note entity) {
		Set<Label> labelSet = entity.getLabelSet();
		
		Set<String> labelNameSet = labelSet.stream()
											.map(label -> label.getName().toUpperCase())
											.collect(Collectors.toSet());
		
		Set<Label> dbLabelSet = labelRepository.findByName(labelNameSet);
		
		labelSet.addAll(dbLabelSet);
		
		Map<String, Label> commonValues = labelSet.stream()
													.collect(Collectors.toMap(
																	label -> label.getName().toUpperCase(), 
																	label -> label,
																	(addedLabel, newLabel) -> {
																		if(addedLabel.getId() != null) {
																			return addedLabel;																			
																		}else if(newLabel.getId() != null) {
																			return newLabel;
																		}
																		return newLabel;
																	}
																)
															);
		entity.setLabelSet(new HashSet<Label>(commonValues.values()));
		
		return super.save(entity);
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

	@Override
	public NoteDto archiveNote(NoteDto noteDto) {
		Note note = findById(noteDto.getId()).get();
		
		return toDto(note);
	}

}
