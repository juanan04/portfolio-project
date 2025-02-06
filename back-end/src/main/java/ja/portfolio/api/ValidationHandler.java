package ja.portfolio.api;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import ja.portfolio.service.CertificateNotFoundException;
import ja.portfolio.service.ExperienceNotFoundException;
import ja.portfolio.service.ProjectNotFoundException;

@ControllerAdvice
public class ValidationHandler {

	@ExceptionHandler (MethodArgumentNotValidException.class)
	public ResponseEntity<String> handle(MethodArgumentNotValidException ex) {
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex.getFieldError().getDefaultMessage());
	}

	@ExceptionHandler({ProjectNotFoundException.class, ExperienceNotFoundException.class, CertificateNotFoundException.class})
    public ResponseEntity<String> handleNotFound(RuntimeException ex) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
    }
}
