/**
 * 
 */
package com.keep.transformer;

import java.util.ArrayList;
import java.util.List;

import com.keep.dto.ClientNotesSearchCriteria;
import com.keep.dto.ServerNotesSearchCriteria;
import com.keep.enums.NoteType;

/**
 * @author swanandm
 *
 */
public class NotesSearchCriteriaTransformer {

	public static ServerNotesSearchCriteria toServerDto(ClientNotesSearchCriteria searchDto) {
		ServerNotesSearchCriteria criteria = new ServerNotesSearchCriteria();
		
		criteria.setLabelList(searchDto.getLableList());
		
		if(searchDto.getTypeList() != null && !searchDto.getTypeList().isEmpty()) {
			List<NoteType> typeList = new ArrayList<>(searchDto.getTypeList().size());
			
			searchDto.getTypeList().stream().forEach(e -> {
				NoteType type = NoteType.getByValue(e);
				if(type != null) {
					typeList.add(type);
				}
			});
			
			criteria.setTypeList(typeList);
		}
		
		return criteria;
	}

}
