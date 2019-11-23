/**
 * 
 */
package com.keep.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.keep.dto.UserDto;
import com.keep.iservices.IKeepService;
import com.keep.services.impl.KeepService;

/**
 * @author swanandm
 *
 */
@RestController
@RequestMapping(path="/v1")
public class KeepController {
	
	private final IKeepService keepService;
	
	public KeepController(KeepService keepService) {
		this.keepService = keepService;
	}
		
	@GetMapping(path="/user/validate-email")
	public UserDto validateEmail(@RequestParam(name="email") String email) {
		return keepService.validateEmail(email);
	}
	
	@PostMapping(path="/user/save")
	public UserDto saveUser(@RequestBody UserDto userDto) {
		return keepService.saveUser(userDto);
	}
	
}
