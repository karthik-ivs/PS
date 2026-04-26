package com.example.Springbootsquare;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class SquareController {

    @GetMapping("/area")
    public double getArea(@RequestParam double side) {
        return side * side;
    }
}