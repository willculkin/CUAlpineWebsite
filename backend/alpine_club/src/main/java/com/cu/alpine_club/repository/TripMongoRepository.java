package com.cu.alpine_club.repository;

import com.cu.alpine_club.model.Trip;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.Repository;
import java.util.List;

public interface TripMongoRepository extends MongoRepository<Trip, String> {
    public List<Trip> findAll();
    List<Trip> findByText(String text);
}