const player={
    alive:true
}

const music=
{
    run:true
}
//setprototypeof and getprototypeof

Object.setPrototypeOf(music,player)

console.log(Object.getPrototypeOf(music))

console.log(Object.getPrototypeOf(music)===music.__proto__)

console.log(music.alive);

const car={
    doors:2,
    seats:"empty",
    get SeatMaterial()
    {
        return this.seats;
    },
    set SeatMaterial(seats)
    {
        this.seats=seats;
    }
}

const lc={};
Object.setPrototypeOf(lc,car);
lc.SeatMaterial="jk";
car.SeatMaterial="jkl"
console.log(lc.valueOf())

console.log(Object.keys(car));
