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
import javax.persistence.OneToOne;
import javax.persistence.Table;

/**
 * @author swanandm
 *
 */
@Entity
@Table(name = "NOTE_LABEL")
public class NoteLabel implements IKeepEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private Integer id;
	
	@Column(name = "NOTE_ID")
	private Integer noteId;
	
	@Column(name = "LABEL_ID")
	private Integer labelId;
	
	@JoinColumn(name = "NOTE_ID", insertable = false, updatable = false)
	@OneToOne(cascade = {}, fetch = FetchType.LAZY)
	private Note note;
	
	@JoinColumn(name = "LABEL_ID", insertable = false, updatable = false)
	@OneToOne(cascade = {}, fetch = FetchType.LAZY)
	private Label label;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getNoteId() {
		return noteId;
	}

	public void setNoteId(Integer noteId) {
		this.noteId = noteId;
	}

	public Integer getLabelId() {
		return labelId;
	}

	public void setLabelId(Integer labelId) {
		this.labelId = labelId;
	}

	public Note getNote() {
		return note;
	}

	public void setNote(Note note) {
		this.note = note;
	}

	public Label getLabel() {
		return label;
	}

	public void setLabel(Label label) {
		this.label = label;
	}
	
	

}
