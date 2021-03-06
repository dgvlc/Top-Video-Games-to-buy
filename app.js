
 const api = '?api_key=dafa211aea44c6db2e94a706b672a5af7ce923e6&format=json'
 const reviewUrl = 'https://floating-escarpment-65266.herokuapp.com/www.giantbomb.com/api/reviews/?api_key=dafa211aea44c6db2e94a706b672a5af7ce923e6&format=json'
 const baseUrl = 'https://floating-escarpment-65266.herokuapp.com/www.giantbomb.com/api/games/?api_key=dafa211aea44c6db2e94a706b672a5af7ce923e6&format=json'

const containerList = document.querySelector(".container-list")
const container = document.querySelectorAll('.container')
const holders = document.querySelectorAll('.holder')


const videoGamesStarter = async () => {
  try {

    const response = await axios.get(reviewUrl)
    // console.log(response.data.results)
    const data = response.data.results
    
  // this lets you sort the games and it picks only the ones that scored 5 
      let sortArray = data.sort((a, b) => b.score - a.score).slice(0, 10)
     // console.log(sortArray)
    for (i = 0; i < sortArray.length; i++) {
      renderGames(sortArray[i], container[i])
    }

  } catch (error) {
    console.log(error)
  }
}
//this lets you render the game info by asking another api to get the data
async function renderGames(game, square) {
 // console.log(square)
  //console.log(results.game.api_detail_url)
  const gameUrl = game.game.api_detail_url
  const imageGet = `https://floating-escarpment-65266.herokuapp.com/${gameUrl}${api}`
  let currentGame = {
   
  }
  try {
    const response = await axios.get(imageGet)
    currentGame = response.data.results
    //console.log('game', currentGame)
    // this creates the elements to display the info
    let gameData = `
  <h1 id="game-title" >${currentGame.name}</h1>
  <img src="${currentGame.image.original_url}" class="game-image"/>
  <h3>Genre: ${currentGame.genres[0].name}</h3>
  `
    square.insertAdjacentHTML('beforeend', gameData)

    const descP = document.createElement('p')
    descP.classList.add('description')
    descP.textContent = currentGame.deck
    square.append(descP)

  

} catch (error) {
  console.log(error)
}  
}
 //this removes the initial containers for the games 
function removeMystery() {
  for (let i = 0; i < container.length; i++)
  {
    holders[i].remove()
    }
}
//this makes the button clicklabe to get the info, remove initial containers.
document.getElementById("list-generator").addEventListener('click', (e) => {
  e.preventDefault()
  removeMystery()
  videoGamesStarter()
})




