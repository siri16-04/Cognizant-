package com.library.main;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.library.service.BookService;

public class LibraryManagementApplication {

    public static void main(String[] args) {

        // Load the Spring configuration file
        ApplicationContext context =
                new ClassPathXmlApplicationContext("applicationContext.xml");

        // Get the BookService bean
        BookService bookService =
                context.getBean("bookService", BookService.class);

        // Test Dependency Injection
        bookService.displayService();

        // Close the Spring context
        ((ClassPathXmlApplicationContext) context).close();
    }
}
