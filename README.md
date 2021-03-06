## Projects
English team matchmaker
https://thedondotta.github.io/Project1/

## Project Description
The website allows you to choose two different english soccer teams and allows you to debate with your friends who you think will win. 

## API and Data Sample
http://app.sportsdataappi.com/
```
{
query: {
apikey: "a8db2bb0-22c5-11ec-9524-773a9f576272",
country_id: "42"
},
data: [
{
team_id: 849,
name: "Newcastle United",
short_code: "NEW",
common_name: "",
logo: "https://cdn.sportdataapi.com/images/soccer/teams/100/17.png",
country: {
country_id: 42,
name: "England",
country_code: "en",
continent: "Europe"
}
},
{
team_id: 850,
name: "Wolverhampton Wanderers",
short_code: "WOL",
common_name: "",
logo: "https://cdn.sportdataapi.com/images/soccer/teams/100/16.png",
country: {
country_id: 42,
name: "England",
country_code: "en",
continent: "Europe"
}
},
{
team_id: 2509,
name: "Liverpool FC",
short_code: "LFC",
common_name: "",
logo: "https://cdn.sportdataapi.com/images/soccer/teams/100/1.png",
country: {
country_id: 42,
name: "England",
country_code: "en",
continent: "Europe"
}
},
{
team_id: 2510,
name: "Norwich City",
short_code: "NOR",
common_name: "",
logo: "https://cdn.sportdataapi.com/images/soccer/teams/100/2.png",
country: {
country_id: 42,
name: "England",
country_code: "en",
continent: "Europe"
}
},
{
team_id: 2511,
name: "AFC Bournemouth",
short_code: "BRN",
common_name: "",
logo: "https://cdn.sportdataapi.com/images/soccer/teams/100/5.png",
country: {
country_id: 42,
name: "England",
country_code: "en",
continent: "Europe"
}

```

## Wireframes
https://whimsical.com/project1-9jmv2Ao3uZts6P5MbqnVaq
            
## MVP
- Find and integrate soccer team api 
- Render team api data to the page inside of my dropdown
- Layout my information using html and js
- Style the page with flexbox tools and css
- add media queries to help make design more responsive for mobile app

## Timeframes
| component | Estimated duration | actual duration |
|---------- |:----------: |:----------: |
| Pseudocode | 2hr |  1hr |
|HTML and js| 6hr | 5hr |
|adding buttons/event listeners | 3hr | 1hr |
|add/text | 1hr | 30min |
|flexbox | 3hr | 2hr |
|styling css | 3hr | 3hr |
|pulling correct data from api | 2hr | 5hr |
|styling media queries | 1hr | 30min |
total 100%

## Code Snippet
The most time I spent was on the array of teams that would be up against each other which is the first code below. The next problem that took up time was getting the api information accessable to get the image. The code in number 2 allowed me to do that. 
- 1.
```
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
```

- 2. part1
```
    .then((resJSON) => {
        console.log(resJSON);
        showTeamData(resJSON);
        resJSON.data.forEach((team) => {teamList.push(team)})
        

        })
```

- 2. part2
```
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
```




## Change Log
I ended up changing a lot. I planned on having the team images show up when selected and also wanted to make a tournament out of the teams selected. I had trouble pulling out the image of the selection made which changed how I wanted to the tournament. Also before that I planned on having the user to build out a starting 11 of players, but I could not get an api that would allow me to have the data to do that. 
