import {locationData} from "./locationDataProvider.js";
import {locationCard} from "./location.js"

export const locationGrid = () => {
    let locationContainer = document.querySelector('#location-container');

    const locationDataAll = locationData();

    for (const location of locationDataAll) {
        locationContainer.innerHTML += locationCard(location);
    }
}