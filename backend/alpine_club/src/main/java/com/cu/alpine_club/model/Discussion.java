package com.cu.alpine_club.model;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Discussion")
public class Discussion {
    @Id
    private String id;
    private String text;
    private String user;

    public Discussion() {
    }

    public Discussion(String user, String text) {
        this.user = user;
        this.text = text;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getUser(){
        return user;
    }

    public void setUser(String user){
        this.user = user;
    }
    @Override
    public String toString() {

       return "{" +
               ", user='" + user +
               ", text=" + text +
               '}';
    }
}