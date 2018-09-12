console.log('************* let *************');

//let

let favoriteCityId = 'rome';
console.log(favoriteCityId);
favoriteCityId = 'paris';
console.log(favoriteCityId);




console.log('************* const *************');

//const

const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"];
console.log(citiesId);
//citiesId = [];
citiesId.push("tokyo");
console.log(citiesId);




console.log("************* Création d'objet *************");

//Création d'objet

function getWeather(cityId) {
    let city = cityId.toUpperCase();
    let temperature = 20;
    return{city, temperature};
}
const weather = getWeather(favoriteCityId);
console.log(weather);




console.log('************* Affectation destructurée *************');

//Affectation destructurée

const {city, temperature} = weather;
console.log(city);
console.log(temperature);




console.log('************* Rest operator *************');

//Rest operator

const [parisId, nycId,...othersCitiesId] = citiesId;
console.log(parisId);
console.log(nycId);
console.log(othersCitiesId.length);




console.log('************* Classe *************');

//Classe

class Trip {
    constructor(id, name, imageUrl) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }

    get price(){
        return this._price;
    }

    set price(newPrice){
        this._price = newPrice;
    }

    toString() { 
        return "Trip ["+this.id+", "+this.name+", "+this.imageUrl+", "+this._price+"]";
    }

    static getDefaultTrip() {
        return new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg');
    }
}

let parisTrip = new Trip('paris', 'Paris', 'img/paris.jpg');
parisTrip.price = 100;
console.log(parisTrip.toString());
//console.log(parisTrip.price);
console.log(Trip.getDefaultTrip().toString());




console.log('************* Héritage *************');

//Héritage

class FreeTrip extends Trip {
    constructor(id, name, imageUrl){
        super(id, name, imageUrl);
        this.price = 0;
    }
}

let freeTrip = new FreeTrip('nantes', 'Nantes', 'img/nantes.jpg');
console.log('Free'+freeTrip.toString());




console.log('************* Promise, Set, Map, Arrow Function *************');

//Promise, Set, Map, Arrow Function

class TripService {

    constructor() {
        this.trips = new Set()
        this.trips.add(new Trip('paris', 'Paris', 'img/paris.jpg'));
        this.trips.add(new Trip('nantes', 'Nantes', 'img/nantes.jpg'));
        this.trips.add(new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'));
    }

    findByName(tripName) {

         return new Promise((resolve, reject) => {

            setTimeout( () => {
                let tab = Array.from(this.trips).filter(trip => trip.name === tripName);
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
        this.priceMap = new Map()
        this.priceMap.set('paris', 100);
        this.priceMap.set('rio-de-janeiro', 800);
        this.priceMap.set('nantes', null);
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
    .then(trip => {console.log(`Trip found : ${trip}`)})
    .catch(error => {console.log(error)});
tripService.findByName("Toulouse")
    .then(trip => {console.log(`Trip found : ${trip}`)})
    .catch(error => {console.log(error)});

priceService.findPriceByTripId("paris")
    .then(price => {console.log(`Price found : ${price}`)})
    .catch(error => {console.log(error)});
priceService.findPriceByTripId("nantes")
    .then(price => {console.log(`Price found : ${price}`)})
    .catch(error => {console.log(error)});