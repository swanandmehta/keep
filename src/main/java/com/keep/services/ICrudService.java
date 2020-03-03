/**
 * 
 */
package com.keep.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

/**
 * @author swanandm
 *
 */
public interface ICrudService<Dto, Entity> {
	
	default Dto persist(Dto element) {
		Entity entity = toEntity(element);
		entity = save(entity);
		Dto dto = toDto(entity);
		return dto;
	}

	default List<Dto> persistAll(List<Dto> elementList) {
		List<Dto> dtoList = new ArrayList<>(elementList.size());
		elementList.stream().forEach(element -> {
			Dto dto = persist(element);
			dtoList.add(dto);
		});
		return dtoList;
	}
	
	default Dto getById(Integer id) {
		Entity entity = findById(id).orElse(null);
		if(entity != null) {
			return toDto(entity);			
		}
		
		return null;

	}
	
	default List<Dto> getAll(List<Integer> idList) {
		List<Entity> entityList = findAllById(idList);
		return toDtos(entityList);
	}
	
	default void remove(Dto element) {
		Entity entity = toEntity(element);
		delete(entity);
	}
	
	default void removeAll(List<Dto> elementList) {
		elementList.stream().forEach(element -> {
			remove(element);
		});
	}
	
	default void removeById(Integer id) {
		deleteById(id);
	}
	
	default void removeAllById(List<Integer> deleteIdList) {
		deleteIdList.stream().forEach(element -> {
			removeById(element);
		});
	}
	
	default List<Dto> toDtos(List<Entity> entityList) {
		List<Dto> elementList = new ArrayList<>(entityList.size());
		entityList.stream().forEach(entity -> {
			Dto dto = toDto(entity);
			elementList.add(dto);
		});
		return elementList;
	}

	default List<Entity> toEntities(List<Dto> dtoList) {
		List<Entity> elementList = new ArrayList<>(dtoList.size());
		dtoList.stream().forEach(dto -> {
			Entity entity = toEntity(dto);
			elementList.add(entity);
		});
		return elementList;
	}
	
	default List<Entity> toEntityList(Entity entity){
		List<Entity> entityList = new ArrayList<Entity>(1);
		entityList.add(entity);
		return entityList;
	}
	
	default List<Dto> toDtoList(Dto dto){
		List<Dto> entityList = new ArrayList<Dto>(1);
		entityList.add(dto);
		return entityList;
	}
	
	Dto toDto(Entity entity);
	
	Entity toEntity(Dto dto);
	
	Entity save(Entity entity);
	
	Optional<Entity> findById(Integer id);
	
	List<Entity> findAllById(List<Integer> idList);

	void delete(Entity entity);
	
	void deleteById(Integer id);
}
