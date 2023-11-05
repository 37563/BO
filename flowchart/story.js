const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function start_game() {
  // Initial question
  rl.question('What is your name? ', function(naam) {
    console.log(`Welcome, ${naam}! The game begins. You will receive input (0, 1, 2) in each round to take actions.`);
    console.log('You stand at the crossroads of a mystical forest. Which path do you choose? [0] Take the left path, [1] Take the right path.');

    // First choice
    rl.question('Which path do you choose? [0] Left path, [1] Right path? ', function(keuze_1) {
      if (keuze_1 == 0) {
        // Left path
        console.log('You take the left path and find a hidden cave filled with glowing mushrooms. What will you do? [0] Investigate the mushrooms, [1] Continue on your path.');

        // Second choice
        rl.question('What will you do? [0] Investigate the mushrooms, [1] Continue on your path? ', function(keuze_2) {
          if (keuze_2 == 0) {
            // Investigate mushrooms
            console.log('You investigate the mushrooms, and to your surprise, you discover a glowing amulet. What do you do next? [0] Take the amulet with you, [1] Leave the amulet and continue your journey.');

            // Third choice
            rl.question('What do you do next? [0] Take the amulet with you, [1] Leave the amulet and continue your journey? ', function(keuze_3) {
              if (keuze_3 == 0) {
                // Take the amulet
                console.log('You take the amulet with you, and it grants you immense power. However, this power comes at a price. What will you do with this newfound strength? [0] Use your power for good, [1] Embrace your newfound strength and conquer the world.');

                // Fourth choice
                rl.question('What will you do with your newfound strength? [0] Use your power for good, [1] Embrace your newfound strength and conquer the world? ', function(keuze_4) {
                  if (keuze_4 == 0) {
                    // Use your power for good
                    console.log('You use your power for good, becoming a protector of the weak and a symbol of hope. Your legacy inspires future generations.');
                    console.log('Congratulations, you have completed the story with a positive ending!');
                    rl.close();
                  } else if (keuze_4 == 1) {
                    // Embrace your newfound strength
                    console.log('You embrace your newfound strength and conquer the world, but your reign is marked by fear and tyranny. Your legacy is one of power, not love.');
                    console.log('You have completed the story with a different ending.');
                    rl.close();
                  } else {
                    console.log('Invalid input. The game ends.');
                    rl.close();
                  }
                });
              } else if (keuze_3 == 1) {
                // Leave the amulet
                console.log('You decide to leave the amulet behind and continue your journey. The amulet\'s power is lost, waiting for the next seeker.');
                console.log('You have completed the story with a different ending.');
                rl.close();
              } else {
                console.log('Invalid input. The game ends.');
                rl.close();
              }
            });
          } else if (keuze_2 == 1) {
            // Continue on your path
            console.log('You continue on your path and come across a nice house with plenty of food inside. What will you do? [0] Continue the adventure, [1] Stay in the house.');

            // Third choice
            rl.question('What will you do? [0] Continue the adventure, [1] Stay in the house? ', function(keuze_3) {
              if (keuze_3 == 0) {
                // Continue the adventure
                console.log('You decide to continue your adventure and come across a magical portal. What do you do? [0] Enter the portal, [1] Ignore the portal.');

                // Fourth choice
                rl.question('What will you do with the magical portal? [0] Enter the portal, [1] Ignore the portal? ', function(keuze_4) {
                  if (keuze_4 == 0) {
                    // Enter the portal
                    console.log('You enter the portal and find yourself in a different world filled with incredible wonders. You have a chance to explore this new world and discover even more adventures.');
                    console.log('Congratulations, you have completed the story with an exciting journey!');
                    rl.close();
                  } else if (keuze_4 == 1) {
                    // Ignore the portal
                    console.log('You decide to ignore the portal and continue your journey in the forest. You can add more game logic here.');
                    rl.close();
                  } else {
                    console.log('Invalid input. The game ends.');
                    rl.close();
                  }
                });
              } else if (keuze_3 == 1) {
                // Stay in the house
                console.log('You decide to stay in the house and find a hidden treasure. What will you do with the treasure? [0] Take the treasure with you, [1] Leave the treasure behind.');

                // Fourth choice
                rl.question('What will you do with the hidden treasure? [0] Take the treasure with you, [1] Leave the treasure behind? ', function(keuze_4) {
                  if (keuze_4 == 0) {
                    // Take the treasure
                    console.log('You take the treasure with you and become rich beyond your wildest dreams. Your journey leads you to a life of luxury and adventure.');
                    console.log('Congratulations, you have completed the story with a prosperous ending!');
                    rl.close();
                  } else if (keuze_4 == 1) {
                    // Leave the treasure
                    console.log('You decide to leave the treasure behind, content with the simple life. Your journey continues with a sense of inner peace.');
                    console.log('You have completed the story with a different ending.');
                    rl.close();
                  } else {
                    console.log('Invalid input. The game ends.');
                    rl.close();
                  }
                });
              } else {
                console.log('Invalid input. The game ends.');
                rl.close();
              }
            });
          } else {
            console.log('Invalid input. The game ends.');
            rl.close();
          }
        });
      } else if (keuze_1 == 1) {
        // Right path
        console.log('You chose the right path, leading you to a hidden village. What will you do in the village? [0] Explore the village, [1] Continue your journey.');

        // Second choice
        rl.question('What will you do in the village? [0] Explore the village, [1] Continue your journey? ', function(keuze_2) {
          if (keuze_2 == 0) {
            // Explore the village
            console.log('You explore the village and make new friends. Whats your next move? [0] Help the village, [1] Leave the village and continue your journey.');

            // Third choice
            rl.question('What will you do in the village? [0] Help the village, [1] Leave the village and continue your journey? ', function(keuze_3) {
              if (keuze_3 == 0) {
                // Help the village
                console.log('You decide to help the village, and your actions bring prosperity to the people. You find a sense of belonging and purpose.');
                console.log('Congratulations, you have completed the story with a heartwarming ending!');
                rl.close();
              } else if (keuze_3 == 1) {
                // Leave the village
                console.log('You leave the village behind and continue your journey. What adventures await you on the road ahead?');
                console.log('You have completed the story with a different ending.');
                rl.close();
              } else {
                console.log('Invalid input. The game ends.');
                rl.close();
              }
            });
          } else if (keuze_2 == 1) {
            // Continue your journey
            console.log('You decide to continue your journey and face more challenges. What will you do next? [0] Face a dragon, [1] Solve a riddle.');

            // Third choice
            rl.question('What will you do next? [0] Face a dragon, [1] Solve a riddle? ', function(keuze_3) {
              if (keuze_3 == 0) {
                // Face a dragon
                console.log('You face a fearsome dragon in a battle of wits and bravery. Your victory earns you the title of a legendary dragon-slayer.');
                console.log('Congratulations, you have completed the story with an epic ending!');
                rl.close();
              } else if (keuze_3 == 1) {
                // Solve a riddle
                console.log('You choose to solve a riddle and impress a wise old wizard. Your wisdom is recognized, and you become a respected scholar in the realm.');
                console.log('You have completed the story with a different ending.');
                rl.close();
              } else {
                console.log('Invalid input. The game ends.');
                rl.close();
              }
            });
          } else {
            console.log('Invalid input. The game ends.');
            rl.close();
          }
        });
      } else {
        console.log('Invalid input. The game ends.');
        rl.close();
      }
    });
  });
}

// Start the game
start_game();

