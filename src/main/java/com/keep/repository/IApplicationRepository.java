/**
 * 
 */
package com.keep.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.keep.entity.Application;

/**
 * @author swanandm
 *
 */
@Repository
public interface IApplicationRepository extends ICrudRepository<Application> {

	@Query(value="SELECT e FROM Application e INNER JOIN ApplicationUser au ON e.id = au.appId INNER JOIN User u ON au.userId = u.id WHERE u.id = :userId")
	List<Application> getApplications(@Param("userId") Integer userId);

}
