/***** Deliverable 1 *****/
const header = document.querySelector("#header")

console.log(`Here's your header: ${header}`)


/***** Deliverable 2 *****/
header.style.color = "red"

/***** Deliverable 3 *****/
console.log("PLAYERS array looks like this:", PLAYERS)

const playersDiv = document.querySelector(".player-container")

for (const player of PLAYERS) {
    newPlayerDiv = document.createElement("div")
    newPlayerDiv.classList.add("player")
    newPlayerDiv.setAttribute("date-number", player.number.toString(10))
    newPlayerDiv.innerHTML = `
        <h3> ${player.name} (<em>${player.nickname}</em>) </h3>
        <img src="${player.photo}" alt="${player.name}">
    `
    playersDiv.append(newPlayerDiv)
    //console.log(player)
    
    
}

const wrongPlayer = document.querySelector("div[date-number='7']")
wrongPlayer.remove()

// for(i = 0; i<PLAYERS.length; i++) {
//     const playerNum = PLAYERS[i].number.toString(10)
//     const playerName = PLAYERS[i].name
//     const playerNickName = PLAYERS[i].nickname
//     const playerImage = PLAYERS[i].photo
// }



{/* <div class="player" data-number="(Player Number)">
  <h3>
    {player name} (<em>{player nickname}</em>)
  </h3>
  <img src="{player image}" alt="{player name}">
</div> */}


    

/***** Deliverable 4 *****/