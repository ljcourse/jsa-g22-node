const studenti = [
    { ime: 'Bojan', prosek: 7.5, grad: 'Skopje' },
    { ime: 'Pero', prosek: 8.3, grad: 'Bitola' },
    { ime: 'Janko', prosek: 6.9, grad: 'Bitola' },
    { ime: 'Vesna', prosek: 9.2, grad: 'Skopje' },
    { ime: 'Elena', prosek: 9.9, grad: 'Kumanovo' },
    { ime: 'Vancho', prosek: 10, grad: 'Tetovo' },
    { ime: 'Elena', prosek: 9.9, grad: 'Ohrid' },
    { ime: 'Ivana', prosek: 6.8, grad: 'Kumanovo' },
    { ime: 'Natasha', prosek: 8.1, grad: 'Skopje' },
    { ime: 'Stanko', prosek: 7.2, grad: 'Strumica' }
];

//1.site studenti od skopje cie ime zavrsuva na a i imaat prosek nad 8 podredeni po ime rastecki
let studentiFilterSk = studenti.filter((s) => {
    return s.grad === 'Skopje' && s.ime.endsWith('a') && s.prosek > 7;
}).sort((a, b) => {
    if (a.ime < b.ime) return -1;
    if (a.ime > b.ime) return 1;
    return 0;
});

console.log(studentiFilterSk);

//2.sites studenti koi imaat prosek nad 9 i ne se od skopje, podredeni po prosek opagjacki
let studentiFilterSk0 = studenti.filter((s) => {
    return s.grad !== "Skopje" && s.prosek > 9;
}).sort((a, b) => {
    if (a.prosek > b.prosek) return 1;
    if (a.prosek < b.prosek) return -1;
    return 0;
});

console.log(studentiFilterSk0);

//3.prvite 3 studenti koi imaaat iminja od 5 karakteri podredeni po prosek
let studentiFilter0 = studenti.slice(0, 4).filter((s) => {
    return s.ime.length === 5;
}).sort((a, b) => {
    if (a.prosek < b.prosek) return 1;
    if (a.prosek > b.prosek) return -1;
    return 0;
});

console.log(studentiFilter0);

//4.gradovi podredeni po grupna visina na prosek
let gradoviSK = studenti.filter((s) => {
    return s.grad === "Skopje";
}).reduce((acc, s) => {
    let pro = studenti.filter((s) => {
        return s.grad === "Skopje";
    });
    return acc + s.prosek / pro.length;
}, 0)

let gradoviBit = studenti.filter((s) => {
    return s.grad === "Bitola";
}).reduce((acc, s) => {
    let pro = studenti.filter((s) => {
        return s.grad === "Bitola";
    });
    return acc + s.prosek / pro.length;
}, 0);
let gradoviKum = studenti.filter((s) => {
    return s.grad === "Kumanovo";
}).reduce((acc, s) => {
    let pro = studenti.filter((s) => {
        return s.grad === "Kumanovo";
    });
    return acc + s.prosek / pro.length;
}, 0);
let gradoviStr = studenti.filter((s) => {
    return s.grad === "Strumica";
}).reduce((acc, s) => {
    let pro = studenti.filter((s) => {
        return s.grad === "Strumica";
    });
    return acc + s.prosek / pro.length;
}, 0);
let gradoviTe = studenti.filter((s) => {
    return s.grad === "Tetovo";
}).reduce((acc, s) => {
    let pro = studenti.filter((s) => {
        return s.grad === "Tetovo";
    });
    return acc + s.prosek / pro.length;
}, 0);
let gradoviO = studenti.filter((s) => {
    return s.grad === "Ohrid";
}).reduce((acc, s) => {
    let pro = studenti.filter((s) => {
        return s.grad === "Ohrid";
    });
    return (acc + s.prosek / pro.length);
}, 0);

let grup = Array.of(gradoviSK, gradoviBit, gradoviKum, gradoviTe, gradoviO, gradoviStr).sort((a, b) => {
    return a - b;
});

console.log(grup);

//5.vkupen prosek na studenti cie ime zavrsuva na a nasproti site ostanati
let studentiA = studenti.filter((s) => {
    return s.ime.endsWith('a');
}).reduce((acc, s) => {
    let prosecni = studenti.filter((s) => {
        return s.ime.endsWith('a');
    });
    return acc + s.prosek / prosecni.length;
}, 0);

let studentiNeA = studenti.filter((s) => {
    return !s.ime.endsWith("a");
}).reduce((acc, s) => {
    let prosecni0 = studenti.filter((s) => {
        return !s.ime.endsWith("a");
    });
    return acc + s.prosek / prosecni0.length;
}, 0);

console.log(`Vkupen prosek na studentite cie ime zavrsuva na a e ${studentiA}, nasrpoti ostanatite cij prosek e ${studentiNeA}`);
console.log(Array.of({ studentiA }, { studentiNeA }));