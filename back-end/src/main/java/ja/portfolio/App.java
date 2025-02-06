package ja.portfolio;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import ja.portfolio.service.AuthService;

@SpringBootApplication
public class App {

	public static void main(String[] args) {
		SpringApplication.run(App.class, args);
	}

	@Bean
    CommandLineRunner initAdminUser(AuthService authService) {
        return args -> {
            if (!authService.userExists("admin")) {
                authService.registerUser("admin", "admin123");
                System.out.println("✅ Usuario administrador creado correctamente.");
            } else {
                System.out.println("⚠️ El usuario administrador ya existe.");
            }
        };
    }
	
}
