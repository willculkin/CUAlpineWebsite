package com.cu.alpine_club.controller.discussion;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UpdateDiscussionController {

    @RequestMapping("/UpdateDiscussion")
    public String home(){
        return "Hello World!";
    }
}
