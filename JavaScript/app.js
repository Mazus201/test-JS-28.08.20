let numberOfFilms;

while (numberOfFilms == null || numberOfFilms == "" || numberOfFilms == " " || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('How many films do you watch?', '');
}

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let countFilmMurk = 0;
let FavorGener = 0;

addMurkFilm();
detectFavorGener();
detectMovieLvl();
showMyDB(personalMovieDB.privat);

function addMurkFilm() {
    countFilmMurk =  +prompt('How many films do you want murk?', '');
    for (let i = 0; i < countFilmMurk; i++) {
        let lustFilm = prompt('lust one film you saw?', '');
        if (lustFilm === "" || lustFilm === " " || lustFilm.length > 50 || lustFilm == null) {
            alert('Camon! :(');
            i--;
            continue;
        }
        let murkFilm = prompt('Nice! How do you like this film? (1-10)', '10');
        if (murkFilm === "" || murkFilm === " " || murkFilm.length > 2 || murkFilm == null || 
        isNaN(murkFilm) || murkFilm < 1 || murkFilm > 10) {
            alert('Camon! :(');
            i--;
            continue;
        }
        personalMovieDB.movies[lustFilm] = murkFilm;
    }
}

function detectFavorGener() {
    for (let i = 0; i < 3; i++) {
        FavorGener = prompt(`What is your favorite gener ${i + 1}?`, '')
        personalMovieDB.genres[i] = FavorGener;
    }
}

function detectMovieLvl() {
    if (personalMovieDB.count < 10) {
        alert('You are beginner in the movie')
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        alert('You are middle');
    } else if (personalMovieDB.count > 30) {
        alert('You are senior');
    } else {
        alert('Error');
    }
}

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
