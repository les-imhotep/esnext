
var lg = console.log


//variable --> let 
let favoriteCityId = 'rome';
lg(favoriteCityId);
favoriteCityId = 'paris';
lg(favoriteCityId);
lg('*****');

//variable --> const
const citiesId  = ['paris','nyc','rome','rio-de-janeiro'];
lg(citiesId);
//citiesId = [];
//TypeError: Assignment to constant variable.
citiesId.push('tokyo');
lg(citiesId);
lg('*****');


//creation d'objet
const cityId = 'paris';

function getWeather(cityId){
    let city = cityId.toUpperCase();
    let temperature = 20;
    return {city, temperature};
}

const weather = getWeather(favoriteCityId);
lg(weather);
lg('*****');

//affectation destructurée
let {city, temperature} = weather;
lg(weather);
lg('*****');

//rest operator
const [parisId, nycId, ...othersCitiesId] = citiesId;
lg(parisId);
lg(nycId);
lg(othersCitiesId.length);
lg('*****');

//classe 
class Trip {
    constructor(id, name, imageUrl){
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }
    //getter et setter
    get price(){
        return this._price;
    }
    set price(newPrice){
        this._price = newPrice;
    }
   
    static getDefaultTrip() {
        return new Trip ('rio-de-janeiro','Rio de Janeiro','img/rio-de-janeiro.jpg');
    }  
}

let parisTrip = new Trip ('paris','Paris','img/paris.jpg');
lg(parisTrip);
lg(parisTrip.name);
lg('*****');

//ajout de la méthode toString()
Trip.prototype.toString = function tripToString () {
    return 'Trip [' + this.id + ', ' + this.name + ', ' + this.imageUrl + ']';
}
lg(parisTrip.toString());
lg('*****');

//ajout de la variable _price
parisTrip.price = 100;

Trip.prototype.toString = function tripToString () {
    return 'Trip [' + this.id + ', ' + this.name + ', ' + this.imageUrl + ', ' + this._price  + ']';
}

lg(parisTrip.toString());
lg('*****');

//ajout de la méthode static getDefaultTrip()
const defaultTrip = Trip.getDefaultTrip();

lg(defaultTrip.toString());
lg('*****');

//Héritage 
class FreeTrip extends Trip {
    constructor(id, name, imageUrl){
        super(id, name, imageUrl)
        this.price = 0;
    }
}

const freeTrip= new FreeTrip ('nantes','Nantes','img/nantes.jpg');

lg(freeTrip.toString());
lg('*****');

//redéfinir la méthode toString

Trip.prototype.toString = function tripToString () {
    return 'FreeTrip [' + this.id + ', ' + this.name + ', ' + this.imageUrl + ', ' + this._price  + ']';
}
lg(freeTrip.toString());
lg('*****');

//Promise, Set, Map, Arrow Function
class TripService {

    constructor() {
        // TODO Set of 3 trips
        let trip = new Set();
        trip.add(new Trip('paris', 'Paris', 'img/paris.jpg'));
        trip.add(new Trip('nantes', 'Nantes', 'img/nantes.jpg'));
        trip.add(new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'));
    }

    findByName(tripName) {

         return new Promise((resolve, reject) => {

             setTimeout( () => {
                 // ici l'exécution du code est asynchrone

                 // TODO utiliser resolve et reject en fonction du résultat de la recherche
                 
         

             }, 2000)
        });
    }
}

class PriceService {

    constructor() {
        // TODO Map of 2 trips
        let priceService = new Map();
        // 'paris' --> price = 100
        priceService.set('paris',100);
        // 'rio-de-janeiro' --> price = 800)
        priceService.set('rio-de-janeiro',800);
        // no price for 'nantes'
    }

    findPriceByTripId(tripId) {

       return new Promise((resolve, reject) => {

                    setTimeout( () => {
                        // ici l'exécution du code est asynchrone

                        // TODO utiliser resolve et reject en fonction du résultat de la recherche
                        if(!this.priceService.get(tripId)) {
                            reject(`No price found for id ${tripId}`);
                        } else {
                            resolve(this.priceService.get(tripId));
                        }

                    }, 2000)
               });
    }
}

let ts= new TripService();
let ps= new PriceService();

//Pour tester l'utilisation des services TripService et PriceService
ps.findPriceByTripId("paris")
.then(trip => {lg(`Price found : ${price}`)})
.catch(error => {lg(error)});
