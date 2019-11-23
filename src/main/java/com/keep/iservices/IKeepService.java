/**
 * 
 */
package com.keep.iservices;

import org.springframework.stereotype.Service;

import com.keep.dto.UserDto;

/**
 * @author swanandm
 *
 */
@Service
public interface IKeepService {

	UserDto validateEmail(String email);

	UserDto saveUser(UserDto userDto);

}
