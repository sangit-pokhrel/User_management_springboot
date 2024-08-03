package com.example.backend;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

import com.example.backend.model.User;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

@WebMvcTest
public class UserControllerBDDTests {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @BeforeEach
    void setUp() {
        // Any necessary setup
    }

    @Test
    public void testAddUser() throws Exception {
        User user = new User();
        user.setFullname("John Doe");
        user.setEmail("john.doe@example.com");
        user.setPhonenumber("1234567890");
        user.setPermanentAddress("123 Main St");
        user.setTemporaryAddress("456 Elm St");
        user.setParentsNumber("0987654321");
        user.setPassword("password123");
        user.setPictureUrl("http://cloudinary.com/image.jpg");

        mockMvc.perform(post("/api/users")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(user)))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.id").exists());
    }
}
