package nov27;

import java.util.LinkedHashMap;

public class linkedhashmap {

    public static void main(String[] args) {

        LinkedHashMap<Integer, String> fruits = new LinkedHashMap<>();

        fruits.put(1, "Apple");
        fruits.put(2, "Banana");
        fruits.put(3, "Grapes");
        fruits.put(4, "Pineapple");

        System.out.println("Fruits (in insertion order):");
        for (Integer id : fruits.keySet()) {
            System.out.println(id + " = " + fruits.get(id));
        }

        fruits.remove(3);

        System.out.println("\nAfter removing ID 3:");
        for (Integer id : fruits.keySet()) {
            System.out.println(id + " = " + fruits.get(id));
        }
    }
}
