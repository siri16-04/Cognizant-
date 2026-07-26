import java.util.Arrays;
import java.util.Comparator;

public class SearchTest {

    public static void main(String[] args) {

        Product[] products = {

                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Shoes", "Fashion"),
                new Product(103, "Watch", "Accessories"),
                new Product(104, "Phone", "Electronics"),
                new Product(105, "Bag", "Fashion")

        };

        // -------- Linear Search --------

        System.out.println("LINEAR SEARCH");

        Product linearResult =
                LinearSearch.search(products, "Phone");

        if (linearResult != null)
            System.out.println(linearResult);
        else
            System.out.println("Product Not Found");

        // -------- Sort for Binary Search --------

        Arrays.sort(products, Comparator.comparing(Product::getProductName));

        // -------- Binary Search --------

        System.out.println("\nBINARY SEARCH");

        Product binaryResult =
                BinarySearch.search(products, "Phone");

        if (binaryResult != null)
            System.out.println(binaryResult);
        else
            System.out.println("Product Not Found");

    }

}