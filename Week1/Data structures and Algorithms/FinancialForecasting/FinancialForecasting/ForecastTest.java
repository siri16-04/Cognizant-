public class ForecastTest {

    public static void main(String[] args) {

        double presentValue = 10000;      // Initial Investment
        double growthRate = 0.10;         // 10% Annual Growth
        int years = 5;

        double futureValue =
                FinancialForecast.futureValue(
                        presentValue,
                        growthRate,
                        years);

        System.out.println("Present Value : ₹" + presentValue);
        System.out.println("Growth Rate   : " + (growthRate * 100) + "%");
        System.out.println("Years         : " + years);
        System.out.printf("Future Value  : ₹%.2f%n", futureValue);
    }
}