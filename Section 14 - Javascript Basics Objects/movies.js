var movies = [
    {
        title: "Frozen",
        rating: 4.5,
        hasWatched: false
    },
    {
        title: "Mad Max Fury Road",
        rating: 5,
        hasWatched: true
    }
];

movies.forEach(movie => {
    if (movie.hasWatched){
        console.log("You have watched " + "\"" + movie.title + "\" - " + movie.rating + " stars");
    } else {
        console.log("You have not watched " + "\"" + movie.title + "\" - " + movie.rating + " stars");
    }
});