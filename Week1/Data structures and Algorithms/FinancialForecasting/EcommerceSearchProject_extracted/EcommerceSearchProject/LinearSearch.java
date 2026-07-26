public class LinearSearch {

    public static Product search(Product[] products, String key) {

        for (Product product : products) {

            if (product.getProductName().equalsIgnoreCase(key)) {
                return product;
            }

        }

        return null;
    }

}