package com.reabel.springjavaapi;

import org.springframework.data.jpa.repository.JpaRepository;

interface TSEntryRepository extends JpaRepository<TSEntry, Long> {

}