package ja.portfolio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import ja.portfolio.model.Experience;

public interface ExperienceRepository extends JpaRepository<Experience, Long> {

}
