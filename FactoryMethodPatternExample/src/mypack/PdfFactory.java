package mypack;
public class PdfFactory extends DocumentFactory {

    @Override
    public Document createDocument() {
        return new PDFDocument();
    }
}