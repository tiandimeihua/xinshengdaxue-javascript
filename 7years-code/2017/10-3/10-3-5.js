let x = {
  company: "Apple",
  age: 18,
  IPO: true,
  employees: [
    { firstName: "John", lastName: "Doe" },
    { firstName: "Anna", lastName: "Smith" },
    { firstName: "Peter", lastName: "Jones" }
  ]
};

console.log(x);

let deepCopyX = JSON.parse(JSON.stringify(x));

deepCopyX.company = "Seven-Year";
deepCopyX.age = 7;
deepCopyX.CTO = [];
deepCopyX.CTO[0] = "Xu Shuai";
console.log(deepCopyX);

/**
{ company: 'Apple',
age: 18,
IPO: true,
employees:
 [ { firstName: 'John', lastName: 'Doe' },
   { firstName: 'Anna', lastName: 'Smith' },
   { firstName: 'Peter', lastName: 'Jones' } ] }
{ company: 'Seven-Year',
age: 7,
IPO: true,
employees:
 [ { firstName: 'John', lastName: 'Doe' },
   { firstName: 'Anna', lastName: 'Smith' },
   { firstName: 'Peter', lastName: 'Jones' } ],
CTO: [ 'Xu Shuai' ] }
*/
