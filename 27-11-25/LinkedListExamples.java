package nov27;
import java.util.*;

public class LinkedListExamples {

    public static void main(String[] args) {

        LinkedList<String> fruits = new LinkedList<>();

        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Apple");  
        fruits.add("Mango");
        fruits.add("Banana");
        fruits.add(1, "Orange");
        fruits.add(3,"Banana");
        System.out.println("Element at index 2: " + fruits.get(2));
        System.out.println("Size: " + fruits.size());
        System.out.println("LinkedList with duplicates:"+fruits);
     
    }
}