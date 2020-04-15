package com.cu.alpine_club.controller.discussion;

import com.cu.alpine_club.model.Discussion;
import com.cu.alpine_club.repository.DiscussionMongoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ReadDiscussionController {

    @Autowired
    DiscussionMongoRepository discussionMongoRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping("/ReadDiscussion")
    public List<Discussion> home(){
        System.out.println("hello you have reached here read discussion");
        List<Discussion> data = discussionMongoRepository.findAll(); //.toString();
        System.out.println(data);

        //String test =  mongoOps.findOne(new Query(where("name").is("Joe")), User.class).toString();
        return data; //"test: writing nonsense";
    }
}
