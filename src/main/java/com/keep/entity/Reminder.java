/**
 * 
 */
package com.keep.entity;

import java.sql.Timestamp;

import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * @author swanandm
 *
 */
@Entity
@Table(name = "REMINDER")
public class Reminder extends Note implements IKeepEntity {
	
	private Timestamp triggerTime;

	public Timestamp getTriggerTime() {
		return triggerTime;
	}

	public void setTriggerTime(Timestamp triggerTime) {
		this.triggerTime = triggerTime;
	}

}
