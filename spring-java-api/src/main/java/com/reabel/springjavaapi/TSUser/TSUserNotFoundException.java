package com.reabel.springjavaapi.TSUser;

class TSUserNotFoundException extends RuntimeException {

    TSUserNotFoundException(Long id) {
    super("Could not find User " + id);
  }
}