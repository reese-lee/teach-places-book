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
    return this.park + ", " + this.state + " " + this.time + "Notes: " + this.notes;
}

// let moab = new Place("Moab", "Utah", "June 2017", "This was such a cool spot");
// console.log(moab);

// User interface logic
let newPlacesBook = new PlacesBook();

function displayPlacesDetails(newPlacesBookToDisplay) {
    let placesList = $("ul#places");
    let htmlForPlacesInfo = "";
    newPlacesBookToDisplay.places.forEach(function(place) {
        htmlForPlacesInfo += "<li id=" + place.id + ">" + place.park + ", " + place.state + "<br>Date: " + place.time + "</br>" + "Notes: " + place.notes + "</li>"
    });
    placesList.html(htmlForPlacesInfo);
    }

$(document).ready(function() {
    $("form#new-place").submit(function(event) {
        event.preventDefault();
        let inputtedParkName = $("input#new-park").val();
        let inputtedParkState = $("input#new-state").val();
        let inputtedDate = $("input#new-date").val();
        let inputtedNotes = $("input#new-notes").val();

        let newPlace = new Place(inputtedParkName, inputtedParkState, inputtedDate, inputtedNotes);        
        newPlacesBook.addPlace(newPlace);
        displayPlacesDetails(newPlacesBook);
    })
})

