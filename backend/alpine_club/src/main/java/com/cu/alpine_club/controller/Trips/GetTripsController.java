package com.cu.alpine_club.controller.Trips;

import com.cu.alpine_club.model.Discussion;
import com.cu.alpine_club.model.Trip;
import com.cu.alpine_club.repository.TripMongoRepository;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;


import static org.springframework.data.mongodb.core.query.Criteria.where;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;

import com.mongodb.client.MongoClients;

import java.util.HashMap;
import java.util.List;

@RestController
public class GetTripsController {

    @Autowired
    TripMongoRepository tripMongoRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping("/GetTrips")
    public String getTrip() throws Exception {
        List<Trip> data = tripMongoRepository.findAll();
        String msg = data.toString();
        return msg;
    }
}
