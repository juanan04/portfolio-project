package ja.portfolio.config;

import org.springframework.web.bind.annotation.*;

import jakarta.servlet.http.HttpServletResponse;


@RestController
@RequestMapping("/api")
public class GlobalControllerAdvice {

    @RequestMapping(method = RequestMethod.OPTIONS)
    public void handleOptions(HttpServletResponse response) {
        response.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
        response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
        response.setHeader("Access-Control-Allow-Headers", "Authorization, Content-Type");
        response.setHeader("Access-Control-Allow-Credentials", "true");
        response.setStatus(HttpServletResponse.SC_OK);
    }
}
