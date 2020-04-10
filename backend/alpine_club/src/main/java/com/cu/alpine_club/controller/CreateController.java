package com.cu.alpine_club.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
@RestController
public class CreateController {

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping("/Create")
    public String home(){
        return "Hello World!";
    }
}
