/**
 * 
 */
package com.keep.transformer;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.keep.dto.CheckItemDto;
import com.keep.dto.NoteDto;
import com.keep.entity.Checkpad;
import com.keep.entity.CheckpadItem;
import com.keep.entity.Note;
import com.keep.entity.Notepad;
import com.keep.entity.Reminder;
import com.keep.enums.NoteType;
import com.keep.exception.InvalidCaseException;
import com.keep.utils.NoteUtil;

/**
 * @author swanandm
 *
 */
public class NoteTransformer {

	public static Note transform(NoteDto dto) {
		NoteType type = NoteType.getByValue(dto.getType());
		
		switch(type) {
		case Checklist:
			return getCheckpad(dto);
		case Note:
			return getNotepad(dto);
		case Reminder:
			return null;
		default:
			throw new InvalidCaseException("Could not find valid case for Note type");
		}		
	}

	private static Note getNotepad(NoteDto dto) {
		Notepad notepad = new Notepad();
		notepad.setData(dto.getNote());
		notepad.setHeading(dto.getHeading());
		notepad.setUserId(dto.getUserId());
		return notepad;
	}

	private static Note getCheckpad(NoteDto dto) {
		Checkpad checkpad = new Checkpad();
		Set<CheckpadItem> checkpadItemList = new HashSet<>(dto.getItemList().size());
		
		dto.getItemList().stream().forEach(item -> {
			CheckpadItem checkpadItem = new CheckpadItem();
			checkpadItem.setCheckpadState(NoteUtil.getCheckPadState(item.getStatus()));
			checkpadItem.setCheckpadStateId(NoteUtil.getCheckPadState(item.getStatus()).getId());
			checkpadItem.setData(item.getText());
			checkpadItem.setCheckpad(checkpad);
			checkpadItemList.add(checkpadItem);
		});
		
		checkpad.setCheckpadItem(checkpadItemList);
		checkpad.setHeading(dto.getHeading());
		checkpad.setUserId(dto.getUserId());
		
		return checkpad;
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
			dto.setItemList(getItemList(entity));
		}
		
		return dto;
	}

	private static List<CheckItemDto> getItemList(Note entity) {
		Checkpad checkpad = (Checkpad) entity;
		List<CheckItemDto> checkItemDtoList = new ArrayList<CheckItemDto>(checkpad.getCheckpadItem().size());
		
		checkpad.getCheckpadItem().stream().forEach(element->{
			CheckItemDto dto = new CheckItemDto();
			dto.setId(element.getId());
			dto.setStatus(Boolean.parseBoolean(element.getCheckpadState().getName()));
			dto.setText(element.getData());
			checkItemDtoList.add(dto);
		});
		
		return checkItemDtoList;
	}

}
