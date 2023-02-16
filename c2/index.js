const celsius = (a) => {
    console.log((a * 1.8) + 32)
}

celsius(12)


const farenheit = (b) => {
    console.log(((b - 32) * 5) / 9);
}

farenheit(100)


const c2f = (c) => {
    return c * 1.8 + 32

}

const f2c = (f) => {
    return ((f - 32) * 5) / 9
}

let res1 = c2f(0.8888888);
console.log(res1)

let res2 = f2c(0.777777777);
console.log(res2)

const funk = (e) => {
    console.log(3);
}

// el.addEventListener("click", funk)

// el.addEventListener('click', (e) => {
//     console.log(e);
// })