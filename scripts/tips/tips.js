export const tipsCard = (tipsObject) => {
    return `
    <article class="aside-section">
        <h3>${tipsObject.waterType}</h3>
        <ul>
            <li>Akalinity: ${tipsObject.akalinity}</li>
            <li>Temperature: ${tipsObject.temp}</li>
            <li>pH Level: ${tipsObject.phLevel}</li>
        </ul>
    </article>
    `
}