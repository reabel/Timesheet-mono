package com.reabel.springjavaapi.TSEntry;

class TSEntryNotFoundException extends RuntimeException {

    TSEntryNotFoundException(Long id) {
      super("Could not find entry " + id);
    }
  }
