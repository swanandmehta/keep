/**
 * 
 */
package com.keep.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * @author swanandm
 *
 */
@Entity
@Table(name = "NOTEPAD")
public class Notepad extends Note implements IKeepEntity {
	
	@Column(name = "DATA")
	private String data;

	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}
	
}
