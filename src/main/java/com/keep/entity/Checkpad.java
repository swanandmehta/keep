/**
 * 
 */
package com.keep.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

/**
 * @author swanandm
 *
 */
@Entity
@Table(name = "CHECKPAD")
public class Checkpad extends Note implements IKeepEntity {

	@Column(name = "DATA")
	private String data;
	
	@Column(name = "CHECKPAD_STATE_ID")
	private Integer checkpadStateId;
	
	@OneToOne(cascade = {}, fetch = FetchType.LAZY)
	@JoinColumn(name = "CHECKPAD_STATE_ID", insertable = false, updatable = false)
	private CheckpadState checkpadState;

	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}

	public Integer getCheckpadStateId() {
		return checkpadStateId;
	}

	public void setCheckpadStateId(Integer checkpadStateId) {
		this.checkpadStateId = checkpadStateId;
	}

	public CheckpadState getCheckpadState() {
		return checkpadState;
	}

	public void setCheckpadState(CheckpadState checkpadState) {
		this.checkpadState = checkpadState;
	}
	
}
