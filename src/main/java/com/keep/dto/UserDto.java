/**
 * 
 */
package com.keep.dto;

/**
 * @author swanandm
 *
 */
public class UserDto implements IKeepDto {
	
	private Integer id;
	private String name;
	private String email;
	private String password;
	private String confirmPassword;
	private boolean acceptConditions;
	
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getConfirmPassword() {
		return confirmPassword;
	}
	public void setConfirmPassword(String confirmPassword) {
		this.confirmPassword = confirmPassword;
	}
	public boolean isAcceptConditions() {
		return acceptConditions;
	}
	public void setAcceptConditions(boolean acceptConditions) {
		this.acceptConditions = acceptConditions;
	}
}
