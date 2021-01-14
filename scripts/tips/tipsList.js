import {tipsData} from './tipsDataProvider.js';
import {tipsCard} from './tips.js';

export const tipsList = () => {
    let tipsContainer = document.querySelector('#tips-container');

    const tipsDataAll = tipsData();

    for (const tip of tipsDataAll) {
        tipsContainer.innerHTML += tipsCard(tip)
    }
}
