package mypack;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

public class CalculatorTest {

    @Test
    void testAddition() {
        Calculator c = new Calculator();
        assertEquals(10, c.add(5, 5));
    }
}