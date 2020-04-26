package com.cu.alpine_club.model;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "User")
public class User {
    @Id
    private String id;
    private String name;
    private String password;
    private String firstName;
    private String lastName;
    public User() {
    }
    public User(String name, String password, String firstName, String lastName) {
        this.name = name;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getEmail() {
        return name;
    }
    public void setEmail(String name) {
        this.name = name;
    }
    public String getFirstName() {
        return firstName;
    }
    public String getLastName() {
        return lastName;
    }
    public boolean checkPassword(String pwd) {
        if(pwd.equals(this.password)){
            return true;
        }
        else {
            return false;
        }
    }
    @Override
    public String toString() {
        return "User{" +
                ", name='" + name + '\'' +
                ", password=" + password +
                ", first name=" + firstName +
                ", last name=" + lastName +
                '}';
    }
}
