/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let btnEl = document.getElementById("btn-el")
let inputNumber= document.getElementById("num")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")


btnEl.addEventListener("click", function() {
    let inNum = Number(inputNumber.value)
    lengthEl.textContent = `${inNum} meters = ${(inNum * 3.281).toFixed(3)} feet | ${inNum} feet = ${(inNum / 3.281).toFixed(3)} meters`
    
    volumeEl.textContent = `${inNum} liters = ${(inNum * 0.264).toFixed(3)} gallons | ${inNum} gallons = ${(inNum / 0.264).toFixed(3)} liters`
    
    massEl.textContent = `${inNum} kilos = ${(inNum * 2.204).toFixed(3)} pounds | ${inNum} pounds = ${(inNum / 2.204).toFixed(3)} kilos`
    
    inputNumber.value = ""
})
