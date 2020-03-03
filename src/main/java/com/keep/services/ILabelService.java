/**
 * 
 */
package com.keep.services;

import java.util.List;

import com.keep.dto.LabelDto;
import com.keep.entity.Label;

/**
 * @author swanandm
 *
 */
public interface ILabelService extends ICrudService<LabelDto, Label> {

	List<LabelDto> getByUserIdAndName(Integer userId, String label);

}
