var mas = [];

for (var i = 0; i < 100; i++) {
    mas[i] = i + 1;
}

// for (var i=0; i<mas.length; i++){
//    console.log(mas[i]);
//}

for (let x of mas) {
    let metka = true;
    if (x == 1) {
        continue;
    } else {
        for (let z = 2; z < x; z++) {
            if (x % z == 0) {
                metka = false;
            }

        }
        if (metka) {
            console.log(x)
        }
    }
}