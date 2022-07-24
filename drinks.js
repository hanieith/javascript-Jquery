function HashStorageFunc() {
    let _drinkName = prompt('Введите название напитка');
    let _alco = confirm('Напиток алкогольный');
    let _drinkIng = prompt('Введите название напитка');

    function addValue() {
        _drinkName = new drinkStorage(_alco, _drinkIng);
    }

    function drinkStorage(alco, drinkIng) {
        this.alcohol = alco;
        this.ingr = drinkIng;
    }
}
