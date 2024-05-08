package com.reabel.springjavaapi;

class TSEntryNotFoundException extends RuntimeException {

    TSEntryNotFoundException(Long id) {
      super("Could not find entry " + id);
    }
  }
