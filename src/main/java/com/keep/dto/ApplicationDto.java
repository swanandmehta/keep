/**
 * 
 */
package com.keep.dto;

/**
 * @author swanandm
 *
 */
public class ApplicationDto implements IKeepDto {
	
	private Integer id;
	private String name;
	private String img;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getImg() {
		return img;
	}
	public void setImg(String img) {
		this.img = img;
	}
	
	
}
