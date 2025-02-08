package ja.portfolio.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ja.portfolio.model.Project;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long>{
	
	public List<Project> findByTitleContainingIgnoringCase(String filtro);
	
}
