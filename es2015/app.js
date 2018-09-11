var clg = console.log;

/* LET */

let favoriteCityId = "Rome";
clg(favoriteCityId);

favoriteCityId = "Paris";
clg(favoriteCityId);

/* CONST */

const citiesId = ["Paris", "NYC", "Rome", "Rio"];
clg(citiesId);
// citiesId = []; /* TypeError: Assignment to constant variable */
citiesId.push("Tokyo");
clg(citiesId);

/* CREATION D'OBJET */

function getWeather(cityId) {
    let city = cityId.toUpperCase();
    let temperature = 20;
    return {city, temperature};
}
clg(getWeather("Paris"));

/* AFFECTATION DESTRUCTUREE */

let {city, temperature} = getWeather("paris");
clg(city);
clg(temperature);

/* REST OPERATOR */

let [valeur01, valeur02, ...autresValeurs] = citiesId;
clg(valeur01);
clg(valeur02);
clg(autresValeurs.length);

/* CLASSE */

class Trip {
    constructor(id, name, imageUrl) {
       this.id = id;
       this.name = name;
       this.imageUrl = imageUrl;
    }

    get price(){
        return this._price;
    }

    set price(newPrice) {
        this._price = newPrice;
    }

    static getDefaultTrip() {

            return new Trip("rio","Rio","img/rio.jpg");
    }

    toString() {
        return `Trip [${this.id}, ${this.name}, ${this.imageUrl}, ${this.price}]`;
    }
}

class FreeTrip extends Trip {

    get price() {
        return 0;
    }

    toString() {
        return `Free${super.toString()}`;
    }
}

let parisTrip = new Trip("paris","Paris","img/paris.jpg");
clg(parisTrip);
clg(parisTrip.name);
parisTrip.price = 100;
clg(parisTrip.toString());
const defaultTrip = Trip.getDefaultTrip();
clg(defaultTrip.toString());
clg("********************");
const freeTrip = new FreeTrip("nantes", "Nantes", "img/nantes.jpg");
clg(freeTrip.toString());

clg("***************************************************************");
/* PROMISE, SET, MAP, ARROW FUNCTION */

class TripService {

    constructor() {
       this.tripSet = new Set();
        
       this.tripSet.add(new Trip('paris', 'Paris', 'img/paris.jpg'));
       this.tripSet.add(new Trip('nantes', 'Nantes', 'img/nantes.jpg'));
       this.tripSet.add(new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'));
    }

    findByName(tripName) {

         return new Promise((resolve, reject) => {

             setTimeout( () => {
                 
                let tab = Array.from(this.tripSet).filter(trip => trip.name === tripName);

                if(tab.length === 0) {
                    reject(`No trip with name ${tripName}`); // en cas d'erreur
                } else {
                    resolve(tab[0]); // en cas de succès
                }

             }, 2000)
        });
    }
}

class PriceService {

    constructor() {

        this.priceMap = new Map();

        this.priceMap.set("paris", 100);
        this.priceMap.set("rio", 800);
        //this.priceMap.set("nantes", null);

    }

    findPriceByTripId(tripId) {

       return new Promise((resolve, reject) => {

        setTimeout( () => {

            if(!this.priceMap.get(tripId)) {
                reject(`No price found for id ${tripId}`);
            } else {
                resolve(this.priceMap.get(tripId));
            }

         }, 2000)
               });
    }
}

let tripService = new TripService();
let priceService = new PriceService();

tripService.findByName("Paris")
    .then(trip => {clg(`Trip found : ${trip}`)})
    .catch(error => {clg(error)});
    tripService.findByName("Toulouse")
    .then(trip => {clg(`Trip found : ${trip}`)})
    .catch(error => {clg(error)});


priceService.findPriceByTripId("paris")
    .then(price => {clg(`Price found : ${price}`)})
    .catch(error => {clg(error)});

priceService.findPriceByTripId("nantes")
    .then(price => {clg(`Price found : ${price}`)})
    .catch(error => {clg(error)});
