package com.reabel.springjavaapi;

import org.springframework.data.jpa.repository.JpaRepository;

interface TSUserRepository extends JpaRepository<TSUser, Long> {

}