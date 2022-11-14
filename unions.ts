
interface Person{
    name:string
    age:number
}


interface BusinessPerson extends Person{    
    salary:number
}

interface AcedemicPerson extends Person{

    pubications:string[]
}

//Narrowing Unions use switch statements
type RaceCar={
    name:string
    maxspeed:200
    winner:string
}

type CityCar = {
    name:string
    space:number
    maxspeed:100
}

type Car=RaceCar|CityCar

export default function play(){
    const car:CityCar={
        name:"Race",
        maxspeed:100,
        space:33


    }
    function logcarinfo(car:Car){
       switch(car.maxspeed){
        case 200:
        console.log(car.winner)
        break;
        case 100:
        console.log(car.space)
        break;
        default:
            console.log(car)
       }
      
    }
}