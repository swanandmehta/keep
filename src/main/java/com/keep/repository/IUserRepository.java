/**
 * 
 */
package com.keep.repository;

import org.springframework.stereotype.Repository;

import com.keep.entity.User;

/**
 * @author swanandm
 *
 */
@Repository
public interface IUserRepository extends ICrudRepository<User> {

	User findByEmailEquals(String email);

}
