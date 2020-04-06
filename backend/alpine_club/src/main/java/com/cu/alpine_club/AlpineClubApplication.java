package com.cu.alpine_club;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class AlpineClubApplication {

	public static void main(String[] args) {
		SpringApplication.run(AlpineClubApplication.class, args);
	}

}
