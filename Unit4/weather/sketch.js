let weather;
let weatherID = 0;
let state = 0;
let x = 0;
let windspeed = 0;
let temperature = 0;
let humidity = 0;
let bg;

function preload() {
  bg = loadImage("assets/weatherDog.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight); // Creates the size of the canvas

  // WEATHER DATA
  let myCityString = "https://api.openweathermap.org/data/2.5/weather?q=Washington,IL,US&units=imperial&"; // Sets the city
  let myIDString = "appid=351c61cd3c1f3fb15c6de0206a58cdcb"; // Personal API ID
  let myTotalString = myCityString + myIDString; // Combines the Personal API ID with the city
  loadJSON(myTotalString, gotData); // calls the gotDada function after retrieving the JSON data
}

function gotData(data) {
  weather = data; // Sets the weather variable value
  windspeed = weather.wind.speed; // Sets the windspeed variable value
  temperature = weather.main.temp; // Sets the temperature variable value
  humidity = weather.main.humidity; // Sets the humidity variable value
}

function draw() {
  background(bg); // Sets the background image
  switch (state) {
    case 0:
      if (weather) {
        state = 1; // Moves to state 1
      }
      break;

    case 1:
      // DATA
      fill("white"); // Colors the rectangle white
      rect(0, 0, 250, 125); // Makes a rectangle for readability
      fill("black"); // Colors the text black
      text("What is the weather in " + weather.name + "?", 20, 20); // Displays a weather prompt
      text("windspeed is " + windspeed, 20, 40); // Displays the windspeed
      text("temperature is " + temperature, 20, 60); // Displays the temperature
      text("humidity is " + humidity + " %", 20, 80); // Displays the humidity
      text("description is " + weather.weather[0].description, 20, 100); // Displays the description

      // CLOUD
      fill("white"); // Colors the cloud white
      noStroke(); // Removes strokes
      ellipse(x, 300, 200, 100); // Forms the cloud
      x = x + windspeed / 3; // Moves the cloud on the X Axis
      if (x > width) {
        x = 0; // Resets the cloud to the left
      }
      break;
  }
}
