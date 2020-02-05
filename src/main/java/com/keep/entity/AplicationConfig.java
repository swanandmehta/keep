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
@Table(name = "APP_CONFIG")
public class AplicationConfig implements IKeepEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="ID")
	private Integer id;
	
	@Column(name="IMG_ID")
	private Integer imgId;
	
	@Column(name="APP_ID")
	private Integer appId;
	
	@Column(name = "URL")
	private String url;
	
	@OneToOne(cascade = {}, fetch = FetchType.LAZY)
	@JoinColumn(name = "IMG_ID", insertable = false, updatable = false)
	private Image img;
	
	@OneToOne(cascade = {}, fetch = FetchType.LAZY)
	@JoinColumn(name = "APP_ID", insertable = false, updatable = false)
	private Application appliction;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getImgId() {
		return imgId;
	}

	public void setImgId(Integer imgId) {
		this.imgId = imgId;
	}

	public Integer getAppId() {
		return appId;
	}

	public void setAppId(Integer appId) {
		this.appId = appId;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public Image getImg() {
		return img;
	}

	public void setImg(Image img) {
		this.img = img;
	}

	public Application getAppliction() {
		return appliction;
	}

	public void setAppliction(Application appliction) {
		this.appliction = appliction;
	}
	
	

}
