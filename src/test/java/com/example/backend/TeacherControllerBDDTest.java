package com.example.backend;



import static org.hamcrest.CoreMatchers.is;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

import com.example.backend.controller.TeacherController;
import com.example.backend.model.Teacher;
import com.example.backend.repository.TeacherRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

@WebMvcTest(TeacherController.class)
public class TeacherControllerBDDTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private TeacherRepository teacherRepository;

    @InjectMocks
    private TeacherController teacherController;

    private ObjectMapper objectMapper;

    @BeforeEach
    public void setUp() {
        objectMapper = new ObjectMapper();
    }

    @Test
    public void testAddTeacherSuccess() throws Exception {
        // Given
        Teacher teacher = new Teacher();
        teacher.setName("Alice Johnson");
        teacher.setEmail("alice.johnson@example.com");

        when(teacherRepository.save(any(Teacher.class))).thenReturn(teacher);

        // When & Then
        mockMvc.perform(post("/api/teachers")
                        .contentType("application/json")
                        .content(objectMapper.writeValueAsString(teacher)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name", is("Alice Johnson")))
                .andExpect(jsonPath("$.email", is("alice.johnson@example.com")));
    }

    private Teacher any(Class<Teacher> teacherClass) {
        return null;
    }
}
