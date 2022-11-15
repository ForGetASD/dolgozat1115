import CarView from "./carView.js";


class CarsView{
    constructor(tomb, szuloElem){
        szuloElem.append(`<div id="car></div>`)
        this.carElem = szuloElem.children("div:last-child")
        tomb.forEach(cars => {
            const car = new CarView(cars, this.carElem)
        });
    }
}

export default CarsView