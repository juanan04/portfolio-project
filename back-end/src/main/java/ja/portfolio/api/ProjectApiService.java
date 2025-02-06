package ja.portfolio.api;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import ja.portfolio.model.Project;
import ja.portfolio.service.ProjectNotFoundException;
import ja.portfolio.service.ProjectService;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/projects")
@CrossOrigin(origins = "http://localhost:3000") // Permite a React acceder a la API
@SecurityRequirement(name = "Authorization")
public class ProjectApiService {

	@Autowired
	private ProjectService service;
	
	@GetMapping
	@Operation(summary = "Get all projects")
	public List<Project> getAllProjects() {
		return service.getAllProjects();
	}
	
	@GetMapping("/{id}")
	@Operation(summary = "Get projects by ID", description = "You can get a project by ID.")
	public ResponseEntity<?> getProjectById(@PathVariable Long id) {
	    try {
	        Project project = service.getProjectById(id);
	        return ResponseEntity.ok(project);
	    } catch (ProjectNotFoundException e) {
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
	    }
	}

	
	@GetMapping("/search")
	@Operation(summary = "Get projects by filter", description = "Allows you to get a project by filter (title or technology)")
	public List<Project> getProjectsByFilter (String filtro) {
		return service.getProjectsByFilter(filtro);
	}
	
	@PostMapping
	@Operation(summary = "Create Project", description = "Allows you to create a new project")
	public ResponseEntity<Project> createProject(@Valid @RequestBody Project project, @RequestHeader("X-API-KEY") String apiKey) {
		Project savedProject = service.saveProject(project);
		return ResponseEntity.status(HttpStatus.CREATED).body(savedProject);
	}
	
	@PutMapping("/{id}")
	@Operation(summary = "Update Project", description = "Allows you to update an existing project.")
	public ResponseEntity<Project> updateProject(@PathVariable Long id, @Valid @RequestBody Project updatedProject, @RequestHeader("X-API-KEY") String apiKey) throws ProjectNotFoundException {
		Project project = service.getProjectById(id);
		if (project != null) {
			updatedProject.setId(id);
			return ResponseEntity.ok(service.saveProject(project));
		}
		return ResponseEntity.notFound().build();
	}
	
	@DeleteMapping("/{id}")
	@Operation(summary = "Delete Project", description = "Allows you to delte an existing project with the ID.")
	public ResponseEntity<Void> deleteProject(@PathVariable Long id, @RequestHeader("X-API-KEY") String apiKey) {
		service.deleteProject(id);
		return ResponseEntity.noContent().build();
	}

}
