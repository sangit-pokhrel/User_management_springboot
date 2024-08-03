package com.example.backend;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

import com.example.backend.model.Teacher;
import com.example.backend.repository.TeacherRepository;
import com.example.backend.service.TeacherService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

public class TeacherServiceTDDTest {

    @Mock
    private TeacherRepository teacherRepository;

    @InjectMocks
    private TeacherService teacherService;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testAddTeacherSuccess() {
        // Given
        Teacher teacher = new Teacher();
        teacher.setName("Bob Smith");
        teacher.setEmail("bob.smith@example.com");

        when(teacherRepository.save(any(Teacher.class))).thenReturn(teacher);

        // When
        Teacher result = teacherService.saveTeacher(teacher);

        // Then
        assertEquals("Bob Smith", result.getName());
        assertEquals("bob.smith@example.com", result.getEmail());
        verify(teacherRepository, times(1)).save(teacher);
    }
}
