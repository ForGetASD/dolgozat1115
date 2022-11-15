import CarModel from "../model/carModel.js"
import CarsView from "../View/carsView.js"


class CarController{
    constructor(){
        const carmodel = new CarModel()

        carmodel.dataIn("../adat.json", this.carDetails)

        $(window).on("buy", (event) => {
            carmodel.minusFromStock(event.detail)
            //console.log("gomb")
        })
    }
    carDetails(tomb){
        const szuloElem = $("main")
        new CarsView(tomb, szuloElem)
    }
}

export default CarController