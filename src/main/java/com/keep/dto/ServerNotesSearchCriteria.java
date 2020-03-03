/**
 * 
 */
package com.keep.dto;

import java.util.List;

import com.keep.enums.NoteType;

/**
 * @author swanandm
 *
 */
public class ServerNotesSearchCriteria implements IKeepDto {
	
	private List<String> labelList;
	
	private List<NoteType> typeList;

	public List<String> getLabelList() {
		return labelList;
	}

	public void setLabelList(List<String> labelList) {
		this.labelList = labelList;
	}

	public List<NoteType> getTypeList() {
		return typeList;
	}

	public void setTypeList(List<NoteType> typeList) {
		this.typeList = typeList;
	}
	
}
