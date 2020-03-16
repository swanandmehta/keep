/**
 * 
 */
package com.keep.transformer;

import java.util.List;
import java.util.stream.Collectors;

import com.keep.dto.ClientNotesSearchCriteria;
import com.keep.dto.ServerNotesSearchCriteria;
import com.keep.entity.NoteState;
import com.keep.enums.NoteType;
import com.keep.utils.GlobalDataUtil;

/**
 * @author swanandm
 *
 */
public class NotesSearchCriteriaTransformer {

	public static ServerNotesSearchCriteria toServerDto(ClientNotesSearchCriteria searchDto) {
		ServerNotesSearchCriteria criteria = new ServerNotesSearchCriteria();
		
		if(searchDto.getLableList() != null && !searchDto.getLableList().isEmpty()) {
			criteria.setLabelList(searchDto.getLableList());			
		}

		
		if(searchDto.getTypeList() != null && !searchDto.getTypeList().isEmpty()) {
			
			List<NoteType> typeList = searchDto.getTypeList().stream()
																.map(e -> NoteType.getByValue(e))
																.filter(e-> e != null)
																.collect(Collectors.toList());
			
			criteria.setTypeList(typeList);
		}
		
		if(searchDto.getNoteStatus() != null && !searchDto.getNoteStatus().isEmpty()) {
			List<NoteState> noteStateList = GlobalDataUtil.getNoteStates();
			
			List<Integer> noteStatusIdList = searchDto.getNoteStatus().stream()
																		.map(stateName -> noteStateList.stream()
																								.filter(state -> state.getName().equals(stateName))
																								.findFirst())
																		.filter(e -> e.isPresent())
																		.map(e -> e.get().getId())
																		.collect(Collectors.toList());
			
			criteria.setNoteStateId(noteStatusIdList);
																		
		}
		
		if(searchDto.getIdList() != null && !searchDto.getIdList().isEmpty()) {
			criteria.setIdList(searchDto.getIdList());
		}

		return criteria;
	}

}
