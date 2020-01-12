package com.keep.services;

import com.keep.dto.UserDto;
import com.keep.entity.User;

public interface IUserServices extends ICrudService<UserDto, User> {

	UserDto validateEmail(String email);

	UserDto login(UserDto userDto);
	
}
