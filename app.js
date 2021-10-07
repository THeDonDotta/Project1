const DOMAIN = 'http://app.sportsdataappi.com/';
const API_KEY = '5233420936673633'

let teamList = [];

fetch("https://app.sportdataapi.com/api/v1/soccer/teams?apikey=a8db2bb0-22c5-11ec-9524-773a9f576272&country_id=42"
)
    .then((res) => {
        return res.json();
    })
    .then((resJSON) => {
        console.log(resJSON);
        showTeamData(resJSON);
        resJSON.data.forEach((team) => {teamList.push(team)})
        

        })
        .catch((error) => {
            console.log(`ERROR: ${error}`);
        });



const showTeamData = (teamData) => {

        for(let i= 0; i < 292; i++) {

        const nameTeam = document.createElement('option')
        nameTeam.innerText= teamData.data[i].name;
        document.querySelector('#select').appendChild(nameTeam)


    }  
    }        


let matchTeams = [];

let teamOne ='';
let teamTwo = '';

const newTeam = (team) => {

    let userSelect = document.getElementById('select').value;
    document.getElementById('matchup').innerHTML =" you have chosen " + userSelect;  
    

    
    console.log(matchTeams);
    matchTeams.push(userSelect);

    teamOne = matchTeams[0];
    teamTwo = matchTeams[1];
    document.getElementById('teams').innerHTML = teamOne+ " vs " + teamTwo;
    if(matchTeams.length ===1){
    const logo = document.createElement('img')

    const choice = teamList.find(item => teamOne === item.name) 
    console.log(choice)
    logo.src=choice.logo;
    
    document.querySelector('#teamImg').appendChild(logo)
}
    
    const logo2 = document.createElement('img')
    
    const choice2 = teamList.find(item => teamTwo === item.name) 
    console.log(choice2)
    logo2.src=choice2.logo;

    document.querySelector('#teamImg').appendChild(logo2)


    

}

const awayWinner = () => {
    document.getElementById('result').innerHTML='You chose the away team to win';
}

const homeWinner = () => {    
    document.getElementById('result').innerHTML = 'you chose the home team to win';
}


















