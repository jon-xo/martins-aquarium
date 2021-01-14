export function fishX(fishObject){
    return `
    <section class="fish-card">
    <img class="fish-img"
        src="https://i.pinimg.com/originals/0d/5f/ab/0d5fab1cb9b0871daa8568bd891f697b.jpg" alt="Fish">
    <div class="stat-grid">
        <p class="fish-stats">${fishObject.name}</p>
        <p class="fish-stats">${fishObject.length}</p>
        <p class="fish-stats">${fishObject.locationHarvested}</p>
        <p class="fish-stats">${fishObject.food}</p>
    </div>`
}