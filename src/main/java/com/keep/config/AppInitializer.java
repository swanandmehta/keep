/**
 * 
 */
package com.keep.config;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

/**
 * @author swanandm
 *
 */
@SpringBootApplication
@ComponentScan(basePackages = {"com.keep.controller", "com.keep.services.impl",
		"com.keep.repository"})
@EnableJpaRepositories(basePackages = {"com.keep.repository"})
@EntityScan(basePackages= {"com.keep.entity"})
public class AppInitializer {

	public static void main(String[] args) {
		SpringApplication.run(AppInitializer.class, args);
	}
	
}
