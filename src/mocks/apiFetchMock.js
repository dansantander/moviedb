const apiFetch = (() => {
  const movieFetch = () => {
    const url = 'http://www.omdbapi.com/?apikey=1f69237e&s=batman';
    return new Promise(resolve => fetch(url)
      .then(p => p.json().then(data => resolve(data))));
  };

  return {
    movieFetch,
  };
})();

export default apiFetch;
