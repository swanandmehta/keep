/**
 * 
 */
package com.keep.transformer;

import com.keep.dto.UserDto;
import com.keep.entity.User;

/**
 * @author swanandm
 *
 */
public class UserTransformer {

	public static UserDto transform(User entity) {
		
		if(entity != null) {
			UserDto dto = new UserDto();

			dto.setId(entity.getId());
			dto.setName(entity.getName());
			dto.setEmail(entity.getEmail());
			dto.setPassword(entity.getPassword());
			dto.setConfirmPassword(entity.getPassword());
			dto.setAcceptConditions("Y".equals(entity.getTeamsAndConditions()));
			
			return dto;
		}
		
		return null;
	}

	public static User transform(UserDto dto) {

		if(dto != null) {
			User user = new User();
			
			user.setId(dto.getId());
			user.setName(dto.getName());
			user.setEmail(dto.getEmail());
			user.setPassword(dto.getPassword());
			user.setTeamsAndConditions(true == dto.isAcceptConditions() ? "Y" : "N");
			
			return user;
		}
		
		return null;

	}

}
