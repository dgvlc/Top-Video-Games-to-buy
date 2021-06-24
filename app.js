const DOMAIN = 'https://www.giantbomb.com/api/reviews/';
const API_KEY = 'dafa211aea44c6db2e94a706b672a5af7ce923e6';
const BASE_URL = `${DOMAIN}?apikey=${API_KEY}&format=json`;



// const reviewUrl = 'https://www.giantbomb.com/api/reviews/?api_key=dafa211aea44c6db2e94a706b672a5af7ce923e6'
// const searchUrl = 'https://www.giantbomb.com/api/search/?api_key=dafa211aea44c6db2e94a706b672a5af7ce923e6'
 const baseUrl = 'http://www.giantbomb.com/api/game/3030-38207/?api_key=dafa211aea44c6db2e94a706b672a5af7ce923e6&format=jsonp&field_list=name,description'
const generate = document.querySelector('#list-generator')

const videoGamesStarter = async () => {
  try {

    //con
    const response = await axios.get(baseUrl)
    console.log(response)

  } catch (error) {
    console.log(error)
  }
}
videoGamesStarter()

// renderGames() {

// }

generate.addEventListener('click', (e) => {
  e.preventDefault()
  videoGamesStarter()
})

