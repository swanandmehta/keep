/**
 * 
 */
package com.keep.entity;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.Table;

/**
 * @author swanandm
 *
 */
@Entity
@Table(name = "CHECKPAD")
public class Checkpad extends Note implements IKeepEntity {

	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "checkpad")
	private Set<CheckpadItem> checkpadItem;

	public Set<CheckpadItem> getCheckpadItem() {
		return checkpadItem;
	}

	public void setCheckpadItem(Set<CheckpadItem> checkpadItem) {
		this.checkpadItem = checkpadItem;
	}
	
}
