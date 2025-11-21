package nov21;

import java.util.Scanner;

public class ExceptionDemo {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        try {
            System.out.print("Enter your age: ");
            int age = sc.nextInt();
            System.out.println("Age noted: " + age);

            System.out.print("Enter a number to divide 500: ");
            int value = sc.nextInt();
            int output = 500 / value;
            System.out.println("Final Output: " + output);
        }
        catch (ArithmeticException ex) {
            System.out.println("Division by zero is not allowed!");
        }
        catch (Exception ex) {
            System.out.println("Please enter valid numbers only!");
        }
        finally {
            System.out.println("Process completed. Have a great day!");
        }
    }
}
