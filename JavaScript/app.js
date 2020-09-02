let numberOfFilms;

let countFilmMurk = 0;
let FavorGener = 0;

let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        while (this.count == null || this.count == "" || this.count == " " || isNaN(this.count)) {
            this.count = +prompt('How many films do you watch?', '');
        }
    },
    addMurkFilm: function() {
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
            this.movies[lustFilm] = murkFilm;
        }
    },
    detectMovieLvl: function() {
        if (this.count < 10) {
            alert('You are beginner in the movie')
        } else if (this.count > 10 && this.count < 30) {
            alert('You are middle');
        } else if (this.count > 30) {
            alert('You are senior');
        } else {
            alert('Error');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(this);
        }
    },
    detectFavorGener: function() {
        for (let i = 0; i < 3; i++) {
            FavorGener = prompt(`What is your favorite gener ${i + 1}?`, '')
            this.genres[i] = FavorGener;
        }

        this.genres.forEach((item, i) => {
            console.log(`Favorite gener ${i + 1} is a ${item}!`);
        });
    }
};

 