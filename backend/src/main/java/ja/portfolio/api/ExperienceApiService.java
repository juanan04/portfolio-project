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

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import ja.portfolio.model.Experience;
import ja.portfolio.service.ExperienceNotFoundException;
import ja.portfolio.service.ExperienceService;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/experiences")
@SecurityRequirement(name = "Authorization")
public class ExperienceApiService {

	@Autowired
	private ExperienceService service;
	
	@GetMapping
	@Operation(summary = "Get all the experiences")
	public List<Experience> getAllExperiences() {
		return service.getAllExperiences();
	}
	
	@GetMapping("/{id}")
	@Operation(summary = "Get experience by ID", description = "You can get a single experience by ID")
	public ResponseEntity<?> getExperienceById(@PathVariable Long id) {
	    try {
	        Experience experience = service.getExperienceById(id);
	        return ResponseEntity.ok(experience);
	    } catch (ExperienceNotFoundException e) {
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(e.getMessage());
	    }
	}

	
	@PostMapping
	@Operation(summary = "Create new Experience", description = "Allow you to create a new experience inserting the company or school name, the role and the end and starts dates")
	public ResponseEntity<Experience> createExperience(@Valid @RequestBody Experience experience) {
		Experience savedExperience = service.saveExperience(experience);
		return ResponseEntity.status(HttpStatus.CREATED).body(savedExperience);
	}
	
	@DeleteMapping("/{id}")
	@Operation(summary = "Delete Experience", description = "Allow you to delete an existing experience with the ID.")
	public ResponseEntity<Void> deleteExperience(@PathVariable Long id)  {
		service.deleteExperience(id);
		return ResponseEntity.noContent().build();
	}

}
