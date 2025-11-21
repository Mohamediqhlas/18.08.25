package nov21;

public class Encapsulation {
    public static void main(String[] args) {
        GooglePay g = new GooglePay();
        g.showBalance();
        g.updateEmail();
    }
}

class HDFC {
    private String customerName = "Iqhlas";
    private long balance = 250000;
    private String email = "mohamediqhlas19@gmail.com";

    public String getEmail() {
        return email;
    }

    public void setEmail(String newEmail) {
        this.email = newEmail;
    }

    public long getBalance() {
        return balance;
    }

    public void setCustomerName(String name) {
        this.customerName = name;
    }
}

class GooglePay extends HDFC {
    void showBalance() {
        System.out.println("Available Balance: " + getBalance());
    }

    void updateEmail() {
        System.out.println("Old Email: " + getEmail());
        setEmail("iqhlas.updated@gmail.com");
        System.out.println("Updated Email: " + getEmail());
    }

    void updateName() {
        setCustomerName("Mohamed Iqhlas");
    }
}
