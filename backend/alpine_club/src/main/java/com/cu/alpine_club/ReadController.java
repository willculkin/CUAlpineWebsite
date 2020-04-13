package com.cu.alpine_club;

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

@RestController
public class ReadController {

    @Autowired
    UserMongoRepository UserMongoRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping("/Read")
    public User home(){
        System.out.println("hello you have reached here dfjknfkjgfhdkgdgfdjkgdfgfd");
        User test = UserMongoRepository.findByName("Jim"); //.toString();
        System.out.println(test);

        //String test =  mongoOps.findOne(new Query(where("name").is("Joe")), User.class).toString();
        return test; //"test: writing nonsense";
    }
}
