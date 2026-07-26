public class Product {

    private int productId;
    private String productName;
    private String category;

    // Constructor
    public Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    // Getters
    public int getProductId() {
        return productId;
    }

    public String getProductName() {
        return productName;
    }

    public String getCategory() {
        return category;
    }

    // Display Product
    @Override
    public String toString() {
        return "Product ID : " + productId +
                "\nProduct Name : " + productName +
                "\nCategory : " + category;
    }
}