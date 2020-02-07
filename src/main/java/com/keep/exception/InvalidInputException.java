/**
 * 
 */
package com.keep.exception;

/**
 * @author swanandm
 *
 */
public class InvalidInputException extends KeepExecption implements IExceptions {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	public InvalidInputException(String reason) {
		super(reason);
	}


}
