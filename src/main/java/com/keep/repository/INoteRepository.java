/**
 * 
 */
package com.keep.repository;

import org.springframework.stereotype.Repository;

import com.keep.entity.Note;

/**
 * @author swanandm
 *
 */
@Repository
public interface INoteRepository extends ICrudRepository<Note>, INoteRepositoryCustom {

}
