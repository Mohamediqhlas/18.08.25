package nov27;

import java.util.*;

public class HashMap1 {

    public static void main(String[] args) {

        HashMap<Integer, String> products = new HashMap<>();

        products.put(10, "Apple");
        products.put(20, "Banana");
        products.put(30, "Orange");
        products.put(40, "Mango");

        System.out.println("HashMap (NO ORDER):");
        System.out.println(products);

        System.out.println(products.get(20));

        products.remove(30);
        System.out.println(products);

        System.out.println(products.containsKey(40));
        System.out.println(products.containsValue("Mango"));

        for (Map.Entry<Integer, String> entry : products.entrySet()) {
            System.out.println(entry.getKey() + " -> " + entry.getValue());
        }
    }
}
