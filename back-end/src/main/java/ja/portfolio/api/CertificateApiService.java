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

import ja.portfolio.model.Certificate;
import ja.portfolio.service.CertificateNotFoundException;
import ja.portfolio.service.CertificateService;

@RestController
@RequestMapping("/api/certificates")
public class CertificateApiService {

	@Autowired
	private CertificateService service;
	
	@GetMapping
	public List<Certificate> getAllCertificates() {
		return service.getAllCertificates();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Certificate> getCertificateById(@PathVariable Long id) throws CertificateNotFoundException {
		Certificate certificate = service.getCertificateById(id);
		return certificate != null ? ResponseEntity.ok(certificate) : ResponseEntity.notFound().build();
	}
	
	@PostMapping
	public ResponseEntity<Certificate> createCertificate(@RequestBody Certificate certificate) {
		Certificate savedCertificate = service.saveCertificate(certificate);
		return ResponseEntity.status(HttpStatus.CREATED).body(savedCertificate);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteCertificate(@PathVariable Long id) {
		service.deleteCertificate(id);
		return ResponseEntity.noContent().build();
	}
}
