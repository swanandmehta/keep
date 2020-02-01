/**
 * 
 */
package com.keep.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

/**
 * @author swanandm
 *
 */
@Configuration
@PropertySource("classpath:default.properties")
public class DefaultPropertiesConfig {
	
	@Value("${keep.application.img.default}")
	private String img;

	public String getImg() {
		return img;
	}
}
