/**
 * 
 */
package com.keep.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

/**
 * @author swanandm
 *
 */
@Entity
@Table(name = "CHECKPAD_ENTRY")
public class CheckpadItem implements IKeepEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private Integer id;
	
	@Column(name = "DATA")
	private String data;
	
	@Column(name = "CHECKPAD_STATE_ID", insertable = false, updatable = false)
	private Integer checkpadStateId;
	
	@Column(name = "CHECKPAD_ID", insertable = false, updatable = false)
	private Integer checkpadId;
	
	@OneToOne(cascade = {}, fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "CHECKPAD_STATE_ID", nullable = false)
	private CheckpadState checkpadState;
	
	@ManyToOne(cascade = {}, fetch = FetchType.LAZY, optional = false)
	@JoinColumn(name = "CHECKPAD_ID", nullable = false)
	private Checkpad checkpad;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

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

	public Integer getCheckpadId() {
		return checkpadId;
	}

	public void setCheckpadId(Integer checkpadId) {
		this.checkpadId = checkpadId;
	}

	public CheckpadState getCheckpadState() {
		return checkpadState;
	}

	public void setCheckpadState(CheckpadState checkpadState) {
		this.checkpadState = checkpadState;
	}

	public Checkpad getCheckpad() {
		return checkpad;
	}

	public void setCheckpad(Checkpad checkpad) {
		this.checkpad = checkpad;
	}
	
}
