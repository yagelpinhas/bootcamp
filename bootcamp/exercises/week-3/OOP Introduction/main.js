//write your code here to make the tests pass

class Document {
    constructor(employeeName) {
        this.EmployeeName=employeeName
    }
}

class Employee{
    constructor(name){
        this.name = name
    }

    work(office){
        for(let i=0;i<10;i++){
            let d = new Document(this.name)
            office.documents.push(d)
        }
    }
}

class Manager{
    constructor(name){
        this.name = name
        this.employees=[]
    }

    hireEmployee(name){
        let worker = new Employee(name)
        this.employees.push(worker)
    }

    askEmployeesToWork(office){
        for(let i=0;i<this.employees.length;i++){
            let worker = this.employees[i]
            worker.work(office)
        }
    }
}

class Cleaner{

    constructor(name){
        this.name = name
    }

    clean(){
        console.log("Clean");
    }
}

class Office{
    constructor(documents,managers,cleaners){
        this.documents = []
        this. managers = []
        this.cleaners = [] 
    }

    hireCleaner(name){
        let c1 = new Cleaner(name)
        this.cleaners.push(c1)
    }

    hireManager(name){
        let m1 = new Manager(name)
        this.managers.push(m1)
    }

    startWorkDay(){
        for(let i=0;i<this.managers.length;i++){
            let m = this.managers[i]
            m.askEmployeesToWork(this)
        }

        for(let j=0;j<this.cleaners.length;j++){
            let c = this.cleaners[j]
            c.clean()
        }
    }
}

