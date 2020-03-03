/**
 * 
 */
package com.keep.repository;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.keep.entity.Label;

/**
 * @author swanandm
 *
 */
@Repository
public interface ILabelRepository extends ICrudRepository<Label> {

	List<Label> getByUserIdAndName(Integer userId, String label);

}
