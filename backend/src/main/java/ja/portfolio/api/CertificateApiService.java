package ja.portfolio.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import ja.portfolio.model.Certificate;
import ja.portfolio.service.CertificateNotFoundException;
import ja.portfolio.service.CertificateService;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/certificates")
@SecurityRequirement(name = "Authorization")
public class CertificateApiService {

	@Autowired
	private CertificateService service;
	
	@GetMapping
	@Operation(summary = "Get all certificates", description = "You get all certificates in the database")
	public List<Certificate> getAllCertificates() {
		return service.getAllCertificates();
	}
	
	@GetMapping("/{id}")
	@Operation(summary = "Get certificate by ID", description = "You can get a one certificate by id")
	public ResponseEntity<?> getCertificateById(@PathVariable Long id) {
	    try {
	        Certificate certificate = service.getCertificateById(id);
	        return ResponseEntity.ok(certificate);
	    } catch (CertificateNotFoundException e) {
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
	    }
	}

	
	@PostMapping
	@Operation(summary = "Create new certificate", description = "Allow you to create a new certificate inserting the title, issuer, dayObtained and imgURL.")
	public ResponseEntity<Certificate> createCertificate(@Valid @RequestBody Certificate certificate) {
		Certificate savedCertificate = service.saveCertificate(certificate);
		return ResponseEntity.status(HttpStatus.CREATED).body(savedCertificate);
	}
	
	@DeleteMapping("/{id}")
	@Operation(summary = "Delete a certificate", description = "Allow you to delete a existing certificate with the ID.")
	public ResponseEntity<Void> deleteCertificate(@PathVariable Long id) {
		service.deleteCertificate(id);
		return ResponseEntity.noContent().build();
	}
}
