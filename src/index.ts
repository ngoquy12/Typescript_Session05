type Admin = {
  name: string;
  comment: string;
};

type Employee = {
  name: string;
  salary: number;
};

type Combined = Admin & Employee; // Kiểu intersection Type
const order: Combined = {
  name: "Alex",
  comment: "hehe",
  salary: 12000,
};

console.log("order==>", order);

// Ví dụ 2:
type Combinable = string | number;
type Numberic = number | boolean;

type Combined1 = Combinable & Numberic;
const result1: Combined1 = 10;

// Bài tập 2:
function mergeObjects<T, U>(object1: U, object2: T): T & U {
  // Đây là kiểu generic
  return { ...object1, ...object2 };
}

const person = {
  name: "Nguyễn Văn A",
  age: 21,
  address: "Hà Nội",
  status: "Độc thân",
};

const employee = {
  empployeeCode: "NV0001",
  salary: "1.000.000.000",
};

const mergeResult = mergeObjects(person, employee);
console.log("mergeResult==>", mergeResult);

// Bài 3

interface ObjectWithId {
  id: number;
}

interface ObjectWithName {
  name: string;
}

// Combined
type ObjectWithIdAndName = ObjectWithId & ObjectWithName;

// Khai báo dữ liệu cho từng type
const objectWithId: ObjectWithId[] = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
];

const objectWithName: ObjectWithName[] = [
  { name: "Object 1" },
  { name: "Object 2" },
  { name: "Object 3" },
  { name: "Object 4" },
];

const objectWithIdAndName: ObjectWithIdAndName[] = objectWithId.map(
  (obj, index) => {
    return {
      ...obj,
      ...objectWithName[index],
    };
  }
);

console.log("objectWithIdAndName==>", objectWithIdAndName);

// Type guards

type Combiable = string | number;
const sum = (a: Combiable, b: Combiable) => {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  } else {
    return a + b;
  }
};

// console.log("sum==>", sum(10, 10));

class Car {
  drive() {
    console.log("driving car...");
  }
}

class Truck {
  drive() {
    console.log("Driving truck...");
  }

  loadCaro() {
    console.log("Loading caro...");
  }
}

type Vehical = Car | Truck;

// Khởi tạo đối tượng
const v1 = new Car();
const v2 = new Truck();

function userVehical(vehical: Vehical) {
  // Kiểm tra kiểu dữ liệu đối tượng
  if (vehical instanceof Truck) {
    vehical.loadCaro();
  } else {
    vehical.drive();
  }
}

// // Gọi hàm
// userVehical(v1);
// userVehical(v2);

// Bài 4
function checkType(value: string | number): void {
  if (typeof value === "string") {
    console.log("Đây là chuỗi");
  } else if (typeof value === "number") {
    console.log("Đây là số");
  } else {
    console.log("Đây không phải là gì cả!!!");
  }
}

console.log(checkType("hehe"));
console.log(checkType(1));

// Bài 5 --> Tự làm
// Bài 6

function sumNembers(arr: (string | number)[]): number {
  let sum = 0;
  for (const key of arr) {
    if (typeof key === "number") {
      sum += key;
    }
  }
  return sum;
}

const array1 = [1, 2, 4, "5", "key"];
console.log("Tổng các giá trị trong mảng: ", sumNembers(array1));

// Bài 7
const anyValue: any = "Hello, TS";
const stringValue: string = anyValue as string;
console.log(stringValue.toLocaleUpperCase());

// Bài 8
class Animal {
  type: string; // Thuộc tính
  // Bản thiết kế của một đối tượng
  constructor(type: string) {
    this.type = type; // Giá trị được gán khi đối tượng được khởi tạo
  }
}

// Quan hệ kế thừa
class Dog extends Animal {
  bark: string;
  // Khởi tạo constructor
  constructor(type: string, bark: string) {
    super(type);
    this.bark = bark;
  }
}

function printDogInfo(animal: Animal): void {
  console.log(animal instanceof Dog);

  if (animal instanceof Dog) {
    const dog = animal as Dog;
    // Khởi tạo đối tượng Dog
    console.log(`Đây là thông tin của con ${dog.type} và nó sủa ${dog.bark}`);
  } else {
    console.log("Đây không phải là con chó");
  }
}

const animal1 = new Dog("Dog", "gogo"); // Tạo đối tượng Dog thực sự
printDogInfo(animal1);
