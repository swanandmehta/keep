/**
 * 
 */
package com.keep.services.impl;

import com.keep.dto.UserDto;
import com.keep.entity.User;
import com.keep.iservices.IUserServices;
import com.keep.repository.IUserRepository;

/**
 * @author swanandm
 *
 */
public class UserService extends CrudService<UserDto, User> implements IUserServices {
	
	public UserService(IUserRepository userRepository) {
		super(userRepository);
	}

	@Override
	public UserDto toDto(User entity) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public User toEntity(UserDto dto) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public UserDto validateEmail(String email) {
		// TODO Auto-generated method stub
		return null;
	}
	
}
