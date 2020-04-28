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
import java.util.stream.Collectors;

@RestController
public class PutTripUserController {

    @Autowired
    TripMongoRepository tripMongoRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping("/PutTripUser")
    public String putTripUser(@RequestBody String data) throws Exception {
        String msg = "";

        JsonParser springParser = JsonParserFactory.getJsonParser(); // parse users
        Map<String,Object> dataobject = springParser.parseMap(data);
        String search = dataobject.get("text").toString();
        String user = dataobject.get("user").toString();


        List<Trip> trip = tripMongoRepository.findByText(search); // get trip from db
        if(!trip.isEmpty()) {
            Trip a_trip = trip.get(0);
            System.out.println(a_trip.toString());
            String users = a_trip.getUsers(); // get users

            List<Object> userList = springParser.parseList(users);

            System.out.println(userList);
            userList.add(user);
            List<String> collect = userList.stream().map((Object e)->{return "\""+e.toString()+"\"";}).collect(Collectors.toList());
            String user_str = collect.toString();

            a_trip.setUsers(user_str);

            tripMongoRepository.save(a_trip);

            msg = "{res: ok}";
        } else {
            msg = "{res: empty}";
        }
        return msg;
    }
}