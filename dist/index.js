"use strict";
const order = {
    name: "Alex",
    comment: "hehe",
    salary: 12000,
};
console.log("order==>", order);
const result1 = 10;
// Bài tập 2:
function mergeObjects(object1, object2) {
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
// Khai báo dữ liệu cho từng type
const objectWithId = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
];
const objectWithName = [
    { name: "Object 1" },
    { name: "Object 2" },
    { name: "Object 3" },
    { name: "Object 4" },
];
const objectWithIdAndName = objectWithId.map((obj, index) => {
    return {
        ...obj,
        ...objectWithName[index],
    };
});
console.log("objectWithIdAndName==>", objectWithIdAndName);
const sum = (a, b) => {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    else {
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
// Khởi tạo đối tượng
const v1 = new Car();
const v2 = new Truck();
function userVehical(vehical) {
    // Kiểm tra kiểu dữ liệu đối tượng
    if (vehical instanceof Truck) {
        vehical.loadCaro();
    }
    else {
        vehical.drive();
    }
}
// // Gọi hàm
// userVehical(v1);
// userVehical(v2);
// Bài 4
function checkType(value) {
    if (typeof value === "string") {
        console.log("Đây là chuỗi");
    }
    else if (typeof value === "number") {
        console.log("Đây là số");
    }
    else {
        console.log("Đây không phải là gì cả!!!");
    }
}
console.log(checkType("hehe"));
console.log(checkType(1));
// Bài 5 --> Tự làm
// Bài 6
function sumNembers(arr) {
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
const anyValue = "Hello, TS";
const stringValue = anyValue;
console.log(stringValue.toLocaleUpperCase());
// Bài 8
class Animal {
    // Bản thiết kế của một đối tượng
    constructor(type) {
        this.type = type; // Giá trị được gán khi đối tượng được khởi tạo
    }
}
// Quan hệ kế thừa
class Dog extends Animal {
    // Khởi tạo constructor
    constructor(type, bark) {
        super(type);
        this.bark = bark;
    }
}
function printDogInfo(animal) {
    console.log(animal instanceof Dog);
    if (animal instanceof Dog) {
        const dog = animal;
        // Khởi tạo đối tượng Dog
        console.log(`Đây là thông tin của con ${dog.type} và nó sủa ${dog.bark}`);
    }
    else {
        console.log("Đây không phải là con chó");
    }
}
const animal1 = new Dog("Dog", "gogo"); // Tạo đối tượng Dog thực sự
printDogInfo(animal1);
