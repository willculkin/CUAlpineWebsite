package com.cu.alpine_club.model;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Arrays;

@Document(collection = "Trip")
public class Trip {
    @Id
    private String id;
    private String text;
    private String coverPhoto;
    private String users;


    public Trip() {
    }

    public Trip(String text, String coverPhoto, String users) {
        this.text = text;
        this.coverPhoto = coverPhoto;
        this.users = users;
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

    public String getCoverPhoto(){
        return coverPhoto;
    }

    public void setCoverPhoto(String coverPhoto){
        this.coverPhoto = coverPhoto;
    }

    public String getUsers(){
        return users;
    }

    public void setUsers(String users){
        this.users = users;
    }

    @Override
    public String toString() {
        return "{" +
                "text=" + text + "," +
                "coverPhoto:" + coverPhoto + "," +
                "users:" + users +
                '}';
    }
}
