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
//# sourceMappingURL=main.js.map