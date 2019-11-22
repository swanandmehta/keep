/**
 * 
 */
package com.keep.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author swanandm
 *
 */
@RestController
@RequestMapping("api/user")
public class UserController {
	
	@GetMapping(path="/validate-email")
	public Object validateEmail(@RequestParam(name="email") String email) {
		return null;
	}

}
