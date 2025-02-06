package ja.portfolio.model;

import java.time.LocalDate;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.FutureOrPresent;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.PastOrPresent;
import lombok.Data;

@Entity
@Data
public class Experience {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Schema(description = "Experience ID. Autogenerated in POST requests")
	private Long id;
	@NotBlank(message = "The company or school name cannot be blank")
	private String companyOrSchool;
	private String role;
	@PastOrPresent(message = "The startDate should be past or present date")
	private LocalDate startDate;
	@FutureOrPresent(message = "The end Date should be present or future date")
	private LocalDate endDate;
	private String description;
	
}
