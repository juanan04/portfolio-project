package ja.portfolio.model;

import java.time.LocalDate;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.PastOrPresent;
import lombok.Data;

@Entity
@Data
public class Certificate {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Schema(description = "Certificate ID. Autogenerated in POST requests")
	private Long id;
	@NotBlank(message = "The certificate title cannot be blank")
	private String title;
	@NotBlank(message = "The certificate issuer cannot be blank")
	private String issuer;
	@PastOrPresent(message = "The certificate obtained date should be past or present date")
	private LocalDate dateObtained;
	private String imageUrl;
	
}
