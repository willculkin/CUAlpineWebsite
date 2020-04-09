package com.cu.alpine_club.model;

import com.cu.alpine_club.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.Repository;

public interface UserMongoRepository extends MongoRepository<User, String> {
        User findByName(String name);
}
