import {useFish} from './FishDataProvider.js';
import {fishX} from './Fish.js';

export function fishList() {
    let fishContainer = document.querySelector('#fishList');
    const allTheFish = useFish();
    
    console.log('this is my fish collection', allTheFish);
    
    for (const fish of allTheFish) {
        fishContainer.innerHTML += fishX(fish);
    }
}         