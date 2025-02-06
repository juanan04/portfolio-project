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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ja.portfolio.model.Experience;
import ja.portfolio.service.ExperienceNotFoundException;
import ja.portfolio.service.ExperienceService;

@RestController
@RequestMapping("/api/experience")
@CrossOrigin(origins = "http://localhost:3000")
public class ExperienceApiService {

	@Autowired
	private ExperienceService service;
	
	@GetMapping
	public List<Experience> getAllExperiences() {
		return service.getAllExperiences();
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Experience> getExperienceById(@PathVariable Long id) throws ExperienceNotFoundException {
		Experience experience = service.getExperienceById(id);
		return experience != null ? ResponseEntity.ok(experience) : ResponseEntity.notFound().build();
	}
	
	@PostMapping
	public ResponseEntity<Experience> createExperience(@RequestBody Experience experience) {
		Experience savedExperience = service.saveExperience(experience);
		return ResponseEntity.status(HttpStatus.CREATED).body(savedExperience);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteExperience(@PathVariable Long id)  {
		service.deleteExperience(id);
		return ResponseEntity.noContent().build();
	}

}
