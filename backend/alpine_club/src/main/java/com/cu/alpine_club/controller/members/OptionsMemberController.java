package com.cu.alpine_club.controller.members;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;


@RestController
public class OptionsMemberController {
    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping("/OptionsMember")
    public String updateMember(){
        return "in options";
    }
}

