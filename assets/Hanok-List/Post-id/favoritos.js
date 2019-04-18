(function () {
  const BASE_URL = 'https://uelisson-bs.github.io'
  const INDEX_URL = BASE_URL + '/Hanok-Project/bet/movies.json'
  const INDEX_URL2 = BASE_URL + '/Hanok-Project/bet/'
  const POSTER_URL = 'https://'
  const data = []
  const dataPanel = document.getElementById('data-panel')
  const data = JSON.parse(localStorage.getItem('favoriteMovies')) || []

  displayDataList(data)

  dataPanel.addEventListener('click', (event) => {
    if (event.target.matches('.btn-show-movie')) {
      showMovie(event.target.dataset.id)
    } else if (event.target.matches('.btn-remove-favorite')) {
      removeFavoriteItem(event.target.dataset.id)
    }
  })

  function displayDataList(data) {
    let htmlContent = ''
    data.forEach(function (item, index) {
      htmlContent += `
        <div class="col-sm-3">
          <div class="card mb-2">
            <img class="card-img-top " src="${POSTER_URL}${item.image}" alt="Card image cap">
            <div class="card-body movie-item-body">
              <h6 class="card-title">${item.title}</h5>
            </div>
            <div class="card-footer">
              <button class="btn btn-primary btn-show-movie" data-toggle="modal" data-target="#show-movie-modal" data-id="${item.id}">More</button>
              <button class="btn btn-danger btn-remove-favorite" data-id="${item.id}">X</button>
            </div>
          </div>
        </div>
      `
    })
    dataPanel.innerHTML = htmlContent
  }

  function showMovie(id) {
    // get elements
    const modalTitle = document.getElementById('show-movie-title')
    const modalImage = document.getElementById('show-movie-image')
    const modalDate = document.getElementById('show-movie-date')
	const modalano = document.getElementById('show-movie-director')
    const modalDescription = document.getElementById('show-movie-description')

    // set request url
    const url = INDEX_URL2 + id + '.json'
    console.log(url)

    // send request to show api
    axios.get(url).then(response => {
      const data = response.data.results
      console.log(data)

      // insert data into modal ui
      modalTitle.textContent = data.title
      modalImage.innerHTML = `<img src="${POSTER_URL}${data.image}" class="img-fluid" alt="Responsive image">`
      modalDate.textContent = `release at : ${data.release_date}`
	  modalano.innerHTML = `${data.director}`
      modalDescription.textContent = `${data.description}`
    })
  }

  function removeFavoriteItem(id) {
    // find movie by id
    const index = data.findIndex(item => item.id === Number(id))
    if (index === -1) return

    // removie movie and update localStorage
    data.splice(index, 1)
    localStorage.setItem('favoriteMovies', JSON.stringify(data))

    // repaint dataList
    displayDataList(data)
  }
})()
