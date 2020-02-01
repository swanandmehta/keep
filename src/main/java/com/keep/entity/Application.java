/**
 * 
 */
package com.keep.entity;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

/**
 * @author swanandm
 *
 */
@Entity
@Table(name="APP")
public class Application implements IKeepEntity {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="ID")
	private Integer id;
	
	@Column(name="NAME")
	private String name;
	
	@Column(name="CREATED_BY")
	private Integer creatorId;
	
	@OneToOne(cascade= {}, fetch=FetchType.LAZY)
	@JoinColumn(name="CREATED_BY", insertable=false, updatable=false)
	private User creator;
	
	@OneToMany(cascade= {}, fetch=FetchType.LAZY)
	@JoinTable(
		name="APP_USERS",
		joinColumns=@JoinColumn(name="APP_ID"),
		inverseJoinColumns=@JoinColumn(name="USER_ID")
	)
	private Set<User> userList;
	
	@OneToMany(cascade= {}, fetch=FetchType.LAZY, mappedBy="application")
	private Set<ApplicationUser> applicationUserList;
	
	@OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "application")
	private Image image;

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

	public Integer getCreatorId() {
		return creatorId;
	}

	public void setCreatorId(Integer creatorId) {
		this.creatorId = creatorId;
	}

	public User getCreator() {
		return creator;
	}

	public void setCreator(User creator) {
		this.creator = creator;
	}

	public Set<User> getUserList() {
		return userList;
	}

	public void setUserList(Set<User> userList) {
		this.userList = userList;
	}

	public Set<ApplicationUser> getApplicationUserList() {
		return applicationUserList;
	}

	public void setApplicationUserList(Set<ApplicationUser> applicationUserList) {
		this.applicationUserList = applicationUserList;
	}

	public Image getImage() {
		return image;
	}

	public void setImage(Image image) {
		this.image = image;
	}

}
