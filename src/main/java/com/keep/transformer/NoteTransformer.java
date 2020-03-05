/**
 * 
 */
package com.keep.transformer;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import com.keep.dto.CheckItemDto;
import com.keep.dto.DateDto;
import com.keep.dto.LabelDto;
import com.keep.dto.NoteDto;
import com.keep.dto.TimeDto;
import com.keep.entity.Checkpad;
import com.keep.entity.CheckpadItem;
import com.keep.entity.Label;
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
			return getReminder(dto);
		default:
			throw new InvalidCaseException("Could not find valid case for Note type");
		}		
	}
	
	private static Set<Label> getLabelSet(List<LabelDto> labelList) {
		if(labelList != null && !labelList.isEmpty()) {
			return labelList.stream().map(e -> LabelTransformer.toEntity(e)).collect(Collectors.toSet());			
		}
		
		return new HashSet<Label>(0);

	}

	private static Note getReminder(NoteDto dto) {
		Reminder reminder = new Reminder();
		reminder.setId(dto.getId());
		reminder.setUserId(dto.getUserId());
		reminder.setHeading(dto.getHeading());
		reminder.setReminderTypeId(ReminderTypeTransformer.getReminderTypeId(dto.getRepeat()));
		
		LocalDateTime triggerTime = LocalDateTime.of(dto.getDate().getYear(), dto.getDate().getMonth(), 
				dto.getDate().getDay(), dto.getTime().getHour(), dto.getTime().getHour(), dto.getTime().getSecond());
		
		reminder.setTriggerTime(Timestamp.valueOf(triggerTime));
		reminder.setLabelSet(NoteTransformer.getLabelSet(dto.getLabelList()));
		reminder.setNoteStateId(NoteUtil.getStateId(dto.getState()));

		return reminder;
	}

	private static Note getNotepad(NoteDto dto) {
		Notepad notepad = new Notepad();
		notepad.setId(dto.getId());
		notepad.setData(dto.getNote());
		notepad.setHeading(dto.getHeading());
		notepad.setUserId(dto.getUserId());
		notepad.setLabelSet(NoteTransformer.getLabelSet(dto.getLabelList()));
		notepad.setNoteStateId(NoteUtil.getStateId(dto.getState()));		
		return notepad;
	}

	private static Note getCheckpad(NoteDto dto) {
		Checkpad checkpad = new Checkpad();
		Set<CheckpadItem> checkpadItemList = new HashSet<>(dto.getItemList().size());
		
		dto.getItemList().stream().forEach(item -> {
			CheckpadItem checkpadItem = new CheckpadItem();
			checkpadItem.setId(item.getId());
			checkpadItem.setCheckpadState(NoteUtil.getCheckPadState(item.getStatus()));
			checkpadItem.setCheckpadStateId(NoteUtil.getCheckPadState(item.getStatus()).getId());
			checkpadItem.setData(item.getText());
			checkpadItem.setCheckpad(checkpad);
			checkpadItemList.add(checkpadItem);
		});
		
		checkpad.setCheckpadItem(checkpadItemList);
		checkpad.setHeading(dto.getHeading());
		checkpad.setUserId(dto.getUserId());
		checkpad.setLabelSet(NoteTransformer.getLabelSet(dto.getLabelList()));
		checkpad.setNoteStateId(NoteUtil.getStateId(dto.getState()));
		checkpad.setId(dto.getId());
		
		return checkpad;
	}

	public static NoteDto transform(Note entity) {
		NoteDto dto = new NoteDto();
		dto.setUserId(entity.getUserId());
		dto.setId(entity.getId());
		dto.setHeading(entity.getHeading());	
		dto.setState(NoteUtil.getStateName(entity.getNoteStateId()));
		
		if(entity instanceof Notepad) {
			dto.setType(NoteType.Note.getType());
			
			dto.setNote(((Notepad) entity).getData());
		} else if(entity instanceof Reminder) {
			LocalDateTime localDateTime = ((Reminder) entity).getTriggerTime().toLocalDateTime();
			dto.setType(NoteType.Reminder.getType());
			dto.setRepeat(ReminderTypeTransformer.getReminderTypeName(((Reminder) entity).getReminderTypeId()));
			dto.setDate(getDate(localDateTime));
			dto.setTime(getTime(localDateTime));
		} else if(entity instanceof Checkpad) {
			dto.setType(NoteType.Checklist.getType());
			dto.setItemList(getItemList(entity));
		}
		
		return dto;
	}

	private static DateDto getDate(LocalDateTime localDateTime) {
		DateDto dto = new DateDto();
		dto.setDay(localDateTime.getDayOfMonth());
		dto.setMonth(localDateTime.getMonthValue());
		dto.setYear(localDateTime.getYear());
		return dto;
	}

	private static TimeDto getTime(LocalDateTime localDateTime) {
		TimeDto dto = new TimeDto();
		dto.setHour(localDateTime.getHour());
		dto.setMinute(localDateTime.getMinute());
		dto.setSecond(localDateTime.getSecond());
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
		
		return checkItemDtoList.stream().sorted((item1, item2) -> item1.getId().compareTo(item2.getId())).collect(Collectors.toList());
	}

}
