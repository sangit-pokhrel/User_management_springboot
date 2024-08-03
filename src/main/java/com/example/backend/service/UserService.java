package com.example.backend.service;

import com.example.backend.dto.UserCreateDTO;

import com.example.backend.dto.UserUpdateDTO;
import com.example.backend.model.User;

import java.util.List;

public interface UserService {
    UserCreateDTO createUser(User userCreateDTO);
    UserCreateDTO getUserById(Long id);
    List<UserCreateDTO> getAllUsers();
    UserCreateDTO updateUser(Long id, UserUpdateDTO userUpdateDTO);
    void deleteUser(Long id);
}
