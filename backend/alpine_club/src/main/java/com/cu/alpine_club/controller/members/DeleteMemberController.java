package com.cu.alpine_club.controller.members;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DeleteMemberController {

    @RequestMapping("/DeleteMember")
    public String deleteMember(){
        return "Hello World!";
    }
}
