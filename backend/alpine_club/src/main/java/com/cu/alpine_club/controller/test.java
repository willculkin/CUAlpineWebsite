package com.cu.alpine_club.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class test {

    @RequestMapping("/hi")
    public String home(){
        return "Hello World!";
    }
}
