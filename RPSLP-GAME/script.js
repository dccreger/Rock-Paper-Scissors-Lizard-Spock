var stats = {
  wins: 0,
  losses: 0,
  ties: 0,
};

alert("Hello Sheldon...");

var playAgain = confirm("...Would you like to play a game?");
console.log(playAgain);

do {
  if (playAgain) var userEntry;
  var isValidEntry = false;

  while (!isValidEntry) {
    userEntry = prompt(
      "Please choose Rock, Paper, Scissors, Lizard, Spock. *Hint... Big Bang Theory"
    );

    var allowedEntry = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
    isValidEntry = allowedEntry.includes(userEntry);

    if (!isValidEntry) {
      alert(
        "Invalid choice. Please choose Rock, Paper, Scissors, Lizard, or Spock."
      );
    }
  }

  var cpuEntryIndex = Math.floor(Math.random() * allowedEntry.length);
  var cpuEntry = allowedEntry[cpuEntryIndex];

  console.log("USER chose:" + userEntry);
  console.log("CPU chose:" + cpuEntry);

  if (userEntry === cpuEntry) {
    alert("You tied! CPU Chose:" + cpuEntry);
    stats.ties++;
  } else if (
    (userEntry === "Rock" && cpuEntry === "Scissors") ||
    (userEntry === "Scissors" && cpuEntry === "Paper") ||
    (userEntry === "Paper" && cpuEntry === "Rock") ||
    (userEntry === "Scissors" && cpuEntry === "Lizard") ||
    (userEntry === "Rock" && cpuEntry === "Lizard") ||
    (userEntry === "Lizard" && cpuEntry === "Spock") ||
    (userEntry === "Spock" && cpuEntry === "Scissors") ||
    (userEntry === "Lizard" && cpuEntry === "Paper") ||
    (userEntry === "Paper" && cpuEntry === "Spock") ||
    (userEntry === "Spock" && cpuEntry === "Rock")
  ) {
    alert("You win! CPU Chose:" + cpuEntry);
    stats.wins++;
  } else {
    alert("You lose! CPU Chose:" + cpuEntry);
    stats.losses++;
  }

  alert(
    "Wins: " + stats.wins + " Losses: " + stats.losses + " Ties: " + stats.ties
  );
} while (confirm("Do you want to play again?"));
