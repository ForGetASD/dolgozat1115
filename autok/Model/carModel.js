class CarModel{
    #carArray = []
    constructor(){
        console.log("bejut a modelbe")
    }

    minusFromStock(adat){
        adat.stock = adat.stock - 1
        console.log(adat.stock)
        
    }

    dataIn(endPoint, callBack){
        fetch(endPoint, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success: ', data)
                this.#carArray = data.cars
                console.log(this.#carArray)
                callBack(this.#carArray)
            })
            .catch((error) => {
                console.log('Erorr: ', error)
            })
    }
}

export default CarModel