/* Code Snippet for sending data to db */

let nameVal = document.getElementById("name");
let telVal = document.getElementById("tel");
let emailVal = document.getElementById("email");
let ageVal = document.getElementById("age");
let countryVal = document.getElementById("country");
let submitBtn = document.getElementById("submit");
const table = document.getElementById("myTable");
const tbody = table.getElementsByTagName("tbody")[0];

submitBtn.addEventListener("click", function () {
  fetch("https://form-production-0430.up.railway.app", {
    method: "POST",
    body: JSON.stringify({
      name: nameVal.value,
      email: emailVal.value,
      tel: telVal.value,
      age: ageVal.value,
      country: countryVal.value,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
});

/* Code Snippet for sending data to db */

/* Code Snippet to get data from db and render it */

window.addEventListener("load", function () {
  fetch("https://form-production-0430.up.railway.app/")
    .then((res) => res.json())
    .then((data) =>
      data.forEach((item) => {
        console.log(item);
        const row = tbody.insertRow();
        ["name", "email", "age", "country", "tel"].forEach((key) => {
          const cell = row.insertCell();
          cell.textContent = item[key];
        });
      })
    )
    .catch((err) => console.log(err));
});
