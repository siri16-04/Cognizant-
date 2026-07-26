public class BinarySearch {

    public static Product search(Product[] products, String key) {

        int low = 0;
        int high = products.length - 1;

        while (low <= high) {

            int mid = (low + high) / 2;

            int compare = products[mid].getProductName()
                    .compareToIgnoreCase(key);

            if (compare == 0) {
                return products[mid];
            }

            else if (compare < 0) {
                low = mid + 1;
            }

            else {
                high = mid - 1;
            }

        }

        return null;

    }

}