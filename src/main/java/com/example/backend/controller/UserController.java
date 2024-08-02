package com.example.backend.controller;

import com.example.backend.dto.ApiResponse;
import com.example.backend.dto.UserCreateDTO;
import com.example.backend.dto.UserUpdateDTO;
import com.example.backend.service.UserService;
import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import jakarta.validation.Valid;
import java.io.IOException;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private Cloudinary cloudinary;

    @PostMapping
    // Example: restrict access to admin role
    public ResponseEntity<ApiResponse<UserCreateDTO>> createUser(
            @Valid @RequestParam("user") String userDTOJson,
            @RequestParam(value = "picture", required = false) MultipartFile picture) throws IOException {

        UserCreateDTO userCreateDTO = new ObjectMapper().readValue(userDTOJson, UserCreateDTO.class);

        if (picture != null && !picture.isEmpty()) {
            Map<String, Object> uploadResult = cloudinary.uploader().upload(picture.getBytes(), ObjectUtils.asMap(
                    "resource_type", "auto"
            ));
            String pictureUrl = (String) uploadResult.get("secure_url");
            userCreateDTO.setPictureUrl(pictureUrl);
        }

        UserCreateDTO createdUser = userService.createUser(userCreateDTO);
        ApiResponse<UserCreateDTO> response = new ApiResponse<>(true, "User created successfully", createdUser);
        return ResponseEntity.ok(response);
    }

//    @PutMapping("/{id}")
//     // Example: restrict access to admin role or user-specific access
//    public ResponseEntity<ApiResponse<UserCreateDTO>> updateUser(
//            @PathVariable Long id,
//            @Valid @RequestParam("user") String userDTOJson,
//            @RequestParam(value = "picture", required = false) MultipartFile picture) throws IOException {
//
//        UserUpdateDTO userUpdateDTO = new ObjectMapper().readValue(userDTOJson, UserUpdateDTO.class);
//
//        if (picture != null && !picture.isEmpty()) {
//            Map<String, Object> uploadResult = cloudinary.uploader().upload(picture.getBytes(), ObjectUtils.asMap(
//                    "resource_type", "auto"
//            ));
//            String pictureUrl = (String) uploadResult.get("secure_url");
//            userUpdateDTO.setPictureUrl(pictureUrl);
//        }
//
//        UserCreateDTO updatedUser = userService.updateUser(id, userUpdateDTO);
//        ApiResponse<UserCreateDTO> response = new ApiResponse<>(true, "User updated successfully", updatedUser);
//        return ResponseEntity.ok(response);
//    }

    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<UserCreateDTO>> updateUser(
            @PathVariable Long id,
            @RequestPart("user") String userDTOJson,
            @RequestPart(value = "picture", required = false) MultipartFile picture) throws IOException {

        UserUpdateDTO userUpdateDTO = new ObjectMapper().readValue(userDTOJson, UserUpdateDTO.class);

        if (picture != null && !picture.isEmpty()) {
            Map<String, Object> uploadResult = cloudinary.uploader().upload(picture.getBytes(), ObjectUtils.asMap(
                    "resource_type", "auto"
            ));
            String pictureUrl = (String) uploadResult.get("secure_url");
            userUpdateDTO.setPictureUrl(pictureUrl);
        }

        UserCreateDTO updatedUser = userService.updateUser(id, userUpdateDTO);
        ApiResponse<UserCreateDTO> response = new ApiResponse<>(true, "User updated successfully", updatedUser);
        return ResponseEntity.ok(response);
    }


    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<UserCreateDTO>> getUserById(@PathVariable Long id) {
        UserCreateDTO user = userService.getUserById(id);
        ApiResponse<UserCreateDTO> response = new ApiResponse<>(true, "User fetched successfully", user);
        return ResponseEntity.ok(response);
    }

    @GetMapping
    public ResponseEntity<ApiResponse<List<UserCreateDTO>>> getAllUsers() {
        List<UserCreateDTO> users = userService.getAllUsers();
        ApiResponse<List<UserCreateDTO>> response = new ApiResponse<>(true, "Users fetched successfully", users);
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("/{id}")

    public ResponseEntity<ApiResponse<Void>> deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
        ApiResponse<Void> response = new ApiResponse<>(true, "User deleted successfully", null);
        return ResponseEntity.ok(response);
    }
}
