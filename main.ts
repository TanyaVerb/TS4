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
