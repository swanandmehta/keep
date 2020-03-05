/**
 * 
 */
package com.keep.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Service;

import com.keep.dto.ServerNotesSearchCriteria;
import com.keep.entity.Checkpad;
import com.keep.entity.Note;
import com.keep.entity.Notepad;
import com.keep.entity.Reminder;
import com.keep.utils.NoteUtil;

/**
 * @author swanandm
 *
 */
@Service
public class INoteRepositoryCustomImpl implements INoteRepositoryCustom {
	
	@PersistenceContext
	private final EntityManager entityManager;
	
	public INoteRepositoryCustomImpl(EntityManager entityManager) {
		this.entityManager = entityManager;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Note> findNotepad(Integer userId, ServerNotesSearchCriteria searchDto) {
		StringBuilder noteQuery = NoteUtil.getFindNoteQuery(userId, searchDto, Notepad.class);
		
		Query query = entityManager.createQuery(noteQuery.toString(), Notepad.class);
		
		query.setParameter("userId", userId);
		
		if(searchDto.getLabelList() != null && !searchDto.getLabelList().isEmpty()) {
			query.setParameter("labelNameList", searchDto.getLabelList());
		}
		
		if(searchDto.getNoteStateId() != null && !searchDto.getNoteStateId().isEmpty()) {
			query.setParameter("noteStateIdList", searchDto.getNoteStateId());
		}
		
		return query.getResultList();
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Note> findCheckpad(Integer userId, ServerNotesSearchCriteria searchDto) {
		StringBuilder noteQuery = NoteUtil.getFindNoteQuery(userId, searchDto, Checkpad.class);
		
		Query query = entityManager.createQuery(noteQuery.toString(), Checkpad.class);
		
		query.setParameter("userId", userId);
		
		if(searchDto.getLabelList() != null && !searchDto.getLabelList().isEmpty()) {
			query.setParameter("labelNameList", searchDto.getLabelList());
		}
		
		if(searchDto.getNoteStateId() != null && !searchDto.getNoteStateId().isEmpty()) {
			query.setParameter("noteStateIdList", searchDto.getNoteStateId());
		}
		
		return query.getResultList();
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Note> findReminder(Integer userId, ServerNotesSearchCriteria searchDto) {
		StringBuilder noteQuery = NoteUtil.getFindNoteQuery(userId, searchDto, Reminder.class);
		
		Query query = entityManager.createQuery(noteQuery.toString(), Reminder.class);
		
		query.setParameter("userId", userId);
		
		if(searchDto.getLabelList() != null && !searchDto.getLabelList().isEmpty()) {
			query.setParameter("labelNameList", searchDto.getLabelList());
		}
		
		if(searchDto.getNoteStateId() != null && !searchDto.getNoteStateId().isEmpty()) {
			query.setParameter("noteStateIdList", searchDto.getNoteStateId());
		}
		
		return query.getResultList();
	}

}
