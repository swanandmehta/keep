package com.keep.utils;

import java.util.List;

import com.keep.entity.CheckpadState;
import com.keep.exception.InvalidInputException;

public class NoteUtil {

	public static CheckpadState getCheckPadState(String status) {
		List<CheckpadState> checkpandStateList = GlobalDataUtil.getCheckpadStates(); 
		for(CheckpadState state : checkpandStateList) {
			if(state.getName().equalsIgnoreCase(status)) {
				return state;
			}
		}
		throw new InvalidInputException("Invalid state of check item state.");
	}

}
