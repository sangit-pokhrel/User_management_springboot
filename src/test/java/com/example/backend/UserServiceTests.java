package com.example.backend;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;

import com.example.backend.dto.UserCreateDTO;
import com.example.backend.model.User;
import com.example.backend.repository.UserRepository;
import com.example.backend.service.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

public class UserServiceTests {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserService userService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    public void testAddUser() {
        User user = new User();
        user.setFullname("John Doe");
        user.setEmail("john.doe@example.com");
        user.setPhonenumber("1234567890");
        user.setPermanentAddress("123 Main St");
        user.setTemporaryAddress("456 Elm St");
        user.setParentsNumber("0987654321");
        user.setPassword("password123");
        user.setPictureUrl("http://cloudinary.com/image.jpg");

        when(userRepository.save(user)).thenReturn(user);

        UserCreateDTO createdUser = userService.createUser(user);

        assertThat(createdUser).isNotNull();
        assertThat(createdUser.getFullname()).isEqualTo("John Doe");
        assertThat(createdUser.getEmail()).isEqualTo("john.doe@example.com");
    }
}
