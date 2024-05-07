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
class EntryController {
  private final EntryRepository repository;
  
  EntryController(EntryRepository repository) {
    this.repository = repository;
  }

  // Aggregate root
  // tag::get-aggregate-root[]
  @GetMapping("/entries")
  List<Entry> all() {
    return repository.findAll();
  }
  // end::get-aggregate-root[]
  
  @PostMapping("/entries/{id}")
  Entry newEntry(@RequestBody Entry newEntry, @PathVariable Long id) {
    return repository.save(newEntry);
  }

  @PutMapping("/entries/{id}")
  Entry replaceEntry(@RequestBody Entry newEntry, @PathVariable Long id) {
    return repository.save(newEntry);
  }

  @DeleteMapping("/entries/{id}")
  void deleteEntry(@PathVariable Long id) {
    repository.deleteById(id);;
  }
}