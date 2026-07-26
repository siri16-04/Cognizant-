public class FinancialForecast {

    // Recursive method to calculate future value
    public static double futureValue(double presentValue,
                                     double growthRate,
                                     int years) {

        // Base Case
        if (years == 0) {
            return presentValue;
        }

        // Recursive Case
        return futureValue(presentValue, growthRate, years - 1)
                * (1 + growthRate);
    }
}