package com.library.main;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.library.service.BookService;
import com.library.repository.BookRepository;

public class LibraryManagementApplication {

    public static void main(String[] args) {

        // Load the Spring configuration file
        ApplicationContext context =
                new ClassPathXmlApplicationContext("applicationContext.xml");

        // Get BookService bean
        BookService bookService =
                context.getBean("bookService", BookService.class);

        // Get BookRepository bean
        BookRepository bookRepository =
                context.getBean("bookRepository", BookRepository.class);

        // Test the beans
        bookService.displayService();
        bookRepository.displayRepository();

        System.out.println("Spring Application configured successfully!");

        ((ClassPathXmlApplicationContext) context).close();
    }
}