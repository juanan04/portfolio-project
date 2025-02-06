package ja.portfolio.service;

public class CertificateNotFoundException extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = 369552785204413430L;

	public CertificateNotFoundException() {
	}

	public CertificateNotFoundException(String message) {
		super(message);
	}

	public CertificateNotFoundException(Throwable cause) {
		super(cause);
	}

	public CertificateNotFoundException(String message, Throwable cause) {
		super(message, cause);
	}

	public CertificateNotFoundException(String message, Throwable cause, boolean enableSuppression,
			boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

}
