package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;

import java.util.List;

@Service
public class UserService {
  
  @Autowired
  private UserRepository userRepository;

  public List<User> findAll() {
    return userRepository.findAll();
  }

  public User save(User user) {
    return userRepository.save(user);
  }

  public void deleteByUserID(String userID) {
    userRepository.deleteByUserID(userID);
  }

  public void deleteById(Long id) {
    userRepository.deleteById(id);
  }

  public User findByUserID(String UserID) {
    return userRepository.findByUserID(UserID);
  }
}
