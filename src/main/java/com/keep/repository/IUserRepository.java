/**
 * 
 */
package com.keep.repository;

import org.springframework.data.repository.NoRepositoryBean;

import com.keep.entity.User;

/**
 * @author swanandm
 *
 */
@NoRepositoryBean
public interface IUserRepository extends ICrudRepository<User> {

}
