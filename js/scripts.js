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