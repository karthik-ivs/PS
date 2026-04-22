package com.example.springbootapp;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:8080")
public class SpringbootAppController {

    @GetMapping("/")
    public String home() {
        return "Today we are having the FSD test";
    }

    @GetMapping("/react")
    public String project() {
        return "We need to create one React project";
    }

    @GetMapping("/springboot")
    public String greet() {
        return "We need to create a Springboot project";
    }
}