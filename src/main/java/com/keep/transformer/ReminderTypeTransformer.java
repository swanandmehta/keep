/**
 * 
 */
package com.keep.transformer;

import java.util.ArrayList;
import java.util.List;

import com.keep.dto.ReminderTypeDto;
import com.keep.entity.ReminderType;

/**
 * @author swanandm
 *
 */
public class ReminderTypeTransformer {

	public static List<ReminderTypeDto> transform(List<ReminderType> reminderTypeList) {
		List<ReminderTypeDto> list = new ArrayList<ReminderTypeDto>(reminderTypeList.size());
		
		reminderTypeList.parallelStream().forEach(element -> {
			ReminderTypeDto dto = ReminderTypeTransformer.transform(element);
			list.add(dto);
		});
		
		return list;
	}

	public static ReminderTypeDto transform(ReminderType reminderType) {
		ReminderTypeDto dto = new ReminderTypeDto();
		
		dto.setId(reminderType.getId());
		dto.setName(reminderType.getName());
		
		return dto;
	}

}
