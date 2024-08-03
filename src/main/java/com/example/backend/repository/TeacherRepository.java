// src/main/java/com/example/backend/repository/TeacherRepository.java
package com.example.backend.repository;

import com.example.backend.model.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeacherRepository extends JpaRepository<Teacher, Long> {
}
