import java.sql.*;
import java.util.*;

public class UserController {

    public List<Map<String, Object>> getUsers() {
        List<Map<String, Object>> users = new ArrayList<>();
        String url = "jdbc:mysql://localhost:3000/website";
        String user = "root";
        String password = "Abhi@1289";

        try {
            // Explicitly load the driver (optional for new versions)
            Class.forName("com.mysql.cj.jdbc.Driver");
            try (Connection conn = DriverManager.getConnection(url, user, password);
                 Statement stmt = conn.createStatement();
                 ResultSet rs = stmt.executeQuery("SELECT id, name, email FROM users")) {

                while (rs.next()) {
                    Map<String, Object> userMap = new HashMap<>();
                    userMap.put("id", rs.getInt("id"));
                    userMap.put("name", rs.getString("name"));
                    userMap.put("email", rs.getString("email"));
                    users.add(userMap);
                }
            }
        } catch (SQLException | ClassNotFoundException e) {
            e.printStackTrace();
        }
        return users;
    }

    public static void main(String[] args) {
        UserController controller = new UserController();
        System.out.println(controller.getUsers());
    }
}