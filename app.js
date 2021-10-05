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

        })
        .catch((error) => {
            console.log(`ERROR: ${error}`);
        });



const showTeamData = (teamData) => {

        for(let i= 0; i < 292; i++) {

            console.log(teamData[i]);
        const nameTeam = document.createElement('option')
        nameTeam.innerText= teamData.data[i].name;
        document.querySelector('#select').appendChild(nameTeam)

        const logo = document.createElement('img')
        logo.src=teamData.data[i].logo
        document.querySelector('.new').append(logo)  
        
        
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

const homeTeam = document.querySelector('.home');
let homeWin = 0;
homeTeam.addEventListener('click', () => {
    homeWin = homeWin + 1;
    
})
const awayTeam = document.querySelector('.away');
let awayWin = 0;
awayTeam.addEventListener('click', () => {
    awayWin = awayWin + 1;
    
})

document.getElementById('result').innerHTML = 'They won!!'






















