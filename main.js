const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {  
    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres: [],
    privat: false,
    }

// const a = prompt('Один из последних просмотренных фильмов?'),
//     b = +prompt('На сколько оцениваете его?'),
//     c = prompt('Один из последних просмотренных фильмов?'),
//     d = +prompt('На сколько оцениваете его?');

// personalMovieDB.movies[a] = b,
// personalMovieDB.movies[c] = d;

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?'),
    b = +prompt('На сколько оцениваете его?');
        if (a !== null && b !== null && a !== '' && b !== '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            i--;
            console.log('Error');
        }
    }

    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка')
    }



console.log(personalMovieDB)


