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

	private Integer id;
	private String heading;
	private Integer userId;
	private String type;
	private String note;
	private DateDto date;
	private TimeDto time;
	private String repeat;
	private List<LabelDto> labelList;
	private List<CheckItemDto> itemList;
	
	
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getHeading() {
		return heading;
	}
	public void setHeading(String heading) {
		this.heading = heading;
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
	public String getNote() {
		return note;
	}
	public void setNote(String note) {
		this.note = note;
	}
	public DateDto getDate() {
		return date;
	}
	public void setDate(DateDto date) {
		this.date = date;
	}
	public TimeDto getTime() {
		return time;
	}
	public void setTime(TimeDto time) {
		this.time = time;
	}
	public String getRepeat() {
		return repeat;
	}
	public void setRepeat(String repeat) {
		this.repeat = repeat;
	}
	public List<LabelDto> getLabelList() {
		return labelList;
	}
	public void setLabelList(List<LabelDto> labelList) {
		this.labelList = labelList;
	}
	public List<CheckItemDto> getItemList() {
		return itemList;
	}
	public void setItemList(List<CheckItemDto> itemList) {
		this.itemList = itemList;
	}
	
}
