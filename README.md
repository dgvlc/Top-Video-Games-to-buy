# Project Overview

## Project Name

Top Video Games To Buy 

## Project Description

My project would be about creating a website where you can get a recomendation of the top video games by using their game rating and get more a bit of info about each game and based your decision on that.

## API and Data Sample

The API that's going to be used is from giant bomb and the specific info that I need from it is the Title, image, game review's score, brief description and genre.
https://www.giantbomb.com/api/documentation/#toc-0-16 

```
"dlc": null,
            "dlc_name": null,
            "game": {
                "api_detail_url": "https://www.giantbomb.com/api/game/3030-51742/",
                "id": 51742,
                "name": "Rez Infinite",
                "site_detail_url": "https://www.giantbomb.com/rez-infinite/3030-51742/"
            },
            "guid": "1900-799",
            "id": 799,
            "publish_date": "2020-10-12 22:02:00",
            "release": {
                "api_detail_url": "https://www.giantbomb.com/api/release/3050-175591/",
                "id": 175591,
                "name": "Rez Infinite"
            },
            "reviewer": "Jeff",
            "score": 5,
            "site_detail_url": "https://www.giantbomb.com/reviews/rez-infinite-review/1900-799/",
            "platforms": "Oculus Quest"
        },
        
       
```

## Wireframes
https://wireframe.cc/pro/pp/b2396ea81452387
                                                                                             
![Layout](https://user-images.githubusercontent.com/38265711/122980565-cc247b80-d366-11eb-939f-27d2e79d3f79.png)                                                                                       

### MVP/PostMVP

#### MVP 

- use external api to get video game title 
- use api to get score and get the top ten 
- render video games image                                                                                             
- render details about games                                                                                                                                                                                      

#### PostMVP  

- style top video game list
- put starting image  
- seperate by genre 
- generate random top ten list                                                                                              

## Project Schedule


|  Day | Deliverable | Status
|---|---| ---|
|June 21| Prompt / Wireframes / Priority Matrix / Timeframes | Incomplete
|June 22| Project Approval / Core Application Structure (HTML, CSS, etc.) | Incomplete
|June 23| Pseudocode / actual code | Incomplete
|June 24| Initial Clickable Model  | Incomplete
|June 25| MVP | Incomplete
|June 28| Presentations | Incomplete

## Priority Matrix

https://wireframe.cc/pro/pp/60e2d4929452532

![Graph](https://user-images.githubusercontent.com/38265711/122980721-ff670a80-d366-11eb-813e-c2e4b2b0d14a.png)
                                                                                             
                                                                                             

## Timeframes


| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| construct frame| H | 4hrs| 4hrs | 4.5hrs |
| Working with API | H | 3hrs| 4hrs | 5hrs |
| get top ten | M | 5hrs | 5hrs | 5hrs |
| render image | M |  5hrs | 5hrs | 4.5hrs |
| get the review score | H |  5hrs | 3hrs | 3hrs|
| create page with top list | H |  5hrs | 5hrs| 5hrs |
| render details | M |  5hrs | 3hrs | 3.5hrs |
| style top list | M |  4hrs | 5hrs | 5hrs |
| get brief descripion of game| L |  4hrs | 3hrs | 3.5hrs |
| Total | H | 40hrs| 40hrs | 39hrs |

## Code Snippet 

```
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


```

## Change Log
 Had to move away from selecting from genre.
