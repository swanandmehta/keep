/**
 * 
 */
package com.keep.iservices;

import com.keep.dto.UserDto;

/**
 * @author swanandm
 *
 */
public interface IKeepService {

	UserDto validateEmail(String email);

	UserDto saveUser(UserDto userDto);

}
