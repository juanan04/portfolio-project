package ja.portfolio.service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ja.portfolio.model.Project;
import ja.portfolio.repository.ProjectRepository;

@Service
public class ProjectService {

	@Autowired
	private ProjectRepository repository;
	
	public List<Project> getAllProjects() {
		return repository.findAll();
	}
	
	public Project getProjectById (Long id) throws ProjectNotFoundException {
		return repository.findById(id).orElseThrow(()-> new ProjectNotFoundException("Project with id " + id + " not found."));
	}
	
	public List<Project> getProjectsByFilter (String filtro) {
		Set<Project> result = new HashSet<>();
		
		// Buscar por título
		result.addAll(repository.findByTitleContainingIgnoringCase(filtro));
		
		// Buscar manualmente en la lista de tecnologías
		List<Project> allProjects = repository.findAll();
		for (Project project : allProjects) {
			if (project.getTechnologies() != null) {
				for (String tech : project.getTechnologies()) {
					if (tech.toLowerCase().contains(filtro.toLowerCase())) {
						result.add(project);
						break;
					}
				}
			}
		}
		
		return new ArrayList<>(result);
	}
	
	public Project saveProject (Project project) {
		return repository.save(project);
	}
	
	public void deleteProject (Long id) {
		repository.deleteById(id);
	}
	
}
