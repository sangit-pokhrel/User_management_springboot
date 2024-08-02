package com.example.backend.service;

import com.example.backend.dto.UserCreateDTO;
import com.example.backend.dto.UserUpdateDTO;
import com.example.backend.model.User;
import com.example.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserCreateDTO createUser(UserCreateDTO userCreateDTO) {
        User user = new User();
        mapUserCreateDTOToUser(userCreateDTO, user);
        userRepository.save(user);
        return mapToUserDTO(user);
    }

    @Override
    public UserCreateDTO getUserById(Long id) {
        User user = userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
        return mapToUserDTO(user);
    }

    @Override
    public List<UserCreateDTO> getAllUsers() {
        List<User> users = userRepository.findAll();
        return users.stream().map(this::mapToUserDTO).collect(Collectors.toList());
    }

    @Override
    public UserCreateDTO updateUser(Long id, UserUpdateDTO userUpdateDTO) {
        User user = userRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
        mapUserUpdateDTOToUser(userUpdateDTO, user);
        userRepository.save(user);
        return mapToUserDTO(user);
    }

    @Override
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    private void mapUserCreateDTOToUser(UserCreateDTO userCreateDTO, User user) {
        user.setFullname(userCreateDTO.getFullname());
        user.setEmail(userCreateDTO.getEmail());
        user.setPhonenumber(userCreateDTO.getPhonenumber());
        user.setPermanentAddress(userCreateDTO.getPermanentAddress());
        user.setTemporaryAddress(userCreateDTO.getTemporaryAddress());
        user.setParentsNumber(userCreateDTO.getParentsNumber());
        user.setPassword(userCreateDTO.getPassword());
        user.setPictureUrl(userCreateDTO.getPictureUrl());
    }

    private void mapUserUpdateDTOToUser(UserUpdateDTO userUpdateDTO, User user) {
        user.setFullname(userUpdateDTO.getFullname());
        user.setEmail(userUpdateDTO.getEmail());
        user.setPhonenumber(userUpdateDTO.getPhonenumber());
        user.setPermanentAddress(userUpdateDTO.getPermanentAddress());
        user.setTemporaryAddress(userUpdateDTO.getTemporaryAddress());
        user.setParentsNumber(userUpdateDTO.getParentsNumber());
        user.setPassword(userUpdateDTO.getPassword());
        user.setPictureUrl(userUpdateDTO.getPictureUrl());
    }

    private UserCreateDTO mapToUserDTO(User user) {
        UserCreateDTO userDTO = new UserCreateDTO();
        userDTO.setId(user.getId());
        userDTO.setFullname(user.getFullname());
        userDTO.setEmail(user.getEmail());
        userDTO.setPhonenumber(user.getPhonenumber());
        userDTO.setPermanentAddress(user.getPermanentAddress());
        userDTO.setTemporaryAddress(user.getTemporaryAddress());
        userDTO.setParentsNumber(user.getParentsNumber());
        userDTO.setPassword(user.getPassword());
        userDTO.setPictureUrl(user.getPictureUrl());
        return userDTO;
    }
}
