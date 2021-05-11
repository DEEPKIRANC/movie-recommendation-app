const API_KEY=process.env.REACT_APP_SECRET_KEY;

export default{
    
    fetchTrending:`/trending/movie/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchMysteryMovies:`/discover/movie?api_key=${API_KEY}&with_genres=9648`,
    fetchSciFiMovies:`/discover/movie?api_key=${API_KEY}&with_genres=878`
}