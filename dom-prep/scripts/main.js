// Lightning 1
let headingElement = document.querySelector('#main-heading');
let greet = document.querySelector('#hello-container');

// Lightning 2
let choresArray = ["Chickens", "Goats", "Dogs", "Vaccum", "Dishes", "Sweep"];


// Lightning 1
headingElement.innerHTML = 'Hello, world!'
greet.innerHTML = 'Hello, ChickenMonkey!'

// Lightning 2
function listChores(array) {
    for (let i = 0; i < array.length; i++) {
        // console.log(array[i]);
        document.querySelector('#chores-container').innerHTML += `<li>${array[i]}</li>`;
    }
}

listChores(choresArray);

// Pratice 1
let movieObject = {
    title: "Star Wars: A New Hope",
    genre: "Science Fiction",
    releaseDate: "May 25, 1977"
  }

let movieTitle = document.querySelector('#title');
let movieGenre = document.querySelector('#genre');
let movieRelease = document.querySelector('#release-date');

movieTitle.innerHTML = movieObject.title;
movieGenre.innerHTML = movieObject.genre;
movieRelease.innerHTML = movieObject.releaseDate;

// Pratice 2
let downtownRestaurants = ["Backyard Pizza and Raw Bar", "The Bodega", "Surin of Thailand", "Bahnhof", "Jim's Steak and Spaghetti House", "The Peddler", "Jewel City Seafood Market", "Black Sheep Burritos & Brews", "La Famiglia", "Le Bistro", "Charlie Graingers", "The Cellar Door"];


downtownRestaurants.forEach(function (downtownRestaurants) {
    let listElement = document.querySelector('#restaurants-list');
    listElement.innerHTML += `<li>${downtownRestaurants}</li>`;
})

// Pratice 3
let sandwichToppings = ["pickles", "extra cheese", "lettuce", "tomatoes", "avocado", "bacon", "mayo", "mustard"];

function makeSandwich(array) {
    for (let x = 0; x < array.length; x++) {
        document.querySelector('#sandwich-container').innerHTML += `<li>${sandwichToppings[x]}</li>`
    }
}

makeSandwich(sandwichToppings);


// Pratice 4

let movieSchedule = [
    {
      title: "Ralph Breaks the Internet",
      rating: "PG",
      currentlyPlaying: true,
      poster: "https://lumiere-a.akamaihd.net/v1/images/r_ralphbreakstheinternet_header_ddt-17403_08ef6d92.jpeg?region=0,0,1024,1274&optimize=true"
    },
    {
      title: "The Grinch",
      rating: "G",
      currentlyPlaying: true,
      poster: "https://images-na.ssl-images-amazon.com/images/I/71vgX4VFdiL._SY679_.jpg"
    },
    {
      title: "A Star is Born",
      rating: "R",
      currentlyPlaying: false,
      poster: "https://images-na.ssl-images-amazon.com/images/I/718zWbDKmvL._SY606_.jpg"
    },
     {
      title: "Bohemian Rhapsody",
      rating: "PG-13",
      currentlyPlaying: true
    },
    {
      title: "Fantastic Beasts: The Crimes of Grindlewald",
      rating: "PG-13",
      currentlyPlaying: true,
      poster: "https://images-na.ssl-images-amazon.com/images/I/716fk%2BBZ-NL._SY606_.jpg"
    },
    {
      title: "Robin Hood",
      rating: "PG-13",
      currentlyPlaying: false,
      poster: "https://images-na.ssl-images-amazon.com/images/I/61K%2BTyGjsCL.jpg"
    },
    {
      title: "Spider-Man: Into the Spider-Verse",
      rating: "PG-13",
      currentlyPlaying: true,
    }
  ]

movieSchedule.forEach(function (movieSchedule) {
      
    let parentDiv = document.querySelector('#movie-schedule');

    let theaterTitle = movieSchedule.title;
    let theaterRating = movieSchedule.rating;
    let nowPlaying = movieSchedule.currentlyPlaying;
    let poster = movieSchedule.poster;

    let movieCard = document.createElement('div')
    movieCard.setAttribute('class', 'mov-card')

    let workingTitle = document.createElement('h2');
    let workingRating = document.createElement('h4');
    let workingPoster = document.createElement('img');

    if (nowPlaying === true || nowPlaying === false) {
        workingTitle.innerHTML = theaterTitle;
        movieCard.appendChild(workingTitle);
        
        workingRating.innerHTML = theaterRating;
        movieCard.appendChild(workingRating);
    
        workingPoster.setAttribute('src', poster);
        movieCard.appendChild(workingPoster);
        parentDiv.appendChild(movieCard);
    }
    
    if (poster === undefined) {
        workingPoster.setAttribute('src', 'https://www.snhrc.com/wp-content/uploads/2018/09/Image-Coming-Soon.png')
        movieCard.appendChild(workingPoster);
        parentDiv.appendChild(movieCard);
    }

    if (theaterRating === 'G' ) {
        movieCard.setAttribute('class', 'mov-card ratedG')
    } else if (theaterRating === 'PG') {
        movieCard.setAttribute('class', 'mov-card ratedPG')
    } else if (theaterRating === 'PG-13') {
        movieCard.setAttribute('class', 'mov-card ratedPG13')
    } else if (theaterRating === 'R') {
        movieCard.setAttribute('class', 'mov-card ratedR')
    }
});



