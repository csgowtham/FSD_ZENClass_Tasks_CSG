/*Write a constructor for the class Movie, 
which takes a String representing the title of the movie,
a String representing the studio, and a String representing the rating as its arguments, 
and sets the respective class properties to these values.*/

class Movie {
    constructor(title, studio, rating = "PG") {//The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    
    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}

/*Write a method getPG, which takes an array of base type Movie as its argument, 
and returns a new array of only those movies in the input array with a rating of "PG".
You may assume the input array is full of Movie instances. The returned array need not be full.*/


let movies = [
    new Movie("Inception", "Warner Bros.", "PG-13"),
    new Movie("Toy Story", "Pixar", "G"),
    new Movie("Jaws", "Universal Pictures", "PG"),
    new Movie("The Godfather", "Paramount Pictures", "R"),
    new Movie("Frozen", "Disney", "PG"),
];
let pgMovies = Movie.getPG(movies);


//Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
let casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
