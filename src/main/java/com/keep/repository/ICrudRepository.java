/**
 * 
 */
package com.keep.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

/**
 * @author swanandm
 *
 */
@NoRepositoryBean
public interface ICrudRepository<T> extends JpaRepository<T, Integer> {

}
