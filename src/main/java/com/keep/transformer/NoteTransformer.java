/**
 * 
 */
package com.keep.transformer;

import com.keep.dto.NoteDto;
import com.keep.entity.Checkpad;
import com.keep.entity.Note;
import com.keep.entity.Notepad;
import com.keep.entity.Reminder;
import com.keep.enums.NoteType;
import com.keep.exception.InvalidCaseException;

/**
 * @author swanandm
 *
 */
public class NoteTransformer {

	public static Note transform(NoteDto dto) {
		NoteType type = NoteType.getByValue(dto.getType());
		
		switch(type) {
		case Checklist:
			return null;
		case Note:
			Notepad notepad = new Notepad();
			notepad.setData(dto.getNote());
			notepad.setHeading(dto.getHeading());
			notepad.setUserId(dto.getUserId());
			return notepad;
		case Reminder:
			return null;
		default:
			throw new InvalidCaseException("Could not find valid case for Note type");
		}		
	}

	public static NoteDto transform(Note entity) {
		NoteDto dto = new NoteDto();
		dto.setUserId(entity.getUserId());
		dto.setId(entity.getId());
		dto.setHeading(entity.getHeading());		
		
		if(entity instanceof Notepad) {
			dto.setType(NoteType.Note.getType());
			dto.setNote(((Notepad) entity).getData());
		} else if(entity instanceof Reminder) {
			dto.setType(NoteType.Reminder.getType());
		} else if(entity instanceof Checkpad) {
			dto.setType(NoteType.Checklist.getType());
		}
		
		return dto;
	}

}
