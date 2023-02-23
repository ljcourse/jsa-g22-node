// C - create;
// R - read;
// U - update;
// D - delete; // APlicatii

const studenti = [
    { ime: 'Elena', prosek: 8.0 },
    { ime: 'Vesna', prosek: 6.0 },
    { ime: 'Pero', prosek: 7.0 },
    { ime: 'Bojan', prosek: 5.0 },
    { ime: 'Janko', prosek: 9.0 },
];






// forEach,map,reduce,sort,filter,find

const names = studenti.map(element => element.ime);
console.log(names);

let ocenki = studenti.reduce((acc, s) => {

    // return Number(acc) + Number(s.prosek)
    return acc + s.prosek

}, 0)

console.log(ocenki);


// studenti.sort((a, b) => {
//     if (a.prosek < b.prosek) return -1
//     if (a.prosek > b.prosek) return 1
//     return 0
// })

// console.log(studenti);

// studenti.sort((a, b) => {
//     if (a.ime < b.ime) return 1
//     if (a.ime > b.ime) return -1
//     return 0
// })


// console.log(studenti);


let studentiFilter = studenti.filter((s) => {
    // return s.ime === 'Pero'

    // return s.ime.endsWith('a')

    // return s.prosek >  8 ;
    // return s.prosek <  8 ;


})

console.log(studentiFilter);


let studentiFind = studenti.find((s) => {
    return s.ime === "Pero"
})

console.log(studentiFind);


studenti.forEach(s => {
    console.log(s.ime);
})