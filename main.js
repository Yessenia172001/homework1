
const question = prompt('Сколько фильмов вы уже посмотрели?');
const numberOfFilms = question;
console.log(numberOfFilms); 

const personalMovieDB = {
    count: numberOfFilms,
    movies: {
        'lastFilm': 'lastFilmRate',
        'lastFilmSecond': 'lastFilmRateSecond', 
    },
    actors: {

    },
    genres: [],
    privat: false,
}

const lastFilm = prompt('Один из последних просмотренных фильмов?');
const lastFilmRate = prompt('На сколько оцените его?');

console.log(lastFilm);
console.log(lastFilmRate);

const lastFilmSecond = prompt('Один из последних просмотренных фильмов?');
const lastFilmRateSecond = prompt('На сколько оцениваете его?');

console.log(lastFilmSecond);
console.log(lastFilmRateSecond);
