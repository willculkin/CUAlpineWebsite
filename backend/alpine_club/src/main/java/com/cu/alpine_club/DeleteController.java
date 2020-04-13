package com.cu.alpine_club;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DeleteController {

    @RequestMapping("/Delete")
    public String home(){
        return "Hello World!";
    }
}
