
const api = '?api_key=dafa211aea44c6db2e94a706b672a5af7ce923e6&format=json'
 const reviewUrl = 'https://floating-escarpment-65266.herokuapp.com/www.giantbomb.com/api/reviews/?api_key=dafa211aea44c6db2e94a706b672a5af7ce923e6&format=json'
// const searchUrl = 'https://floating-escarpment-65266.herokuapp.com/www.giantbomb.com/api/search/?api_key=dafa211aea44c6db2e94a706b672a5af7ce923e6&format=json'
 const baseUrl = 'https://floating-escarpment-65266.herokuapp.com/www.giantbomb.com/api/games/?api_key=dafa211aea44c6db2e94a706b672a5af7ce923e6&format=json'

const containerList = document.querySelector(".container-list")
const container = document.querySelectorAll('.container')
const holders = document.querySelectorAll('.holder')
const nameDiv = document.querySelectorAll('.name-header')
const descDiv = document.querySelectorAll('.desc-footer')

const videoGamesStarter = async () => {
  try {

    const response = await axios.get(reviewUrl)
    // console.log(response.data.results)
    const data = response.data.results
    
  
      let sortArray = data.sort((a, b) => b.score - a.score).slice(0, 10)
     // console.log(sortArray)
    for (i = 0; i < sortArray.length; i++) {
      renderGames(sortArray[i], container[i])
    }

  } catch (error) {
    console.log(error)
  }
}

async function renderGames(game, square) {
  console.log(square)
  //console.log(results.game.api_detail_url)
  const gameUrl = game.game.api_detail_url
  const imageGet = `https://floating-escarpment-65266.herokuapp.com/${gameUrl}${api}`
  let currentGame = {
   
  }
  try {
    const response = await axios.get(imageGet)
    currentGame = response.data.results
    console.log('game', currentGame)

    // nameDiv.innerText = currentGame.name
    // container.style.backgroundImage = 'url(' + currentGame.image.icon_url + ')'
    
    let gameData = `
  <h1>Title: ${currentGame.name}</h1>
  <img src="${currentGame.image.icon_url}" class="game-image"/>

  <h3>Genre: ${currentGame.genres[0].name}</h3>
  `
    square.insertAdjacentHTML('beforeend', gameData)

  

} catch (error) {
  console.log(error)
}  
 }
  
function removeMystery() {
  for (let i = 0; i < container.length; i++)
  {
    holders[i].remove()
    }
}

document.getElementById("list-generator").addEventListener('click', (e) => {
  e.preventDefault()
  removeMystery()
  videoGamesStarter()
})

// const imgClick = renderGames.gameData

// imgClick.addEventListener('click', (e) => {
//   e.preventDefault()

// })

