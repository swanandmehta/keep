/**
 * 
 */
package com.keep.exception;

/**
 * @author swanandm
 *
 */
public class InvalidCaseException extends KeepExecption implements IExceptions {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	public InvalidCaseException(String reason) {
		super(reason);
	}

}
