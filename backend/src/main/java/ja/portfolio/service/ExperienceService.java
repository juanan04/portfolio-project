package ja.portfolio.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ja.portfolio.model.Experience;
import ja.portfolio.repository.ExperienceRepository;

@Service
public class ExperienceService {

	@Autowired
	private ExperienceRepository repository;

	public List<Experience> getAllExperiences() {
		return repository.findAll();
	}

	public Experience getExperienceById(Long id) throws ExperienceNotFoundException {
		return repository.findById(id)
				.orElseThrow(() -> new ExperienceNotFoundException("Experience with id " + id + " not found."));
	}

	public Experience saveExperience(Experience experience) {
		return repository.save(experience);
	}

	public void deleteExperience(Long id) {
		repository.deleteById(id);
	}

}
