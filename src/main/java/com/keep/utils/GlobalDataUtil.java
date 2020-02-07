/**
 * 
 */
package com.keep.utils;

import java.util.List;

import com.keep.entity.CheckpadState;
import com.keep.entity.ReminderType;

/**
 * @author swanandm
 *
 */
public class GlobalDataUtil {
	
	private static List<CheckpadState> checkpadStates;
	private static List<ReminderType> reminderTypes;

	public static List<CheckpadState> getCheckpadStates() {
		return checkpadStates;
	}

	public static void setCheckpadStates(List<CheckpadState> checkpadStates) {
		GlobalDataUtil.checkpadStates = checkpadStates;
	}

	public static List<ReminderType> getReminderTypes() {
		return reminderTypes;
	}

	public static void setReminderTypes(List<ReminderType> reminderTypes) {
		GlobalDataUtil.reminderTypes = reminderTypes;
	} 

}
