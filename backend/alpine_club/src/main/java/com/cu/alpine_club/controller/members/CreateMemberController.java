package com.cu.alpine_club.controller.members;

import com.cu.alpine_club.model.User;
import com.cu.alpine_club.repository.UserMongoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@RestController
public class CreateMemberController {
    @Autowired
    UserMongoRepository userMongoRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value = "/CreateUser", method = RequestMethod.POST)
    public void createMember(@RequestBody String[] data) throws Exception {
        System.out.println("in create user");
        userMongoRepository.save(new User(data[0], data[1], data[2], data[3]));
    }
}
