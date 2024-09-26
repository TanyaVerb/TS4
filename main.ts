let a: number = 8;

const numberArray: number[] = [1, 2, 3, 4, 5];
const numberArray2: Array<number> = [1, 2, 3, 4, 5]; //дженерик

//Tuple
const contact: [string, number] = ["Tanya", 12345];

//-------------------------------
interface Rect {
  readonly id: string;
  color?: string;
  size: {
    width: number;
    height: number;
  };
}

const rect1: Rect = {
  id: "1234",
  size: {
    width: 100,
    height: 200,
  },
  color: "#ccc",
};

const rect2: Rect = {
  id: "12345",
  size: {
    width: 10,
    height: 20,
  },
};

rect2.color = "#fff";
// rect2.id ="355" ошибка, так как  readonly

const rect3 = {} as Rect;
const rect4 = <Rect>{};

//=============================================
interface IClock {
  time: Date;
  setTime(date: Date): void;
}

class Clock implements IClock {
  time: Date = new Date();
  setTime(date: Date): void {
    this.time = date;
  }
}

interface Styles {
  [key: string]: string;
}

const css: Styles = {
  border: "1px solid black",
  marginTop: "2px",
  borderRadius: "5px",
};

//=====================================================
//Enum

enum Membership {
  Simpl,
  Standart,
  Premium,
}

const membership = Membership.Standart;
const memberRevers = Membership[2];
console.log(membership); //1
console.log(memberRevers); //Premium

enum SocialMedia {
  VK = "VK",
  FACEBOOK = "FACEBOOK",
  INSTAGRAM = "INSTAGRAM",
}

const social = SocialMedia.INSTAGRAM;
console.log(social); //INSTAGRAM

const isMyName = (name: string): string => {
  return `Hello, ${name}`;
};

let one = isMyName("Tanya");
console.log(one);

//=================
type MyObj = {
  a: number;
  b: number;
  c: string;
};

interface MyObject {
  readonly a: number;
  b: number;
  c?: string;
  [key: string]: string | number; //остальные
}

const obj: MyObject = {
  a: 2,
  b: 5,
  c: "vvv",
  eee: "cc",
  ooo: 9,
};

//объединение интерфейсов
interface IPerson {
  name: string;
}
interface IPerson {
  age: number;
}

const john: IPerson = {
  name: "John",
  age: 40,
};

interface IAccount {
  email: string;
  login: string;
  active: boolean;
}

interface IDeveloper extends IPerson, IAccount {
  skills: string[];
  level?: string;
}
const john2: IDeveloper = {
  name: "John",
  age: 35,
  email: "mmm",
  login: "ttt",
  active: true,
  skills: ["qqq", "rrr"],
};

//объединение типов
type Person = {
  name: string;
  age: number;
};

type MyAccount = {
  email: string;
  login: string;
  active: boolean;
};

type MyDeveloper = {
  skills: string[];
  level?: string;
};

type FrontendDeveloper = Person & MyAccount & MyDeveloper;

const pers: FrontendDeveloper = {
  name: "Goga",
  age: 44,
  email: "ggggg",
  login: "jjjj",
  active: true,
  skills: ["ooo", "yyy", "zzz"],
};

const devArr: FrontendDeveloper[] = [
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
const fn1 = (num: number): string => {
  return String(num);
};

type Callback = (num: number) => string;

function fn2(cb?: Callback) {
  if (cb === undefined) {
    cb === String;
  }
  cb(12);
}

//функция с параметрами по умолчанию
function createPoint(x: number = 0, y: number = 0): [number, number] {
  return [x, y];
}
createPoint(10);

function fn3(...nums: number[]): string {
  return nums.join("-");
}

//Enums
const ADMIN = "admin";

//если использовать const enum, то enum перестанет быть функцией, а будет использовать конкретное значение

const enum UserRole {
  Admin = "admin",
  User = "user",
}

const user = {
  role: UserRole.Admin,
};

if (user.role === UserRole.Admin) {
}

//Дженерики==========================================================

interface ValueContainer<Value> {
  value: Value;
}

type StringContainer = ValueContainer<string>;

const x: StringContainer = {
  value: "str",
};
type StringContainer2 = ValueContainer<number>;

const x2: StringContainer2 = {
  value: 5,
};

//классы
class ArrayOfAnything<Type> {
  constructor(public collection: Type[]) {}
  get(index: number): Type {
    return this.collection[index];
  }
}

let oneA = new ArrayOfAnything<string>(["1", "2", "3", "4"]);
console.log(oneA);

let oneB = new ArrayOfAnything<number>([1, 2, 3, 4, 5]);
console.log(oneB);

//функции с исп.дженерики========================================

function printString(arr: string[]): void {
  for (let i = 0; i <= arr.length; i++) {
    console.log(arr[i]);
  }
}
function printNumber(arr: number[]): void {
  for (let i = 0; i <= arr.length; i++) {
    console.log(arr[i]);
  }
}
function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
printAnything<number>([1, 2, 3, 4]);

function fillArray<T>(length: number, elem: T): T[] {
  return new Array<T>(length).fill(elem);
}

const arr1 = fillArray<string>(10, "*");
console.log(arr1);
const arr2 = fillArray<number>(10, 9);
console.log(arr2);

interface Array<T> {
  concat(...items: Array<T[] | T>): T[];
  reduce<U>(
    callback: (state: U, element: T, index: number, array: T[]) => U,
    firstState?: U
  ): U;
}

let numbers: number[] = [1, 2, 3, 4, 5];

// Суммирование элементов массива
let sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
); // 15

// Нахождение максимального значения в массиве
let max = numbers.reduce(
  (accumulator, currentValue) => Math.max(accumulator, currentValue),
  0
); // 5

interface ILengthwise {
  length: number;
}

function printLength<T extends ILengthwise>(arg: T): number {
  console.log(arg.length);

  return arg.length;
}

printLength({ a: 5, length: 2 }); //2
printLength([1]); //1
printLength("str"); //3

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
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

function identity<T>(arg: T): T {
  return arg;
}

type User = {
  name: string;
  age: number;
};
const s: string = "Hello";
const n: number = 10;
const userN: User = {
  name: "Max",
  age: 15,
};

const r1 = identity(s);
const r2 = identity(n);
const r3 = identity(userN);

interface Message {
  id: number;
  text: string;
}

interface State<T> {
  loading: boolean;
  error: Error | null;
  data: T;
}

type UserState = State<User>;
type MessageState = State<Message>;

const messageState: MessageState = {
  loading: false,
  error: null,
  data: {
    id: 1,
    text: "Text",
  },
};
//-------------------------
function getRandomElement<T>(items: T[]) {
  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}

const el1 = getRandomElement([1, 2, 3, 4, 5]);
const el2 = getRandomElement(["1", "2", "3", "4", "5"]);
const el3 = getRandomElement(["1", "2", "3", "4", 5]);

function merge<U, V>(o1: U, o2: V) {
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

const b: Promise<number> = fakeRequest();

// type Obj = {
//   [key:string]:number
// }

type Obj = Record<string, number>;

//----------------------------
function len<T extends { length: number }>(collection: T) {
  return collection.length;
}
const r21 = len("Hello");
const r22 = len([1, 2, 3]);
const r23 = len(["1", "2", "3"]);
// const r24 = len(3) //Error

//-----------------------------------------------------------
function getValue<T extends object, U extends keyof T>(obj: T, prop: U) {
  return obj[prop];
}

const obj31 = {
  name: "Max",
  age: 33,
};
const r31 = getValue(obj31, "name");

function getKey<T extends object, U extends keyof T>(
  obj: T,
  value: T[U]
): U | null {
  const key = (Object.keys(obj) as Array<U>).find((key) => obj[key] === value);
  return key || null;
}

const key = getKey(obj31, "Max");

//------------------------
function patchField<T extends object, U extends keyof T, V extends T[U]>(
  obj: T,
  field: U,
  val: V
) {
  obj[field] = val;
}

const obj32 = {
  name: "Max",
  age: 33,
};
patchField(obj32, "name", "Mixa");
