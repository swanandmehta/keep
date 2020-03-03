/**
 * 
 */
package com.keep.impl;

import java.util.List;

import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;

import com.keep.dto.LabelDto;
import com.keep.entity.Label;
import com.keep.repository.ILabelRepository;
import com.keep.services.ILabelService;
import com.keep.transformer.LabelTransformer;

/**
 * @author swanandm
 *
 */
@Service
public class LabelService extends CrudService<LabelDto, Label> implements ILabelService {
	
	private final ILabelRepository labelRepository;
	
	public LabelService(ILabelRepository labelRepository) {
		super(labelRepository);
		this.labelRepository = labelRepository;
	}

	@Override
	public LabelDto toDto(Label entity) {
		return LabelTransformer.toDto(entity);
	}

	@Override
	public Label toEntity(LabelDto dto) {
		return LabelTransformer.toEntity(dto);
	}

	@Override
	public List<LabelDto> getByUserIdAndName(Integer userId, String name) {
		
		Label label = new Label();
		label.setUserId(userId);
		label.setName(name);
		
		return toDtos(labelRepository.findAll(Example.of(label)));
	}
	
}
