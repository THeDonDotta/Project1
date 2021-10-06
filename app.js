const DOMAIN = 'http://app.sportsdataappi.com/';
const API_KEY = '5233420936673633'



fetch("https://app.sportdataapi.com/api/v1/soccer/teams?apikey=a8db2bb0-22c5-11ec-9524-773a9f576272&country_id=42"
)
    .then((res) => {
        return res.json();
    })
    .then((resJSON) => {
        console.log(resJSON);
        showTeamData(resJSON);
        somethingNew(resJSON);

        })
        .catch((error) => {
            console.log(`ERROR: ${error}`);
        });



const showTeamData = (teamData) => {

        for(let i= 0; i < 292; i++) {

        const nameTeam = document.createElement('option')
        nameTeam.innerText= teamData.data[i].name;
        document.querySelector('#select').appendChild(nameTeam)

        const logo = document.createElement('img')
        logo.src=teamData.data[i].logo
        // let finalTeam =logo;
        // document.querySelector('.imgTeams').append(logo) 
    }  
    }  


const somethingNew =(logos) => {
    for(let i=0; i<292; i++) {
    // const logo = document.createElement('img')
    let logo=[];
    logo.src=logos.data[i].logo
        
        
} 
}      


let matchTeams = [];

let teamOne ='';
let teamTwo = '';

const newTeam = (team) => {

    let userSelect = document.getElementById('select').value;
    document.getElementById('matchup').innerHTML =" you have chosen " + userSelect;  
    // const newTeam = matchTeams.push(userSelect);
    
    
    console.log(matchTeams);
    matchTeams.push(userSelect);
    //document.querySelector('.games').append(matchTeams);
    // matchTeams = [];
    teamOne = matchTeams[0];
    teamTwo = matchTeams[1];
    document.getElementById('teams').innerHTML = teamOne+ " vs " + teamTwo;
    return teamOne, teamTwo;


}
const teammy;
const awayWinner = () => {
    document.getElementById('result').innerHTML='You chose the away team to win';
}

const homeWinner = () => {    
    document.getElementById('result').innerHTML = 'you chose the home team to win';
}


// const imgTeams = (imgData) => {
//     if(teamOne === data[imgData].logo) {
//     for(let i= 0; i < 292; i++) {

//     const logo = document.createElement('img')
//     logo.src=imgData.data[i].logo

//     document.querySelector('.imgTeams').append(logo) 
//     }
// }  
// } 











// const teamImg = (images) => {
//     const logo = document.createElement('img')
//     logo.src=teamData.data[images].logo
//     document.querySelector('#teams').append(logo) 
//     return images;
// }


// const homeTeam = document.querySelector('.home');
// let homeWin ;
// homeTeam.addEventListener('click', () => {
//     homeWin = homeWin + 1;
    
// })


















