package com.example.backend.service;

import com.example.backend.dto.UserCreateDTO;

import com.example.backend.dto.UserUpdateDTO;

import java.util.List;

public interface UserService {
    UserCreateDTO createUser(UserCreateDTO userCreateDTO);
    UserCreateDTO getUserById(Long id);
    List<UserCreateDTO> getAllUsers();
    UserCreateDTO updateUser(Long id, UserUpdateDTO userUpdateDTO);
    void deleteUser(Long id);
}
