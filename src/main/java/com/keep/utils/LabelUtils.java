/**
 * 
 */
package com.keep.utils;

import java.util.ArrayList;
import java.util.List;

import com.keep.dto.LabelDto;

/**
 * @author swanandm
 *
 */
public class LabelUtils {

	public static List<LabelDto> getDefaultLabelDtoList(Integer userId) {
		List<LabelDto> labelDtoList = new ArrayList<LabelDto>(2);
		
		LabelDto archiveDto = new LabelDto();
		archiveDto.setId(userId);
		archiveDto.setName("Archive");
		
		LabelDto trashDto = new LabelDto();
		trashDto.setId(userId);
		trashDto.setName("Trash");
		
		labelDtoList.add(archiveDto);
		labelDtoList.add(trashDto);
		
		return labelDtoList;
	}

}
