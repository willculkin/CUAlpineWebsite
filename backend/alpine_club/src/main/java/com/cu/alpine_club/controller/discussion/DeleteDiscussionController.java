package com.cu.alpine_club.controller.discussion;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DeleteDiscussionController {

    @RequestMapping("/DeleteDiscussion")
    public String home(){
        return "Hello World!";
    }
}
