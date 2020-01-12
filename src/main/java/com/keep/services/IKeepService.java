/**
 * 
 */
package com.keep.services;

import com.keep.dto.UserDto;

/**
 * @author swanandm
 *
 */
public interface IKeepService {

	UserDto validateEmail(String email);

	UserDto saveUser(UserDto userDto);

	UserDto login(UserDto userDto);

}
