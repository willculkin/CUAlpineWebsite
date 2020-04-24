package com.cu.alpine_club.controller.members;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UpdateMemberController {

    @RequestMapping("/UpdateMember")
    public String updateMember(){
        return "Hello World!";
    }
}
