export const locationCard = (locationObject) => {
    return `
        <section class="location-card">
            <img src="${locationObject.img}" alt="${locationObject.name}">
            <p>${locationObject.name}</p>
        </section>
    `
}
