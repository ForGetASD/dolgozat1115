class CarView{
    #elem
    constructor(elem, szuloElem){
        this.#elem = elem
        szuloElem.append(`
        <div id="car">
            <div><h2>${elem.id}</h2></div>
            <div>Brand name:${elem.brand}</div>
            <div>Model: ${elem.type}</div>
            <div>Engine: ${elem.engine}</div>
            <div><button id="buy${elem.id}">Buy</button></div>
            <div>How many left: ${elem.stock}</div>
        </div>
        `)

        this.buyIt = $(`#buy${elem.id}`)
        this.buyIt.on("click", () => {
            //console.log(this.id)
            this.clickTrigger()
        })
    }
    clickTrigger(){
        const esemeny = new CustomEvent("buy", {detail:this.#elem})
        window.dispatchEvent(esemeny)
    }
}

export default CarView