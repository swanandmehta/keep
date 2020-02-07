/**
 * 
 */
package com.keep.dto;

import java.util.List;

/**
 * @author swanandm
 *
 */
public class NoteDto implements IKeepDto {

	private String heading;
	private String note;
	private Integer userId;
	private String type;
	private Integer id;
	private List<CheckItemDto> itemList;
	
	public String getHeading() {
		return heading;
	}
	public void setHeading(String heading) {
		this.heading = heading;
	}
	public String getNote() {
		return note;
	}
	public void setNote(String note) {
		this.note = note;
	}
	public Integer getUserId() {
		return userId;
	}
	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public List<CheckItemDto> getItemList() {
		return itemList;
	}
	public void setItemList(List<CheckItemDto> itemList) {
		this.itemList = itemList;
	}
	
}
