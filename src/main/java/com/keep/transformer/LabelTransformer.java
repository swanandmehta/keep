/**
 * 
 */
package com.keep.transformer;

import com.keep.dto.LabelDto;
import com.keep.entity.Label;

/**
 * @author swanandm
 *
 */
public class LabelTransformer {

	public static LabelDto toDto(Label entity) {
		LabelDto labelDto = new LabelDto();
		
		labelDto.setId(entity.getId());
		labelDto.setName(entity.getName());
		labelDto.setUserId(entity.getUserId());
		
		return labelDto;
	}

	public static Label toEntity(LabelDto dto) {
		Label label = new Label();
		
		label.setId(dto.getId());
		label.setName(dto.getName());
		label.setUserId(dto.getUserId());
		
		return label;
	}

}
