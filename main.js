class Office {
    constructor() {
        this.documents = [];
        this.managers = [];
        this.cleaners = [];
        // this.managerName = managerName
        // this.employeeName = employeeName
        // this.cleanerName = cleanerName
    };
    hireCleaner(cleanerName) {
        // a function that pushed a new cleaner to the cleaners array
        let newCleaner = new Cleaner(cleanerName)
        this.cleaners.push(newCleaner);
    }
    hireManager(managerName) {
        // a function that pushed a new manager to the managers array
        let newManager = new Manager(managerName)
        this.managers.push(newManager);
    }
    startWorkDay() {
        const self = this
        // a function that invokes the askEmployeesToWork function 
        // for all the managers, and the clean function for all cleaners
        this.managers.forEach(function(manager){
            manager.askEmployeesToWork(self)
        })
        
        this.cleaners.forEach(function(cleaner){
            cleaner.clean()
        })
    }
};

class Document {
    constructor(employeeName) {
        this.EmployeeName = employeeName
    }
};

class Employee {
    constructor(employeeName) {
        this.name = employeeName
    }
    work(office) {
        // a function - pushes 10 new documents to the office.documents[]
        for (let i=1; i<=10; i++) {
            const newDocument = new Document(this.name)
            office.documents.push(newDocument);
        }
    }
};
class Manager  {
    constructor(managerName) {
        this.employees = [];
        this.name = managerName;
    }
    hireEmployee(employeeName) {
        // a function that pushes a new employee to employees.array
        const employee = new Employee(employeeName)
        this.employees.push(employee)
    }
    askEmployeesToWork(office) {
        // a function that invokes the employees work()
        this.employees.forEach(function(employee){
            employee.work(office)
        })
    }

}
class Cleaner {
    constructor(name) {
        this.name = name
    }
    clean() {
        //function that console.log "clean"
        console.log('Clean')
    }
}


let office = new Office();
    office.hireManager("elevation");
    office.hireManager("elevation");

    office.managers[0].hireEmployee("Hadas");
    office.managers[1].hireEmployee("Brandon");
    office.managers[1].hireEmployee("Omer");

    office.startWorkDay();
