/**
 * 
 */
package com.keep.entity;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

/**
 * @author swanandm
 *
 */
@Entity
@Table(name = "REMINDER")
@Inheritance(strategy = InheritanceType.JOINED)
public class Reminder extends Note implements IKeepEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private Integer id;
	
	@Column(name = "TRIGGER_TIME")
	private Timestamp triggerTime;
	
	@Column(name = "REMINDER_REPEAT_ID")
	private Integer reminderTypeId;
	
	@ManyToOne(cascade = {}, fetch = FetchType.LAZY)
	@JoinColumn(name = "REMINDER_REPEAT_ID", insertable = false, updatable = false)
	private ReminderType reminderType;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Timestamp getTriggerTime() {
		return triggerTime;
	}

	public void setTriggerTime(Timestamp triggerTime) {
		this.triggerTime = triggerTime;
	}

	public Integer getReminderTypeId() {
		return reminderTypeId;
	}

	public void setReminderTypeId(Integer reminderTypeId) {
		this.reminderTypeId = reminderTypeId;
	}

	public ReminderType getReminderType() {
		return reminderType;
	}

	public void setReminderType(ReminderType reminderType) {
		this.reminderType = reminderType;
	}
	
	

}
