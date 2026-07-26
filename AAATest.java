package mypack;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class AAATest {

    Calculator calculator;

    // Setup Method
    @BeforeEach
    void setUp() {
        calculator = new Calculator();
        System.out.println("Setup: Calculator object created");
    }

    // Test using AAA Pattern
    @Test
    void testAddition() {

        // Arrange
        int a = 5;
        int b = 10;

        // Act
        int result = calculator.add(a, b);

        // Assert
        assertEquals(15, result);

        System.out.println("Test Executed");
    }

    // Teardown Method
    @AfterEach
    void tearDown() {
        calculator = null;
        System.out.println("Teardown: Calculator object destroyed");
    }
}
