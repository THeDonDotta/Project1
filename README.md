## Projects
English team matchmaker
https://thedondotta.github.io/Project1/

## Project Description
The website allows you to choose two different english soccer teams and allows you to debate with your friends who you think will win. 

## API and Data Sample
http://app.sportsdataappi.com/

## Wireframes
https://whimsical.com/project1-9jmv2Ao3uZts6P5MbqnVaq
            
## MVP
-Find and integrate soccer team api 
-Render team api data to the page inside of my dropdown
-Layout my information using html and js
-Style the page with flexbox tools and css
-add media queries to help make design more responsive for mobile app

## Timeframes
-Pseudocode: estimated-3%  actual-3%
-HTML and js: estimated-20%  actual-15%
-adding buttons/event listeners: estimated-15% actual-10%
-add/text: estimated-7%  actual-7%
-flexbox: estimated-15%  actual-12%
-styling css: estimated-20% actual-13%
-pulling correct data from api: estimated-15%  actual-35%
-styling media queries: estimated-5% actual-5%
-total 100%

## Code Snippet
The most time I spent was on the array of teams that would be up against each other which is the first code below. The next problem that took up time was getting the api information accessable to get the image. The code in number 2 allowed me to do that. 
-1.
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

-2.part1
```
    .then((resJSON) => {
        console.log(resJSON);
        showTeamData(resJSON);
        resJSON.data.forEach((team) => {teamList.push(team)})
        

        })
```

-2.part2
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




Change Log
I ended up changing a lot. I planned on having the team images show up when selected and also wanted to make a tournament out of the teams selected. I had trouble pulling out the image of the selection made which changed how I wanted to the tournament. Also before that I planned on having the user to build out a starting 11 of players, but I could not get an api that would allow me to have the data to do that. 
