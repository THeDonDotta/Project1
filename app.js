const DOMAIN = 'http://app.sportsdataappi.com/';
const API_KEY = '5233420936673633'

const btn = document.getElementsByClassName('team-data')

    
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
        document.querySelector('.team-data').appendChild(nameTeam)

        const logo = document.createElement('img')
        logo.src=teamData.data[i].logo
        document.querySelector('.team-data').append(logo)  
        }
    }   

let selection = document.querySelector('select');
let result = document.querySelector('.matchup');

selection.addEventListener('change',() => {
    result.innerText = selection.options[selection.selectedIndex].text;
    const result1= document.createElement('h2');
    document.querySelector('.matchup').appendChild(result1)
    

})




