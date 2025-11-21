package nov21;

public class Abstraction {
    public static void main(String[] args) {

        Department dept = new HRDepartment();
        dept.recruit();
        dept.budgetApproval();
        dept.report();
        dept.openDepartment();

        Management m1 = new AdminOffice();
        Operations m2 = new AdminOffice();

        m1.startWork();
        m1.endWork();

        m2.securityCheck();
        m2.maintenance();
    }
}

abstract class Department {
    abstract void recruit();
    abstract void budgetApproval();
    abstract void report();

    void openDepartment() {
        System.out.println("Department is now open for the day...");
    }
}

class FinanceDepartment extends Department {
    void recruit() {
        System.out.println("Finance Dept: Hiring accountants...");
    }

    void budgetApproval() {
        System.out.println("Finance Dept: Approving company budget...");
    }

    void report() {
        System.out.println("Finance Dept: Preparing financial reports...");
    }
}

class HRDepartment extends FinanceDepartment {
    void recruit() {
        System.out.println("HR Dept: Conducting interviews...");
    }
}

interface Management {
    void startWork();
    void endWork();
}

interface Operations {
    void securityCheck();
    void maintenance();
}

class AdminOffice implements Management, Operations {

    public void startWork() {
        System.out.println("Admin Office: Work has started!");
    }

    public void endWork() {
        System.out.println("Admin Office: Work has ended.");
    }

    public void securityCheck() {
        System.out.println("Admin Office: Security checks completed.");
    }

    public void maintenance() {
        System.out.println("Admin Office: Maintenance tasks done.");
    }
}
