// Acquarium Tips Container

const tipsContainer = [
    {
        waterType: "Freshwater",
        akalinity: "4 - 8KH",
        temp: "72 - 82ºF",
        phLevel: "6.5 - 7.5"
    },
    {
        waterType: "Pond",
        akalinity: "4 - 8KH",
        temp: "33 - 86ºF",
        phLevel: "6.5 - 7.5"
    },
    {
        waterType: "Coral Reefs",
        akalinity: "6 - 8KH",
        temp: "82ºF",
        phLevel: "8.0 - 8.5"
    }
];

export const tipsData = () => {
    return tipsContainer.slice();
}