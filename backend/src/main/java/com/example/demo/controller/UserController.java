package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.service.UserService;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {
  @Autowired
  private UserService userService;

  @GetMapping("/all")
  public List<User> findAll() {
    return userService.findAll();
  }

  @PostMapping("/create")
  public User createUser(@RequestBody User user) {
    return userService.save(user);
  }

  @PostMapping("/delete/{id}")
  public void deleteById(@PathVariable Long id) {
    userService.deleteById(id);
  }

  @GetMapping("/find/{userID}")
  public User findByUserID(@PathVariable String userID) {
    return userService.findByUserID(userID);
  }
}
