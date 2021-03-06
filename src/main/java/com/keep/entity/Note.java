/**
 * 
 */
package com.keep.entity;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

/**
 * @author swanandm
 *
 */
@Entity
@Table(name = "NOTE")
@Inheritance(strategy = InheritanceType.JOINED)
public class Note implements IKeepEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private Integer id;
	
	@Column(name = "HEADING")
	private String heading;
	
	@Column(name = "USER_ID")
	private Integer userId;
	
	@Column(name = "NOTE_STATE_ID")
	private Integer noteStateId;
	
	@OneToOne(cascade = {}, fetch = FetchType.LAZY)
	@JoinColumn(name = "USER_ID", insertable = false, updatable = false)
	private User user;
	
	@OneToMany(cascade = {}, fetch = FetchType.LAZY, mappedBy = "note")
	private Set<NoteLabel> noteLabelSet;
	
	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	@JoinTable(name = "NOTE_LABEL", 
		joinColumns = @JoinColumn(name = "NOTE_ID"), 
		inverseJoinColumns = @JoinColumn(name = "LABEL_ID")
	)
	private Set<Label> labelSet;
	
	@OneToOne(cascade = {}, fetch = FetchType.LAZY)
	@JoinColumn(name = "NOTE_STATE_ID", insertable = false, updatable = false)
	private NoteState noteState;

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

	public Integer getNoteStateId() {
		return noteStateId;
	}

	public void setNoteStateId(Integer noteStateId) {
		this.noteStateId = noteStateId;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Set<NoteLabel> getNoteLabelSet() {
		return noteLabelSet;
	}

	public void setNoteLabelSet(Set<NoteLabel> noteLabelSet) {
		this.noteLabelSet = noteLabelSet;
	}

	public Set<Label> getLabelSet() {
		return labelSet;
	}

	public void setLabelSet(Set<Label> labelSet) {
		this.labelSet = labelSet;
	}

	public NoteState getNoteState() {
		return noteState;
	}

	public void setNoteState(NoteState noteState) {
		this.noteState = noteState;
	}
	
}
