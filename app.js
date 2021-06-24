
const api = '?api_key=dafa211aea44c6db2e94a706b672a5af7ce923e6&format=json'
 const reviewUrl = 'https://floating-escarpment-65266.herokuapp.com/www.giantbomb.com/api/reviews/?api_key=dafa211aea44c6db2e94a706b672a5af7ce923e6&format=json'
// const searchUrl = 'https://floating-escarpment-65266.herokuapp.com/www.giantbomb.com/api/search/?api_key=dafa211aea44c6db2e94a706b672a5af7ce923e6&format=json'
 const baseUrl = 'https://floating-escarpment-65266.herokuapp.com/www.giantbomb.com/api/games/?api_key=dafa211aea44c6db2e94a706b672a5af7ce923e6&format=json'

const container = document.querySelector('.container-list')

const videoGamesStarter = async () => {
  try {

    const response = await axios.get(reviewUrl)
    //console.log(response.data.results)
    const data = response.data.results
    
    for (let i = 0; i < 50; i++)
    {
      const score = response.data.results[i].score
      if (score === 5 ) {
        renderGames(data[i])
        //console.log(data[i])
      }
        }

  } catch (error) {
    console.log(error)
  }
}

async function renderGames(results)  {
  console.log(results.game.api_detail_url)
  const gameUrl = results.game.api_detail_url
  const imageGet = `https://floating-escarpment-65266.herokuapp.com/${gameUrl}${api}`
  let currentGame = {
   
 }
 try {
  const response = await axios.get(imageGet)
  currentGame = response.data.results
   console.log(currentGame)
   let gameData = `
  <h1>Title: ${results.game.name}</h1>
  <img src="${currentGame.image.icon_url}"/>
  `
  container.insertAdjacentHTML('beforeend', gameData)
  return gameData


} catch (error) {
  console.log(error)
}  
  }

// generate.addEventListener('click', (e) => {
//   e.preventDefault()
//   
//   videoGamesStarter()
// })

document.getElementById("list-generator").addEventListener('click', (e) => {
 e.preventDefault()
  videoGamesStarter()
})

