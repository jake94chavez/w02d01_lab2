const solarSystem = [
	{ name: "Mercury", ringSystem: false, moons: [] },
	{ name: "Venus", ringSystem: false, moons: [] },
	{ name: "Earth", ringSystem: false, moons: ["The Moon"] },
	{ name: "Mars", ringSystem: false, moons: ["Phobos", "Deimos"] },
	{ name: "Jupiter", ringSystem: true, moons: ["Europa", "Ganymede", "Io", "Callisto"] },
	{ name: "Saturn", ringSystem: true, moons: ["Titan", "Enceladus", "Rhea", "Mimas"] },
	{ name: "Uranus", ringSystem: true, moons: ["Miranda", "Titania", "Ariel", "Umbriel"] },
	{ name: "Neptune", ringSystem: true, moons: ["Triton", "Nereid"] }
];

// Q1
console.log(solarSystem[4].moons);
// => ['Europa', 'Ganymede', 'Io', 'Callisto']

// Q2
console.log(solarSystem[7].moons[1]);
// => Nereid

// Q3
solarSystem[1].moons.push("Endor");

// Q4
let pluto = {
	name: "Pluto",
	ringSystem: false,
	moons: ["Charon"],
}
solarSystem.push(pluto);

// Q5
solarSystem[2].diameter = "7,917.5 mi";

// Q6
solarSystem[0].ringSystem = true;

// Q7
solarSystem[6].moons[3] = "Oberon";

// Q8
for (i = 0; i < solarSystem.length; i++) {
	if (solarSystem[i].ringSystem === true) {
		console.log(solarSystem[i]);
	}
}