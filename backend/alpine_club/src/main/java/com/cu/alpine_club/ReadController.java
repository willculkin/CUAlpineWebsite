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

import java.util.List;

@RestController
public class ReadController {

    @Autowired
    UserMongoRepository userMongoRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping("/Read")
    public List<User> home(){
        System.out.println("hello you have reached here dfjknfkjgfhdkgdgfdjkgdfgfd");
        //userMongoRepository.save(new User("Jim", 45));
        List<User> data = userMongoRepository.findByName("Jim"); //.toString();
        System.out.println(data);

        //String test =  mongoOps.findOne(new Query(where("name").is("Joe")), User.class).toString();
        return data; //"test: writing nonsense";
    }
}
