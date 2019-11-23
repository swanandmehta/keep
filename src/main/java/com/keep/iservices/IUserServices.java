package com.keep.iservices;

import com.keep.dto.UserDto;
import com.keep.entity.User;

public interface IUserServices extends ICrudService<UserDto, User> {

	UserDto validateEmail(String email);
	
}
