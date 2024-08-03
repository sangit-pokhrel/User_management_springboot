package com.example.backend.controller;

import com.example.backend.dto.ApiResponse;
import com.example.backend.model.Teacher;
import com.example.backend.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import com.example.backend.dto.TeacherDTO;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/teachers")
public class TeacherController {

    @Autowired
    private TeacherService teacherService;

    @GetMapping
    public ResponseEntity<ApiResponse<List<Teacher>>> getAllTeachers() {
        List<Teacher> teachers = teacherService.getAllTeachers();
        return ResponseEntity.ok(new ApiResponse<>(true, "Teachers fetched successfully", teachers));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<Teacher>> getTeacherById(@PathVariable Long id) {
        Optional<Teacher> teacher = teacherService.getTeacherById(id);
        if (teacher.isPresent()) {
            return ResponseEntity.ok(new ApiResponse<>(true, "Teacher fetched successfully", teacher.get()));
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse<>(false, "Teacher not found", null));
        }
    }


    @PostMapping
    public ResponseEntity<ApiResponse<Teacher>> addTeacher(@RequestBody TeacherDTO teacherDto) {
        Teacher teacher = new Teacher();
        teacher.setName(teacherDto.getName());
        teacher.setSubject(teacherDto.getSubject());
        teacher.setEmail(teacherDto.getEmail());
        teacher.setPhoneNumber(teacherDto.getPhoneNumber());
        teacher.setAddress(teacherDto.getAddress());
        teacher.setPictureUrl(teacherDto.getPictureUrl());

        Teacher savedTeacher = teacherService.saveTeacher(teacher);
        return ResponseEntity.status(HttpStatus.CREATED).body(new ApiResponse<>(true, "Teacher added successfully", savedTeacher));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse<Teacher>> updateTeacher(@PathVariable Long id, @RequestBody Teacher teacher) {
        Optional<Teacher> existingTeacher = teacherService.getTeacherById(id);
        if (existingTeacher.isPresent()) {
            teacher.setId(id);
            Teacher updatedTeacher = teacherService.saveTeacher(teacher);
            return ResponseEntity.ok(new ApiResponse<>(true, "Teacher updated successfully", updatedTeacher));
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse<>(false, "Teacher not found", null));
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> deleteTeacher(@PathVariable Long id) {
        teacherService.deleteTeacher(id);
        return ResponseEntity.ok(new ApiResponse<>(true, "Teacher deleted successfully", null));
    }
}
