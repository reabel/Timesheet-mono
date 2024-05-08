package com.reabel.springjavaapi;

class TSUserNotFoundException extends RuntimeException {

    TSUserNotFoundException(Long id) {
    super("Could not find User " + id);
  }
}