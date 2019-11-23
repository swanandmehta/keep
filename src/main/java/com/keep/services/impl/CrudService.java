/**
 * 
 */
package com.keep.services.impl;

import java.util.List;
import java.util.Optional;

import com.keep.iservices.ICrudService;
import com.keep.repository.ICrudRepository;

/**
 * @author swanandm
 *
 */
public abstract class CrudService<Dto, Entity> implements ICrudService<Dto, Entity> {
	
	private final ICrudRepository<Entity> crudRepository;
	
	public CrudService(ICrudRepository<Entity> crudRepository) {
		this.crudRepository = crudRepository;
	}

	@Override
	public Entity save(Entity entity) {
		return crudRepository.save(entity);
	}

	@Override
	public Optional<Entity> findById(Integer id) {
		return crudRepository.findById(id);
	}

	@Override
	public List<Entity> findAllById(List<Integer> idList) {
		return crudRepository.findAllById(idList);
	}

	@Override
	public void delete(Entity entity) {
		crudRepository.delete(entity);
	}

	@Override
	public void deleteById(Integer id) {
		crudRepository.deleteById(id);
	}

}
