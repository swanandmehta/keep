/**
 * 
 */
package com.keep.entity;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 * @author swanandm
 *
 */
@Entity
@Table(name="USERS")
public class User implements IKeepEntity {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="ID")
	private Integer id;
	
	@Column(name="NAME")
	private String name;
	
	@Column(name="EMAIL")
	private String email;
	
	@Column(name="PASSWORD")
	private String password;
	
	@Column(name="TERMS_AND_CONDTIONS")
	private String teamsAndConditions;
	
	@OneToMany(cascade= {}, fetch=FetchType.LAZY)
	@JoinTable(
		name="APP_USERS",
		joinColumns=@JoinColumn(name="USER_ID"),
		inverseJoinColumns=@JoinColumn(name="APP_ID")
	)
	private Set<Application> applicationList;
	
	@OneToMany(cascade= {}, fetch=FetchType.LAZY, mappedBy="user")
	private Set<ApplicationUser> applicationUserList;

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

	public String getTeamsAndConditions() {
		return teamsAndConditions;
	}

	public void setTeamsAndConditions(String teamsAndConditions) {
		this.teamsAndConditions = teamsAndConditions;
	}

	public Set<Application> getApplicationList() {
		return applicationList;
	}

	public void setApplicationList(Set<Application> applicationList) {
		this.applicationList = applicationList;
	}

	public Set<ApplicationUser> getApplicationUserList() {
		return applicationUserList;
	}

	public void setApplicationUserList(Set<ApplicationUser> applicationUserList) {
		this.applicationUserList = applicationUserList;
	}
	
}
