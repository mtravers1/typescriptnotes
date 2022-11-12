//Typescript is a superset of javascript
//allows strict types
//support modern features ES5<
//features generics, interfaces, tuples

import { LargeNumberLike } from "crypto";


//moduel is just a file with a export

//Interfaces-typescript compares values based on thier shape/members/properties
//If the shape is different
interface A{
    someProp:number;
}

interface B{
    someProp:number
}

let c: A={someProp:4}
let d: B =c;

interface Profile{
    name:string;
    age?:number// use ? to make optional
}

let profile:Profile={
    name:'mike',
    age:28
}

//Index Signature
interface F{
    someProp:string
    [key:string]:number | string//[type for key]:type for value
}

const f:F={someProp:'hello'}
f.x=1;
f.y=4;

//Call signature

interface Sum{
    (a:number, b:number):number;
    prop1:string
}

const sum:Sum = (a,b)=>a+b
sum.prop1='someprop'
//Extends interface child inherits props from parent
interface Parent{
    x:string
}

interface Child extends Parent{}

let child:Child={x:'someprop'}
//Type with functions

function multiply(a:number, b?:number):number{
    return a+(b||0)}//add ? to a variable and make it or 0 to make it optional
multiply(1,2)

type Myfunction = (a:number, b:number)=>number

let sum2:Myfunction =(a,b)=>a+b


function sumEverything(args1:number, args2:boolean, ...numbers:number[]):number{
    return numbers.reduce((result, num)=>result+num, 0)
}

//Overloads jus if statements to meet the condition of the fuction
function calcArea(width:number, height:number):number;
function calcArea(length:number):number
function calcArea(...args:number[]){
    if(calcArea.length===2)
    {
        return args[0]*args[1]
    }
    return Math.pow(args[0], 2)
    
}

//Classes

class Robot{
    

    constructor(protected _name:string){
     
    }

    askname(){
        console.log('my name is ${this.name}')
    }


    set name(value:string){
        this._name='Prefix '+value
    }
    get name(){
        return this.name +'Suffix'
    }
    

}

// Robot.name='kev'
console.log(Robot.name)
const robert= new Robot('robert')

class FlyingRobot extends Robot{
    // setting properties to protected make it only accesible that class and extended class/child class
    public distance:number//setting to private make it only accessible to that class
    //readonly makes it so the properties cant be changed
    constructor(name:string, distance:number){
        super(name)
        this.distance=distance
        this.name=name
    }

    

    
}
const roberto = new FlyingRobot('A1', 1)

//set keyword is used to access properties when they are being written or read
export{}