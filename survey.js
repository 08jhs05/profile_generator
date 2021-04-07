const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let response = {name: "", activity: "", music: "", favMeal: "", favEat: "", favSport: "", superpower: ""};

rl.question('What\'s your name? Nicknames are also acceptable.  ', (answer) => {
  response.name = answer;
  rl.question('What\'s an activity you like doing?  ', (answer) => {
    response.activity = answer;
    rl.question('What do you listen to while doing that?  ', (answer) => {
      response.music = answer;
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)  ', (answer) => {
        response.favMeal = answer;
        rl.question('What\'s your favourite thing to eat for that meal?  ', (answer) => {
          response.favEat = answer;
          rl.question('Which sport is your absolute favourite?  ', (answer) => {
            response.favSport = answer;
            rl.question('What is your superpower?  ', (answer) => {
              response.superpower = answer;
              console.log(`my name: ${response.name}\nmy fav activity: ${response.activity}\nmy fav music: ${response.music}\nmy fav meal time: ${response.favMeal}\nmy fav thing to eat: ${response.favEat}\nmy fav sport: ${response.favSport}\nmy superpower: ${response.superpower}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});

