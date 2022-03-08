export{}

type Product = {
    id: number;
    name: string;
    role?: boolean;
}

const a: number = 20;
const b: number = 10;
const name: string | number = "dungnv"; //union
const age: number = 20;
const status: boolean = true;
const info: Product = {id: 1, name: 'a'};
const myArr: string[] = ["a","b","c"];
const numberArr: number[] = [1,2,3,4];
const objectArr: Product[] = [{id:1, name: 'b'}, {id:2, name: 'c'}];

function sum(numA: number,numB: number): number{
    return numA + numB;
};

const appDiv = document.querySelector('#app')?.innerHTML;
appDiv === "abc";
console.log(name);