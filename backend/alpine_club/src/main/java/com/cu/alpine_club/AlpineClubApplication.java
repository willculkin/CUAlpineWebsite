package com.cu.alpine_club;

import com.cu.alpine_club.model.User;
import com.cu.alpine_club.repository.UserMongoRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;


@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class AlpineClubApplication {

	public static void main(String[] args) throws Exception {
		SpringApplication.run(AlpineClubApplication.class, args);
	}
}
