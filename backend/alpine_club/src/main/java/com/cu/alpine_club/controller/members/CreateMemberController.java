package com.cu.alpine_club.controller.members;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
@RestController
public class CreateMemberController {

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping("/Create")
    public String createMember(){
        return "Hello World!";
    }
}
