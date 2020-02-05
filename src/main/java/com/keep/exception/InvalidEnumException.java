/**
 * 
 */
package com.keep.exception;

/**
 * @author swanandm
 *
 */
public class InvalidEnumException extends KeepExecption implements IExceptions {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public InvalidEnumException(String reason) {
		super(reason);
	}

}
