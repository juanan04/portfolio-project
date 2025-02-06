package ja.portfolio.service;

import java.util.List;

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
		return repository.searchProjects(filtro);
	}
	
	public Project saveProject (Project project) {
		return repository.save(project);
	}
	
	public void deleteProject (Long id) {
		repository.deleteById(id);
	}
	
}
