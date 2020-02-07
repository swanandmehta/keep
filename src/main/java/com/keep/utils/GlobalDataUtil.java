/**
 * 
 */
package com.keep.utils;

import java.util.List;

import com.keep.entity.CheckpadState;

/**
 * @author swanandm
 *
 */
public class GlobalDataUtil {
	
	private static List<CheckpadState> checkpadStates;

	public static List<CheckpadState> getCheckpadStates() {
		return checkpadStates;
	}

	public static void setCheckpadStates(List<CheckpadState> checkpadStates) {
		GlobalDataUtil.checkpadStates = checkpadStates;
	} 

}
