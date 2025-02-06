package ja.portfolio.service;

public class ProjectNotFoundException extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = -7394098654951476612L;

	public ProjectNotFoundException() {
	}

	public ProjectNotFoundException(String message) {
		super(message);
	}

	public ProjectNotFoundException(Throwable cause) {
		super(cause);
	}

	public ProjectNotFoundException(String message, Throwable cause) {
		super(message, cause);
	}

	public ProjectNotFoundException(String message, Throwable cause, boolean enableSuppression,
			boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

}
