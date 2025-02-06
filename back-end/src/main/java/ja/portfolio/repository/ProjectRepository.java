package ja.portfolio.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import ja.portfolio.model.Project;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long>{

	@Query("SELECT p FROM Project p WHERE " +
	           "LOWER(p.title) LIKE LOWER(CONCAT('%', :filtro, '%')) OR " +
	           "LOWER(p.description) LIKE LOWER(CONCAT('%', :filtro, '%')) OR " +
	           "EXISTS (SELECT t FROM p.technologies t WHERE LOWER(t) LIKE LOWER(CONCAT('%', :filtro, '%')))")
	    List<Project> searchProjects(@Param("filtro") String filtro);
	
}
