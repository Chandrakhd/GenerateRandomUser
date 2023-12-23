const inputNumber = document.querySelector(".inputNum");
console.log(inputNumber);

const urlApiBase = "https://randomuser.me/api/?results=";
let urlApi;

function getUserData(numberOfResults) {
  urlApi = urlApiBase + numberOfResults;

  fetch(urlApi)
    .then(function (rawData) {
      return rawData.json();
    })
    .then(function (data) {
      const userTableBody = document.getElementById("userTableBody");
      const userRowTemplate = document.getElementById("userRowTemplate");

      data.results.forEach(function (user) {
        const id = user.id.value;
        const firstName = user.name.first;
        const LastName = user.name.last;
        const email = user.email;
        const location = user.location;
        const picture = user.picture.medium;

        const userRow = userRowTemplate.content.cloneNode(true);

        userRow.querySelector(".id").textContent = id;
        userRow.querySelector(".first").textContent = firstName;
        userRow.querySelector(".last").textContent = LastName;
        userRow.querySelector(".email").textContent = email;
        userRow.querySelector(".city").textContent = location.city;
        userRow.querySelector(".state").textContent = location.state;
        userRow.querySelector(".country").textContent = location.country;
        userRow.querySelector(".image img").src = picture;
        userTableBody.appendChild(userRow);
      });
    })
    .catch(function (error) {
      console.log("Error", error);
    });
}

getUserData(5);

const generateBtn = document.querySelector(".generateBtn");

generateBtn.addEventListener("click", function () {
  const numberOfResults = inputNumber.value;
  getUserData(numberOfResults);
});
