/**
 * 
 */
package com.keep.repository;

import java.util.List;
import java.util.Set;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.keep.entity.Label;

/**
 * @author swanandm
 *
 */
@Repository
public interface ILabelRepository extends ICrudRepository<Label> {

	List<Label> getByUserIdAndName(Integer userId, String label);

	@Query("SELECT e FROM com.keep.entity.Label e WHERE UPPER(e.name) IN :labelNameList")
	Set<Label> findByName(@Param("labelNameList") Set<String> labelNameSet);

}
