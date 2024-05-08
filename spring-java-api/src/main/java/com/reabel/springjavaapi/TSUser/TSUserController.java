package com.reabel.springjavaapi.TSUser;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
class TSUserController {
    private final TSUserRepository repository;

    TSUserController(TSUserRepository repository) {
        this.repository = repository;
    }

  // Aggregate root
  // tag::get-aggregate-root[]
  @GetMapping("/users")
  List<TSUser> all() {
    return repository.findAll();
  }
  // end::get-aggregate-root[]
  
  @PostMapping("/users/{id}")
  TSUser newUser(@RequestBody TSUser newUser, @PathVariable Long id) {
    return repository.save(newUser);
  }

  @PutMapping("/users/{id}")
  TSUser replaceUser(@RequestBody TSUser newUser, @PathVariable Long id) {
    return repository.save(newUser);
  }

  @DeleteMapping("/users/{id}")
  void deleteUser(@PathVariable Long id) {
    repository.deleteById(id);;
  }
}
