lg = console.log
//----------------------------------------------------------------------------
//LET
//Créer une variable favoriteCityId
let favoriteCityId = "rome"
//Afficher dans la console
lg(favoriteCityId)
//Affecter une nouvelle valeur
favoriteCityId = "paris"
//Afficher dans la console
lg(favoriteCityId)

//----------------------------------------------------------------------------
//CONST
//Créer une constante citiesId qui contient un tableau 
const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"]
//Afficher dans la console
lg(citiesId)
//Assignment to constant variable
//citiesId = []

//Ajouter un nouvel élément au tableau : "tokyo"
citiesId.push("tokyo")
lg(citiesId)

//----------------------------------------------------------------------------
//Création d'objet
function getWeather(cityId) {
    let city = cityId.toUpperCase()
    const temperature = 20
    return { city, temperature }
}
const weather = getWeather("PARIS")
lg(weather)

//----------------------------------------------------------------------------
//Affectation destructurée
const {
    city,
    temperature,
} = weather;

lg(city)
lg(temperature)

//----------------------------------------------------------------------------
//Rest operator
const [parisId, nycId, ...othersCitiesId] = citiesId;
lg(parisId)
lg(nycId)
lg(othersCitiesId)

//----------------------------------------------------------------------------
//CLASSE
class Trip {
    constructor(id, name, imageUrl) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }

    toString() {
        return "Trip [" + this.id + "," + this.name + "," + this.imageUrl + "," + this._price + "]"
    }
    get price() {
        return this._price;
    }
    set price(newPrice) {
        this._price = newPrice;
    }
    static getDefaultTrip() {
        return new Trip("rio-de-janeiro", "Rio de Janeiro", "img/rio-de-janeiro.jpg")
    }
}

let parisTrip = new Trip("paris", "Paris", "img/paris.jpg")

//Test de la classe Trip
lg(parisTrip)
lg(parisTrip.name)
lg(parisTrip.toString())
//valoriser price
parisTrip._price = 100
lg(parisTrip.toString())
//Constante defaul trip
const defaultTrip = Trip.getDefaultTrip()
lg(defaultTrip)

//----------------------------------------------------------------------------
//HERITAGE
class FreeTrip extends Trip {
    constructor(id, name, imageUrl, price) {
        super(id, name, imageUrl);
        this.price = 0;
    }
    //redefinition du to string
    toString() {
        return "Free" + super.toString()
    }
}
const freeTrip = new FreeTrip("nantes", "Nantes", "img/nantes.jpg")
lg(freeTrip.toString())

//----------------------------------------------------------------------------
//Promise, Set, Map, Arrow Function
class TripService {

    constructor() {
        // TODO Set of 3 trips
        this.listTrip = new Set();
        this.listTrip.add(new Trip('paris', 'Paris', 'img/paris.jpg'))
        this.listTrip.add(new Trip('nantes', 'Nantes', 'img/nantes.jpg'))
        this.listTrip.add(new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'))



    }

    findByName(tripName) {

        return new Promise((resolve, reject) => {

            setTimeout(() => {
                let searchName = Array.from(this.listTrip).filter(trip => trip.name === tripName)

                // TODO utiliser resolve et reject en fonction du résultat de la recherche
                if (searchName.length === 0) {
                    reject(`Aucun ${tripName} trouver, veuillez resssayer avec un autre nom`); // en cas d'erreur
                } else {
                    resolve(searchName[0]); // en cas de succès
                }
            }, 2000)
        });
    }
}

class PriceService {

    constructor() {
        // TODO Map of 2 trips
        // 'paris' --> price = 100
        // 'rio-de-janeiro' --> price = 800)
        // no price for 'nantes'
        let priceService = new Map();
        priceService.set('paris', 100)
        priceService.set('rio-de-janeiro', 800)


    }

    findPriceByTripId(tripId) {

        return new Promise((resolve, reject) => {

            setTimeout(() => {
                // ici l'exécution du code est asynchrone

                // TODO utiliser resolve et reject en fonction du résultat de la recherche



            }, 2000)
        });
    }
}


let testTripService = new TripService();
let testPriceService = new PriceService();


testTripService.findByName("Paris")