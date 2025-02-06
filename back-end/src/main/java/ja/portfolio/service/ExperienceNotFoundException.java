package ja.portfolio.service;

public class ExperienceNotFoundException extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = 3944118034394897204L;

	public ExperienceNotFoundException() {
	}

	public ExperienceNotFoundException(String message) {
		super(message);
	}

	public ExperienceNotFoundException(Throwable cause) {
		super(cause);
	}

	public ExperienceNotFoundException(String message, Throwable cause) {
		super(message, cause);
	}

	public ExperienceNotFoundException(String message, Throwable cause, boolean enableSuppression,
			boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

}
