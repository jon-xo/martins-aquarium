/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */

  const fishCollection = [
      {
          name: "George",
          species: "Beta Fish",
          length: "2 inches",
          locationHarvested: "Galapagos Island",
          food: "Pretzels"
      },
      {
        name: "Frank",
        species: "Gold Fish",
        length: "3 inches",
        locationHarvested: "Barbadis",
        food: "Snails"
      },
      {
        name: "Mike",
        species: "Sword Fish",
        length: "4 feet, 6 inches",
        locationHarvested: "Virgin Islands",
        food: "Clown Fish"
      },
      {
        name: "Samantha",
        species: "Clown Fish",
        length: "3 inches",
        locationHarvested: "Hawaii",
        food: "Plankton"
      },
  ]

// This is new code. Add this.
export const useFish = () => {
  return fishCollection.slice()
}