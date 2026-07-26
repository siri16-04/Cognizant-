package mypack;

public class PDFDocument implements Document {

    @Override
    public void open() {
        System.out.println("Opening PDF Document...");
    }
}
