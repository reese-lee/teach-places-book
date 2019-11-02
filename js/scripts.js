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

function Place() {

}