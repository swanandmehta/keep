/**
 * 
 */
package com.keep.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.keep.entity.User;

/**
 * @author swanandm
 *
 */
@Repository
public interface IUserRepository extends ICrudRepository<User> {

	User findByEmailEquals(String email);

	@Query(value="SELECT e FROM User e WHERE e.email = :email AND e.password = :password")
	User findByEmailAndPassword(@Param("email") String email, @Param("password") String password);

}
