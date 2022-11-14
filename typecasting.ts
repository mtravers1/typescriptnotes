
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
    team:string
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
    //type casting allows the access of each property
    //wrap argument in () and use as keyword with the type you want to access
    function logcarinfo(car:Car){
        console.log((car as CityCar).space)
        console.log((car as RaceCar).team)

       switch(car.maxspeed){
        case 200:
        console.log(car.team)
        break;
        case 100:
        console.log(car.space)
        break;
        default:
            console.log(car)
       }
      
    }
}