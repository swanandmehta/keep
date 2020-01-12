/**
 * 
 */
package com.keep.impl;

import org.springframework.stereotype.Service;

import com.keep.dto.UserDto;
import com.keep.entity.User;
import com.keep.repository.IUserRepository;
import com.keep.services.IUserServices;
import com.keep.transformer.UserTransformer;

/**
 * @author swanandm
 *
 */
@Service
public class UserService extends CrudService<UserDto, User> implements IUserServices {
	
	private final IUserRepository userRepository;
	
	public UserService(IUserRepository userRepository) {
		super(userRepository);
		this.userRepository = userRepository;
	}

	@Override
	public UserDto toDto(User entity) {
		return UserTransformer.transform(entity);
	}

	@Override
	public User toEntity(UserDto dto) {
		return UserTransformer.transform(dto);
	}

	@Override
	public UserDto validateEmail(String email) {
		User user = userRepository.findByEmailEquals(email);
		return toDto(user);
	}

	@Override
	public UserDto login(UserDto userDto) {
		User user = userRepository.findByEmailAndPassword(userDto.getEmail(), userDto.getPassword());
		return toDto(user);
	}
	
}
