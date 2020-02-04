/**
 * 
 */
package com.keep.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.keep.dto.ApplicationDto;
import com.keep.dto.NotesSearchCriteria;
import com.keep.dto.UserDto;
import com.keep.impl.KeepService;
import com.keep.services.IKeepService;

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
	
	//USER
	@GetMapping(path="/user/validate-email")
	public UserDto validateEmail(@RequestParam(name="email") String email) {
		return keepService.validateEmail(email);
	}
	
	@PostMapping(path="/user/save")
	public UserDto saveUser(@RequestBody UserDto userDto) {
		return keepService.saveUser(userDto);
	}
	
	@PostMapping(path="/user/login")
	public UserDto login(@RequestBody UserDto userDto) {
		return keepService.login(userDto);
	}
	
	//Applications
	@GetMapping(path="/applications")
	public List<ApplicationDto> getAppliction(@RequestParam(name="userId") Integer userId) {
		return keepService.getApplications(userId);
	}
	
	//Keep Application
	@PostMapping(path="/keep/listing")
	public List<?> getNotes(@RequestParam(name="userId") Integer userId, @RequestBody NotesSearchCriteria searchDto) {
		return keepService.getNotes(searchDto, userId);
	}
}
