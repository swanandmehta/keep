/**
 * 
 */
package com.keep.transformer;

import java.util.ArrayList;
import java.util.List;

import com.keep.dto.ReminderTypeDto;
import com.keep.entity.ReminderType;
import com.keep.utils.GlobalDataUtil;

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

	static Integer getReminderTypeId(String repeatType) {
		List<ReminderType> reminderTypeList = GlobalDataUtil.getReminderTypes();
		ReminderType reminderType = reminderTypeList.parallelStream().filter(type -> type.getName().equals(repeatType)).findFirst().get();
		return reminderType.getId();
		
	}

	static String getReminderTypeName(Integer reminderTypeId) {
		List<ReminderType> reminderTypeList = GlobalDataUtil.getReminderTypes();
		ReminderType reminderType = reminderTypeList.parallelStream().filter(type -> type.getId().equals(reminderTypeId)).findFirst().get();
		return reminderType.getName();
	}

}
