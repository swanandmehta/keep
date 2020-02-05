/**
 * 
 */
package com.keep.exception;

/**
 * @author swanandm
 *
 */
public class KeepExecption extends RuntimeException implements IExceptions {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	public KeepExecption(String reason) {
		super(reason);
	}

}
