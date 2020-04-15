package com.cu.alpine_club.repository;

import com.cu.alpine_club.model.Discussion;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.Repository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface DiscussionMongoRepository extends MongoRepository<Discussion, String> {
    public List<Discussion> findAll();
//    @Query(fields="{comment : 1}")
    public List<Discussion> findByText(String text);
}
