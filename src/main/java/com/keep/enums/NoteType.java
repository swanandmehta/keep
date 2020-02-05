/**
 * 
 */
package com.keep.enums;

import com.keep.exception.InvalidEnumException;

/**
 * @author swanandm
 *
 */
public enum NoteType implements IEnum<NoteType> {

	Reminder("Reminder"),
	Note("Note"),
	Checklist("CheckList");

	private String value;
	
	private NoteType(String value) {
		this.value = value;
	}

	public static NoteType getByValue(String value) {
		for(NoteType noteType : NoteType.values()) {
			if(noteType.value.equals(value)) {
				return noteType;
			}
		}
		
		throw new InvalidEnumException("No valid enum found for value "+value+".");
	}

	@Override
	public String getType() {
		return this.value;
	}
	
	
	
}
