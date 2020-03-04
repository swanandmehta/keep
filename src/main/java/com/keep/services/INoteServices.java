/**
 * 
 */
package com.keep.services;

import java.util.List;

import com.keep.dto.NoteDto;
import com.keep.dto.ServerNotesSearchCriteria;
import com.keep.entity.Note;

/**
 * @author swanandm
 *
 */
public interface INoteServices extends ICrudService<NoteDto, Note> {

	List<NoteDto> getNotes(ServerNotesSearchCriteria searchDto, Integer userId);

	NoteDto archiveNote(NoteDto noteDto);

}
