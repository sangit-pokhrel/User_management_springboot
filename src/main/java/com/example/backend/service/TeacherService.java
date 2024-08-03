// src/main/java/com/example/backend/service/TeacherService.java
package com.example.backend.service;

import com.example.backend.dto.TeacherDTO;
import com.example.backend.model.Teacher;

import java.util.List;
import java.util.Optional;

public interface TeacherService {
    List<Teacher> getAllTeachers();
    Optional<Teacher> getTeacherById(Long id);
    Teacher saveTeacher(Teacher teacher);
    void deleteTeacher(Long id);
}
