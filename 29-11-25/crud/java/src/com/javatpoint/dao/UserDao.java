package com.javatpoint.dao;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;
import com.javatpoint.bean.User;

public class UserDao {

    public static Connection getConnection() {
        Connection con = null;
        try {
            // use the modern driver class name
            Class.forName("com.mysql.cj.jdbc.Driver");
            // Add timezone/Unicode params if needed
            con = DriverManager.getConnection("jdbc:mysql://localhost:3306/test10?useSSL=false&allowPublicKeyRetrieval=true&serverTimezone=UTC", "root", "root");
        } catch (Exception e) {
            e.printStackTrace();
        }
        return con;
    }

    public static int save(User u) {
        int status = 0;
        String sql = "INSERT INTO register(name,password,email,sex,country) VALUES(?,?,?,?,?)";
        try (Connection con = getConnection();
             PreparedStatement ps = con.prepareStatement(sql)) {
            ps.setString(1, u.getName());
            ps.setString(2, u.getPassword());
            ps.setString(3, u.getEmail());
            ps.setString(4, u.getSex());
            ps.setString(5, u.getCountry());
            status = ps.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return status;
    }

    public static int update(User u) {
        int status = 0;
        String sql = "UPDATE register SET name=?,password=?,email=?,sex=?,country=? WHERE id=?";
        try (Connection con = getConnection();
             PreparedStatement ps = con.prepareStatement(sql)) {
            ps.setString(1, u.getName());
            ps.setString(2, u.getPassword());
            ps.setString(3, u.getEmail());
            ps.setString(4, u.getSex());
            ps.setString(5, u.getCountry());
            ps.setInt(6, u.getId());
            status = ps.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return status;
    }

    public static int delete(User u) {
        int status = 0;
        String sql = "DELETE FROM register WHERE id=?";
        try (Connection con = getConnection();
             PreparedStatement ps = con.prepareStatement(sql)) {
            ps.setInt(1, u.getId());
            status = ps.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return status;
    }

    public static List<User> getAllRecords() {
        List<User> list = new ArrayList<>();
        String sql = "SELECT * FROM register";
        try (Connection con = getConnection();
             PreparedStatement ps = con.prepareStatement(sql);
             ResultSet rs = ps.executeQuery()) {
            while (rs.next()) {
                User u = new User();
                u.setId(rs.getInt("id"));
                u.setName(rs.getString("name"));
                u.setPassword(rs.getString("password"));
                u.setEmail(rs.getString("email"));
                u.setSex(rs.getString("sex"));
                u.setCountry(rs.getString("country"));
                list.add(u);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return list;
    }

    public static User getRecordById(int id) {
        User u = null;
        String sql = "SELECT * FROM register WHERE id=?";
        try (Connection con = getConnection();
             PreparedStatement ps = con.prepareStatement(sql)) {
            ps.setInt(1, id);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    u = new User();
                    u.setId(rs.getInt("id"));
                    u.setName(rs.getString("name"));
                    u.setPassword(rs.getString("password"));
                    u.setEmail(rs.getString("email"));
                    u.setSex(rs.getString("sex"));
                    u.setCountry(rs.getString("country"));
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return u;
    }
}
