package ja.portfolio.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ja.portfolio.model.Certificate;
import ja.portfolio.repository.CertificateRepository;

@Service
public class CertificateService {
	
	@Autowired
	private CertificateRepository repository;
	
	public List<Certificate> getAllCertificates() {
		return repository.findAll();
	}
	
	public Certificate getCertificateById(Long id) throws CertificateNotFoundException {
		return repository.findById(id).orElseThrow(()-> new CertificateNotFoundException("No se ha encontrado el certificado con id" + id));
	}
	
	public Certificate saveCertificate(Certificate certificate) {
		return repository.save(certificate);
	}
	
	public void deleteCertificate(Long id) {
		repository.deleteById(id);
	}
	
}
