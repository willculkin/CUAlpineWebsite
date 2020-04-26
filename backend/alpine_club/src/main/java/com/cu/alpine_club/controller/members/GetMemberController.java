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

import java.util.HashMap;
import java.util.List;

@RestController
public class GetMemberController {

    @Autowired
    UserMongoRepository userMongoRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping("/GetUser")
    public HashMap getMember(@RequestBody String data) throws Exception {
        boolean empty;
        List<User> user =  userMongoRepository.findByName(data.replace("\"", ""));
        HashMap<String, String> map = new HashMap<>();
        map.put("FirstName",user.get(0).getFirstName());
        map.put("LastName",user.get(0).getLastName());
        map.put("Email",user.get(0).getEmail());
//        String[] userData = {"firstName":user.get(0).getFirstName(),
//                            "LastName": user.get(0).getLastName(),
//                            "email":user.get(0).getEmail()};
        return map;
    }
}
