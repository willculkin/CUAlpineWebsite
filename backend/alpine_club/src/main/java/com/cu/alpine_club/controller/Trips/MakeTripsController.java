package com.cu.alpine_club.controller.Trips;
import org.springframework.boot.json.JsonParser;
import org.springframework.boot.json.JsonParserFactory;

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
import java.util.Map;

@RestController
public class MakeTripsController {
    @Autowired
    TripMongoRepository tripMongoRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping("/CreateTrips")
    public String CreateTrip(String data) throws Exception {
        JsonParser springParser = JsonParserFactory.getJsonParser();
        Map<String,Object> data_object = springParser.parseMap(data);
        System.out.println(data_object);
        String msg = "{res: ok}";
        return msg;
    }
}
