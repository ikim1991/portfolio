const data = {
  1: {
    title: "My Golf Tracker",
    summary: "As an avid golfer wanting to improve his game, I developed this web application to track my progress. By recording all the rounds I play and visualizing the data, I hope to improve and track my progress in the life-long struggle of a game we call golf. The app is currently not supported on mobile and tablets and has a minimum screen resolution width of 1024px. An 16:9 aspect ratio resolution is recommended.",
    technologies: [
      "React",
      "Redux",
      "Node.js",
      "Express",
      "Chartjs"
    ],
    links: ["https://ikim1991.github.io/my-golf-tracker/", "https://github.com/ikim1991/my-golf-tracker/", "https://github.com/ikim1991/my-golf-tracker-api/"],
    imageurl: [
      "/assets/golf-tracker/main.png",
      "/assets/golf-tracker/barchart.png",
      "/assets/golf-tracker/scorecard.png",
      "/assets/golf-tracker/newround.png",
      "/assets/golf-tracker/newcourse.png"
    ],
    imagetext: [
      "Main page on load. Displays line chart of recorded rounds and player data on the side. (Screenshot from 1366x768 Resolution)",
      "Bar chart displaying a summary of all the shots for given year. (Screenshot from 1366x768 Resolution)",
      "A record of all the rounds recorded in a given year in a scorecard-like format. (Screenshot from 1366x768 Resolution)",
      "Form data to record new round. Sends data to the back-end and re-renders the charts and player data. (Screenshot from 1366x768 Resolution)",
      "Form data to add new course to player data and for new rounds to be recorded. Sends data back to the back-end and re-renders. (Screenshot from 1366x768 Resolution)"
    ],
    url: "/assets/golf-tracker/golf.jpg"
  },
  2: {
    title: "Interactive BlackJack App",
    summary: "A real-time interactive game of Six-Deck BlackJack of up to 5 players just for fun. Features include multiple servers to join and play from, and an interactive in-game chat messenger. The game is currently not supported on mobile and tablets and has a minimum screen resolution width of 1024px. An 16:9 aspect ratio resolution is recommended.",
    technologies: [
      "React",
      "Redux",
      "Node.js",
      "Express",
      "SocketIO"
    ],
    links: ["https://ikim1991.github.io/interactive-blackjack-app/", "https://github.com/ikim1991/interactive-blackjack-app/", "https://github.com/ikim1991/interactive-blackjack-api/"],
    imageurl: [
      "/assets/blackjack/login.png",
      "/assets/blackjack/servers.png",
      "/assets/blackjack/register.png",
      "/assets/blackjack/lobby.png",
      "/assets/blackjack/game-rules.png",
      "/assets/blackjack/betting.png",
      "/assets/blackjack/luckylucky.png",
      "/assets/blackjack/gameplay.png",
      "/assets/blackjack/gameplay2.png",
      "/assets/blackjack/dealer.png",
      "/assets/blackjack/dealer-push.png",
    ],
    imagetext: [
      "Main Login Page (Screenshot from 1920x1080 Resolution)",
      "Choose from different servers to join (Screenshot from 1920x1080 Resolution)",
      "Register Page (Screenshot from 1920x1080 Resolution)",
      "Lobby (Screenshot from 1920x1080 Resolution)",
      "Game Rules (Screenshot from 1920x1080 Resolution)",
      "Betting Phase (Screenshot from 1920x1080 Resolution)",
      "Checking for Lucky Lucky Winners (Screenshot from 1920x1080 Resolution)",
      "Gameplay 1 (Screenshot from 1920x1080 Resolution)",
      "Gameplay 2 (Screenshot from 1920x1080 Resolution)",
      "Dealer (Screenshot from 1920x1080 Resolution)",
      "Dealer Push (Screenshot from 1920x1080 Resolution)"
    ],
    url: "/assets/blackjack/blackjack.jpg"
  }
}

export default data
