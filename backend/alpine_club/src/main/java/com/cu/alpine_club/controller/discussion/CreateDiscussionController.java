package com.cu.alpine_club.controller.discussion;

import com.cu.alpine_club.model.Discussion;
import com.cu.alpine_club.repository.DiscussionMongoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class CreateDiscussionController {
    @Autowired
    DiscussionMongoRepository discussionMongoRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value = "/CreateDiscussion", method = RequestMethod.POST)
    public void home(@RequestBody String payload) throws Exception {
        System.out.println("in create");
        System.out.println(payload);
        discussionMongoRepository.save(new Discussion(payload));
    }
}
