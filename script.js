function Place(location, landmarks, timeOfYear, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}

const places = [
  new Place(
    "Paris, France",
    ["Eiffel Tower", "THe Louvre","Notre-Dame Cathedral","Champs-Élysées"],
    "Spring",
    "Beautiful city with amazing art. The weather is usually mild and perfect for sightseeing."
  ),
  new Place(
    "Nairobi, Kenya",
    ["Nairobi National Park", "National Archives", "Giraffe Centre", "Karen Blixen Museum"],
    "Summer",
    "Very vibrant city.Sometimes coined the 'Concrete Jungle' because of the many buildings and traffic jams."
  ),
  new Place(
    "Monaco",
    ["Monte Carlo", "Harbor","Prince's Palace of Monaco,"],
    "Autumn",
    "Luxury and fast cars everywhere. The weather is usually pleasant, making Autumn a  really great time to visit and enjoy the Mediterranean views."
  ),
   new Place(
    "Diani, Kenya",
    ["Diani Beach", "Kwa Mbu", "Colobus Conservation for monkeys", "Shimba Hills National Reserve"],
    "Summer",
    "Beautiful beach with great views."
  ),
   new Place(
    "Mombsasa, Kenya",
    ["Fort Jesus", "Likoni Ferry", "Mombasa Old Town", "Haller Park", "Mombasa Marine National Park", "and many more"],
    "Throughout the year",
    "Historic city with great cultural heritage. Nice warmth and humidiity throughout the year."
  ),
  new Place(
    "Narok, Kenya",
    ["Maasai Mara National Reserve", "Narok Museum", "Olpusimoru Conservancy"],
    "Summer",
    "Very scenic and wildlife-rich area. Beware of the many mosquitoes during the rainy season, so it's best to visit during the dry season for a more comfortable experience."
  ),
  new Place(
    "Kakamega, Kenya",
    ["Kakamega Forest Reserve", "Shianda Market", "Kakamega Museum", "Mumias Sugar Factory","Kit mikayi the crying stone"],
    "Summer",
    "Lush green  Kakamega forest with unique flora and fauna.Many monkey species live in the forest. The weather is usually warm and humid, so pack lightly."
  ),
];

const placesList = document.getElementById("places-list");
const placeDetails = document.getElementById("place-details");

places.forEach((place, index) => {
  const li = document.createElement("li");
  li.innerText = place.location;
  li.addEventListener("click", () => displayPlace(index));
  placesList.appendChild(li);
});

function displayPlace(index) {
  const place = places[index];

  placeDetails.innerHTML = `
    <h2>${place.location}</h2>
    <p><strong>Landmarks:</strong> ${place.landmarks.join(", ")}</p>
    <p><strong>Time of Year:</strong> ${place.timeOfYear}</p>
    <p><strong>Notes:</strong> ${place.notes}</p>
  `;
}
