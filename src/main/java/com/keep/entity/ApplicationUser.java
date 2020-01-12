/**
 * 
 */
package com.keep.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

/**
 * @author swanandm
 *
 */
@Entity
@Table(name="users_app")
public class ApplicationUser implements IKeepEntity {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="ID")
	private Integer id;
	
	@Column(name="USER_ID")
	private Integer userId;
	
	@Column(name="APP_ID")
	private Integer appId;
	
	@OneToOne(cascade= {}, fetch=FetchType.LAZY)
	@JoinColumn(name="USER_ID", insertable=false, updatable=false)
	private User user;
	
	@OneToOne(cascade= {}, fetch=FetchType.LAZY)
	@JoinColumn(name="APP_ID")
	private Application application;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public Integer getAppId() {
		return appId;
	}

	public void setAppId(Integer appId) {
		this.appId = appId;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Application getApplication() {
		return application;
	}

	public void setApplication(Application application) {
		this.application = application;
	}

}
