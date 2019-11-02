// Business logic for PlacesBook

function PlacesBook() {
    this.places = [],
    this.currentId = 0
}

PlacesBook.prototype.addPlace = function(place) {
    place.id = this.assignId();
    this.places.push(place);
}

PlacesBook.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;
}

PlacesBook.prototype.findPlace = function(id) {
    for (let i = 0; i < this.places.length; i++){
        if (this.places[i]) {
            if (this.places[i].id == id) {
                return this.places[i];
            }
        }
    };
    return false;
}

PlacesBook.prototype.deletePlace = function(id) {
    for (let i = 0; i < this.places.length; i++) {
        if (this.places[i]) {
            if (this.places[i].id == id) {
                delete this.places[i];
                return true;
            }
        }
    };
    return false;
}

// Business logic for Place
function Place(park, state, time, notes) {
    this.park = park,
    this.state = state,
    this.time = time,
    this.notes = notes
}

Place.prototype.displayInfo = function(place) {
    return this.park + ", " + this.state + " " + this.time;
}