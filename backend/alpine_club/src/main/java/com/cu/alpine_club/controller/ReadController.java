package com.cu.alpine_club.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;


@RestController
public class ReadController {

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping("/Read")
    public String home(){
        return "test";
    }
}
