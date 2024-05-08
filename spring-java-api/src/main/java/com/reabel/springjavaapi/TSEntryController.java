package com.reabel.springjavaapi;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
class TSEntryController {
  private final TSEntryRepository repository;
  
  TSEntryController(TSEntryRepository repository) {
    this.repository = repository;
  }

  // Aggregate root
  // tag::get-aggregate-root[]
  @GetMapping("/entries")
  List<TSEntry> all() {
    return repository.findAll();
  }
  // end::get-aggregate-root[]
  
  @PostMapping("/entries/{id}")
  TSEntry newEntry(@RequestBody TSEntry newEntry, @PathVariable Long id) {
    return repository.save(newEntry);
  }

  @PutMapping("/entries/{id}")
  TSEntry replaceEntry(@RequestBody TSEntry newEntry, @PathVariable Long id) {
    return repository.save(newEntry);
  }

  @DeleteMapping("/entries/{id}")
  void deleteEntry(@PathVariable Long id) {
    repository.deleteById(id);;
  }
}