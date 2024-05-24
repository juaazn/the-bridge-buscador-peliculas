
const insert = document.querySelector('#insert')

const url = 'https://api.themoviedb.org/3/discover/movie'

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkY2UwY2IyMWQ1YzU0N2JmYmMwMTUwZjE3Y2JiNWZjNiIsInN1YiI6IjY2NGUyN2YwNzM5MGI3NDViMDQyOTM1NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xHtvw6IMTwTdn7fnzxI2Vgt5oFLbuiHVE3ffP7suFec'
  }
}

fetch(url, options)
  .then(response => response.json())
  .then(response => {
    const { results } = response

    results.forEach(element => {
      insert.innerHTML += `
        <h3>${element.title}</h3>
        <img src="https://api.themoviedb.org/3/discover/movie/results${element.backdrop_path}" alt="${element.title}"/>
        <p>${element.overview}
      `
      console.log(`<img src="https://api.themoviedb.org/3/discover/movie/results${element.backdrop_path}" alt="Imagen"/>`)
    })
  })
  .catch(err => console.error(err))
