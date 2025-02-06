package ja.portfolio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import ja.portfolio.model.Certificate;

public interface CertificateRepository extends JpaRepository<Certificate, Long> {

}
