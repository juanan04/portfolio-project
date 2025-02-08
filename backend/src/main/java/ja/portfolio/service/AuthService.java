package ja.portfolio.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import ja.portfolio.model.User;
import ja.portfolio.repository.UserRepository;

@Service
public class AuthService {

	@Autowired
	private UserRepository repository;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	public boolean authenticate(String username, String password) {
		return repository.findByUsername(username)
				.map(user -> passwordEncoder.matches(password, user.getPassword()))
				.orElse(false);
	}
	
	// Método para registrar usuarios con contraseña hasheada
    public User registerUser(String username, String password) {
        String hashedPassword = passwordEncoder.encode(password); // Hashea la contraseña
        User user = new User(null, username, hashedPassword);
        return repository.save(user);
    }
    
    public boolean userExists(String username) {
    	return repository.findByUsername(username).isPresent();
    }

}
