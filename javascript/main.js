"use strict";
let a = 8;
const numberArray = [1, 2, 3, 4, 5];
const numberArray2 = [1, 2, 3, 4, 5]; //дженерик
//Tuple
const contact = ["Tanya", 12345];
const rect1 = {
    id: "1234",
    size: {
        width: 100,
        height: 200,
    },
    color: "#ccc",
};
const rect2 = {
    id: "12345",
    size: {
        width: 10,
        height: 20,
    },
};
rect2.color = "#fff";
// rect2.id ="355" ошибка, так как  readonly
const rect3 = {};
const rect4 = {};
class Clock {
    time = new Date();
    setTime(date) {
        this.time = date;
    }
}
const css = {
    border: "1px solid black",
    marginTop: "2px",
    borderRadius: "5px",
};
//=====================================================
//Enum
var Membership;
(function (Membership) {
    Membership[Membership["Simpl"] = 0] = "Simpl";
    Membership[Membership["Standart"] = 1] = "Standart";
    Membership[Membership["Premium"] = 2] = "Premium";
})(Membership || (Membership = {}));
const membership = Membership.Standart;
const memberRevers = Membership[2];
console.log(membership); //1
console.log(memberRevers); //Premium
var SocialMedia;
(function (SocialMedia) {
    SocialMedia["VK"] = "VK";
    SocialMedia["FACEBOOK"] = "FACEBOOK";
    SocialMedia["INSTAGRAM"] = "INSTAGRAM";
})(SocialMedia || (SocialMedia = {}));
const social = SocialMedia.INSTAGRAM;
console.log(social); //INSTAGRAM
const isMyName = (name) => {
    return `Hello, ${name}`;
};
let one = isMyName("Tanya");
console.log(one);
const obj = {
    a: 2,
    b: 5,
    c: "vvv",
    eee: "cc",
    ooo: 9,
};
const john = {
    name: "John",
    age: 40,
};
const john2 = {
    name: "John",
    age: 35,
    email: "mmm",
    login: "ttt",
    active: true,
    skills: ["qqq", "rrr"],
};
const pers = {
    name: "Goga",
    age: 44,
    email: "ggggg",
    login: "jjjj",
    active: true,
    skills: ["ooo", "yyy", "zzz"],
};
const devArr = [
    {
        name: "Goga",
        age: 44,
        email: "ggggg",
        login: "jjjj",
        active: true,
        skills: ["ooo", "yyy", "zzz"],
    },
    {
        name: "Goga2",
        age: 44,
        email: "ggggg",
        login: "jjjj",
        active: false,
        skills: ["ooo", "yyy", "zzz"],
    },
];
//Функции
const fn1 = (num) => {
    return String(num);
};
function fn2(cb) {
    if (cb === undefined) {
        cb === String;
    }
    cb(12);
}
//функция с параметрами по умолчанию
function createPoint(x = 0, y = 0) {
    return [x, y];
}
createPoint(10);
function fn3(...nums) {
    return nums.join("-");
}
//Enums
const ADMIN = "admin";
const user = {
    role: "admin" /* UserRole.Admin */,
};
if (user.role === "admin" /* UserRole.Admin */) {
}
const x = {
    value: "str",
};
const x2 = {
    value: 5,
};
//классы
class ArrayOfAnything {
    collection;
    constructor(collection) {
        this.collection = collection;
    }
    get(index) {
        return this.collection[index];
    }
}
let oneA = new ArrayOfAnything(["1", "2", "3", "4"]);
console.log(oneA);
let oneB = new ArrayOfAnything([1, 2, 3, 4, 5]);
console.log(oneB);
//функции с исп.дженерики========================================
function printString(arr) {
    for (let i = 0; i <= arr.length; i++) {
        console.log(arr[i]);
    }
}
function printNumber(arr) {
    for (let i = 0; i <= arr.length; i++) {
        console.log(arr[i]);
    }
}
function printAnything(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
printAnything([1, 2, 3, 4]);
function fillArray(length, elem) {
    return new Array(length).fill(elem);
}
const arr1 = fillArray(10, "*");
console.log(arr1);
const arr2 = fillArray(10, 9);
console.log(arr2);
let numbers = [1, 2, 3, 4, 5];
// Суммирование элементов массива
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // 15
// Нахождение максимального значения в массиве
let max = numbers.reduce((accumulator, currentValue) => Math.max(accumulator, currentValue), 0); // 5
function printLength(arg) {
    console.log(arg.length);
    return arg.length;
}
printLength({ a: 5, length: 2 }); //2
printLength([1]); //1
printLength("str"); //3
function getProperty(obj, key) {
    return obj[key];
}
const myObj = {
    a: 1,
    b: 2,
    c: 3,
};
//K=== 'a'|'b'|'c'
const myObj2 = {
    d: 1,
    b: 2,
    c: 3,
};
//K=== 'd'|'b'|'c'
let res = getProperty(myObj, "a"); //функция будет работать только с теми ключами,которые мы передали
console.log(res); //1
let res2 = getProperty(myObj2, "d");
function identity(arg) {
    return arg;
}
const s = "Hello";
const n = 10;
const userN = {
    name: "Max",
    age: 15,
};
const r1 = identity(s);
const r2 = identity(n);
const r3 = identity(userN);
const messageState = {
    loading: false,
    error: null,
    data: {
        id: 1,
        text: "Text",
    },
};
//-------------------------
function getRandomElement(items) {
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
const el1 = getRandomElement([1, 2, 3, 4, 5]);
const el2 = getRandomElement(["1", "2", "3", "4", "5"]);
const el3 = getRandomElement(["1", "2", "3", "4", 5]);
function merge(o1, o2) {
    return {
        ...o1,
        ...o2,
    };
}
const r11 = merge({ a: 1 }, { b: 1 });
console.log(r11);
//--------------------------
async function fakeRequest() {
    return 2;
}
const b = fakeRequest();
//----------------------------
function len(collection) {
    return collection.length;
}
const r21 = len("Hello");
const r22 = len([1, 2, 3]);
const r23 = len(["1", "2", "3"]);
// const r24 = len(3) //Error
//-----------------------------------------------------------
function getValue(obj, prop) {
    return obj[prop];
}
const obj31 = {
    name: "Max",
    age: 33,
};
const r31 = getValue(obj31, "name");
function getKey(obj, value) {
    const key = Object.keys(obj).find((key) => obj[key] === value);
    return key || null;
}
const key = getKey(obj31, "Max");
//------------------------
function patchField(obj, field, val) {
    obj[field] = val;
}
const obj32 = {
    name: "Max",
    age: 33,
};
patchField(obj32, "name", "Mixa");
//# sourceMappingURL=main.js.map