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
	
}
