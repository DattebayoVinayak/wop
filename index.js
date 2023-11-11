let planets = {
  mercury:3.16,
  venus:8.83,
  earth:9.81,
  mars:3.75,
  jupiter:26,
  saturn:11.2,
  uranus:10.5,
  neptune:13.5,
  pluto:0.61,
  moon:1.625,
  sun:274,
};

let list = document.querySelector(".listview");
let inp = document.querySelector("#wgtInp");

function handleChange() {
  list.innerHTML = ""
  for (const [planet, g] of Object.entries(planets)) {

    let weight = inp.value / 9.81 * g;

    list.innerHTML = list.innerHTML + `<li><div class="listitem"><img src="img/${planet}.png" alt=""><h3>Your Weight on ${planet.toUpperCase()} is &nbsp<span>${weight.toFixed(2)}</span>&nbsp Kg</h3></div></li>`
  }
}
