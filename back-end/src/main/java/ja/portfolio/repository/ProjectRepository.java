package ja.portfolio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import ja.portfolio.model.Project;

public interface ProjectRepository extends JpaRepository<Project, Long>{

}
