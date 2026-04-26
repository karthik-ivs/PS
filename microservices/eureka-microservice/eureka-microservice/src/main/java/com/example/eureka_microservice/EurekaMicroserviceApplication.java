package com.example.eureka_microservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication   // ✅ SIMPLE (no exclude)
@EnableEurekaServer
public class EurekaMicroserviceApplication {

    public static void main(String[] args) {
        SpringApplication.run(EurekaMicroserviceApplication.class, args);
    }
}