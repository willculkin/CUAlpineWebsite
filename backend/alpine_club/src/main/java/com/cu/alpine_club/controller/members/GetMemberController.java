package com.cu.alpine_club.controller.members;

import com.cu.alpine_club.model.User;
import com.cu.alpine_club.repository.UserMongoRepository;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;


import static org.springframework.data.mongodb.core.query.Criteria.where;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;

import com.mongodb.client.MongoClients;

import java.util.List;

@RestController
public class GetMemberController {

    @Autowired
    UserMongoRepository userMongoRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping("/GetUser")
    public String[] getMember(@RequestBody String data) throws Exception {
        boolean empty;
        List<User> user =  userMongoRepository.findByName(data.replace("\"", ""));
        String[] userData = {user.get(0).getEmail(),user.get(0).getFirstName(), user.get(0).getLastName()};
        return userData;
    }
}
