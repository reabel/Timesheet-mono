package com.reabel.springjavaapi;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * LoadDatabase
 * We want to intialize the database with some data. We can do this by implementing the CommandLineRunner interface.
 * To start we'll create a couple Entries and Users and save them to the database.
 */
@Configuration
class LoadDatabase {

  private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);

  @Bean
  CommandLineRunner initDatabase(TSUserRepository userRepository, TSEntryRepository entryRepository) {

    return args -> {
      userRepository.save(new TSUser("bbaggins", "password1", "bbaggins@reabelx.com", "admin"));
      userRepository.save(new TSUser("fbaggins", "password2", "fbaggins@reabelx.com", "admin"));

      userRepository.findAll().forEach(employee -> log.info("Preloaded " + employee));

      
      entryRepository.save(new TSEntry("Something todo", false, 60, "2021-09-01", "09:00", "10:00", 0, "Project 1"));

      entryRepository.findAll().forEach(order -> {
        log.info("Preloaded " + order);
      });
      
    };
  }
}