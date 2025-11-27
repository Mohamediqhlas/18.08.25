package nov27;
import java.util.ArrayList;
public class Array_List{
	    public static void main(String[] args) {
	        
	        ArrayList<String> name = new ArrayList<>();

	       
	        name.add("Iqhlas");
	        name.add("Gopi");
	        name.add("Karthick");

	      
	        name.add(1, "adib");
	        
	        System.out.println("Element at index 2: " + name.get(2));
	        name.remove("Banana");
	        System.out.println("Size: " + name.size());

	       
	        }
	    }
	

