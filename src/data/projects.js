const data = {
  1: {
    title: "My Dashboard",
    summary: "To help myself be more productive, I created a personalized dashboard web application. The dashboard consists of a task manager (to-do list), a collection of developer-related job postings from 4 different sources, and the intraday data as well as news and press releases from the stocks I am intereted in. The app is currently not supported on mobile and tablets and has a minimum screen resolution width of 1024px. An 16:9 aspect ratio resolution is recommended.",
    technologies: [
      "React",
      "Redux",
      "Node.js / Express",
      "MongoDB / Mongoose",
      "JWT"
    ],
    links: ["https://ikim1991.github.io/my-dashboard-app/", "https://github.com/ikim1991/my-dashboard-app/", "https://github.com/ikim1991/my-dashboard-app-api/"],
    imageurl: [
      "/assets/dashboard/login.png",
      "/assets/dashboard/register.png",
      "/assets/dashboard/onregister.png",
      "/assets/dashboard/addstocktickers.png",
      "/assets/dashboard/financialdata.png",
      "/assets/dashboard/jobpostings.png",
      "/assets/dashboard/newtask.png",
      "/assets/dashboard/todolist.png"
    ],
    imagetext: [
      "Login page. (Screenshot from 1366x768 Resolution)",
      "Register page. (Screenshot from 1366x768 Resolution)",
      "Main page on first load after registering. (Screenshot from 1366x768 Resolution)",
      "By clicking on the stock ticker boxes you can personalize and add data to your dashboard. (Screenshot from 1366x768 Resolution)",
      "After updating your stock ticker data, it will display the intraday data and recent news or press releases from the companies. (Screenshot from 1366x768 Resolution)",
      "By hitting the refresh button, you can populate a list of job postings from Indeed. It is currently set to populate postings for developer roles within 4 different cities. (Screenshot from 1366x768 Resolution)",
      "Create and add new tasks to your To-Do list. (Screenshot from 1366x768 Resolution)",
      "An example of what the dashboard could look like. (Screenshot from 1366x768 Resolution)"
    ],
    url: "/assets/dashboard/dashboard.jpg"
  },
  2: {
    title: "My Golf Tracker",
    summary: "As an avid golfer wanting to improve his game, I developed this web application to track my progress. By recording all the rounds I play and visualizing the data, I hope to improve and track my progress in the life-long struggle of a game we call golf. The app is currently not supported on mobile and tablets and has a minimum screen resolution width of 1024px. An 16:9 aspect ratio resolution is recommended.",
    technologies: [
      "React",
      "Redux",
      "Node.js / Express",
      "MongoDB / Mongoose",
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
  3: {
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
