// // When we use private keyword we can not use it in inherited class and to do that and also make sure that it will not access outside of inherited class we use protected keyword there

// // we can also overwrite the same method in parent class as we done in Accounting class there

// class Department {
//   // private readonly id: string;
//   // private name: string;
//   protected employees: string[] = [];

//   constructor(private readonly id: string, public name: string) {
//     // this.id = id;
//     // this.name = n;
//   }

//   describe(this: Department) {
//     console.log(`Department (${this.id}): ${this.name}`);
//   }

//   addEmployee(employee: string) {
//     this.employees.push(employee);
//   }

//   printEmployeeInformation() {
//     console.log(this.employees.length);
//     console.log(this.employees);
//   }
// }

// class ITDepartment extends Department {
//   admins: string[];
//   constructor(id: string, admins: string[]) {
//     super(id, "IT");
//     this.admins = admins;
//   }
// }

// class AccountingDepartment extends Department {
//   constructor(id: string, private reports: string[]) {
//     super(id, "Accounting");
//   }

//   addEmployee(name: string) {
//     if (name === "Hardik") {
//       return;
//     }
//     this.employees.push(name);
//   }

//   addReport(text: string) {
//     this.reports.push(text);
//   }

//   printReports() {
//     console.log(this.reports);
//   }
// }

// const it = new ITDepartment("d1", ["Max"]);

// it.addEmployee("Yash");
// it.addEmployee("Raju");

// it.describe();
// it.name = "NEW NAME";
// it.printEmployeeInformation();

// console.log(it);

// const accounting = new AccountingDepartment("d2", []);

// accounting.addReport("Something went wrong...");

// accounting.addEmployee("Hardik");
// accounting.addEmployee("Yogesh");

// accounting.printReports();
// accounting.printEmployeeInformation();

// // const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// // accountingCopy.describe();
