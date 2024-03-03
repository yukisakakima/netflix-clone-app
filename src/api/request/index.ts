const API_KEY = "75bd301ea6d558d4e14b98545133692c"; // TMDBのAPIKeyを入れる

export const requests = {
  feachTrending: `/trending/all/week?api_key=${API_KEY}&language=en-us`,
  feachNetflixOriginals: `/discover/movie?api_key=${API_KEY}&with_networks=213`,
  feactTopRated: `/discover/movie?api_key=${API_KEY}&language=en-us`,
  feactActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  feactComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  feactHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  feactRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  feactDocumentMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};
