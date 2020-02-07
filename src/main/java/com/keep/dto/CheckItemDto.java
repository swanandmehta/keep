/**
 * 
 */
package com.keep.dto;

/**
 * @author swanandm
 *
 */
public class CheckItemDto implements IKeepDto {
	
	private Integer id;
	private String text;
	private String status;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getText() {
		return text;
	}
	public void setText(String text) {
		this.text = text;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	
}
