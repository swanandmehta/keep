/**
 * 
 */
package com.keep.runner;

import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import com.keep.impl.AppStartupRunnerService;
import com.keep.services.IAppStarupRunnerService;

/**
 * @author swanandm
 *
 */
@Component
public class AppStartupRunner implements ApplicationRunner {
	
	private final IAppStarupRunnerService runnerService;
		
	public AppStartupRunner(AppStartupRunnerService runnerService) {
		this.runnerService = runnerService;
	}

	@Override
	public void run(ApplicationArguments arguments) throws Exception {
		runnerService.loadCheckitemStateValues();
	}

}
