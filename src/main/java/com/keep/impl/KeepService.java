/**
 * 
 */
package com.keep.impl;

import org.springframework.stereotype.Service;

import com.keep.dto.UserDto;
import com.keep.services.IKeepService;
import com.keep.services.IUserServices;

/**
 * @author swanandm
 *
 */
@Service
public class KeepService implements IKeepService {
	
	private final IUserServices userService;
	
	public KeepService(UserService userService) {
		this.userService = userService;
	}

	@Override
	public UserDto validateEmail(String email) {
		return userService.validateEmail(email);
	}

	@Override
	public UserDto saveUser(UserDto userDto) {
		return userService.persist(userDto);
	}

	@Override
	public UserDto login(UserDto userDto) {
		return userService.login(userDto);
	}
}
