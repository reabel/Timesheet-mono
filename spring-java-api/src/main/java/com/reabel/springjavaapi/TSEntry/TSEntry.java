package com.reabel.springjavaapi.TSEntry;

import java.util.Objects;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class TSEntry {
  private @Id @GeneratedValue Long id;
  private String description;
  private Boolean recurring;
  private Integer allotedTime;
  private String date;
  private String start;
  private String tsend;
  private Integer breakAmt;
  private String project;

  TSEntry() {}

  public TSEntry(String description, Boolean recurring, Integer allotedTime, String date, String start, String tsend, Integer breakAmt, String project) {
    this.description = description;
    this.recurring = recurring;
    this.allotedTime = allotedTime;
    this.date = date;
    this.start = start;
    this.tsend = tsend;
    this.breakAmt = breakAmt;
    this.project = project;
  }

  public Long getId() {
    return this.id;
  }
  
  public String getDescription() {
    return this.description;
  }

  public Boolean getRecurring() {
    return this.recurring;
  }

  public Integer getAllotedTime() {
    return this.allotedTime;
  }

  public String getDate() {
    return this.date;
  }

  public String getStart() {
    return this.start;
  }

  public String getEnd() {
    return this.tsend;
  }

  public Integer getBreakAmt() {
    return this.breakAmt;
  }

  public String getProject() {
    return this.project;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public void setRecurring(Boolean recurring) {
    this.recurring = recurring;
  }

  public void setAllotedTime(Integer allotedTime) {
    this.allotedTime = allotedTime;
  } 

  public void setDate(String date) {
    this.date = date;
  }

  public void setStart(String start) {
    this.start = start;
  } 

  public void setEnd(String end) {
    this.tsend = end;
  }

  public void setBreakAmt(Integer breakAmt) {
    this.breakAmt = breakAmt;
  }

  public void setProject(String project) {
    this.project = project;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o)
      return true;
    if (!(o instanceof TSEntry))
      return false;
    TSEntry entry = (TSEntry) o;
    return Objects.equals(this.id, entry.id) && Objects.equals(this.description, entry.description) && Objects.equals(this.recurring, entry.recurring) && Objects.equals(this.allotedTime, entry.allotedTime) && Objects.equals(this.date, entry.date) && Objects.equals(this.start, entry.start) && Objects.equals(this.tsend, entry.tsend) && Objects.equals(this.breakAmt, entry.breakAmt) && Objects.equals(this.project, entry.project);
  }
  
  @Override
  public int hashCode() {
    return Objects.hash(this.id, this.description, this.recurring, this.allotedTime, this.date, this.start, this.tsend, this.breakAmt, this.project);
  }

  @Override
  public String toString() {
    return "Entry{" + "id=" + this.id + ", description='" + this.description + '\'' + ", recurring=" + this.recurring + ", allotedTime=" + this.allotedTime + ", date='" + this.date + '\'' + ", start='" + this.start + '\'' + ", end='" + this.tsend + '\'' + ", breakAmt=" + this.breakAmt + ", project='" + this.project + '\'' + '}';
  }

}
