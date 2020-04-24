package com.cu.alpine_club.controller.members;

import com.cu.alpine_club.model.User;
import com.cu.alpine_club.repository.UserMongoRepository;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.beans.factory.annotation.Autowired;


import static org.springframework.data.mongodb.core.query.Criteria.where;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;

import com.mongodb.client.MongoClients;

import java.util.List;

@RestController
public class ReadMemberController {

    @Autowired
    UserMongoRepository userMongoRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping("/ReadUser")
    public List<User> readMember(){
        List<User> data = userMongoRepository.findAll();  //.toString();
        System.out.println(data);

        //String test =  mongoOps.findOne(new Query(where("name").is("Joe")), User.class).toString();
        return data; //"test: writing nonsense";
    }
}
