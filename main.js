// Canvas Initial Setup
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
canvas.height = innerHeight
canvas.width = 200

// build new car
let mycar = new Car(canvas.width / 2, canvas.height / 2, 30, 50)

mycar.draw(ctx)