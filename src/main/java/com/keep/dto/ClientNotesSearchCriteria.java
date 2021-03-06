/**
 * 
 */
package com.keep.dto;

import java.util.List;

/**
 * @author swanandm
 *
 */
public class ClientNotesSearchCriteria implements IKeepDto {
	
	private List<String> lableList;
	
	private List<String> typeList;
	
	private List<String> noteStatus;
	
	private List<Integer> idList;

	public List<String> getLableList() {
		return lableList;
	}

	public void setLableList(List<String> lableList) {
		this.lableList = lableList;
	}

	public List<String> getTypeList() {
		return typeList;
	}

	public void setTypeList(List<String> typeList) {
		this.typeList = typeList;
	}

	public List<String> getNoteStatus() {
		return noteStatus;
	}

	public void setNoteStatus(List<String> noteStatus) {
		this.noteStatus = noteStatus;
	}

	public List<Integer> getIdList() {
		return idList;
	}

	public void setIdList(List<Integer> idList) {
		this.idList = idList;
	}	
}
