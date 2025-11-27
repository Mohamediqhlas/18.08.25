package nov27;

import java.util.LinkedHashSet;

public class linkedhashset {

    public static void main(String[] args) {

        LinkedHashSet<String> fruits = new LinkedHashSet<>();
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Grapes");
        fruits.add("Mango");
        fruits.add("Mango");

        System.out.println("Fruits in LinkedHashSet (insertion order):\n" + fruits);

        fruits.remove("Grapes");

        System.out.println("\nAfter removing 'Grapes':\n" + fruits);
    }
} 