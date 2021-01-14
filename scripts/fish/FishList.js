import {useFish} from './FishDataProvider.js';
import {fishX} from './Fish.js';

export function fishList() {
    let fishContainer = document.querySelector('#fishList');
    const allTheFish = useFish();
    
    let fishHTMLRepresentations = "";
    
    for (const fish of allTheFish) {
        fishHTMLRepresentations += fishX(fish);
    }

    fishContainer.innerHTML = `${fishHTMLRepresentations}`;
}         