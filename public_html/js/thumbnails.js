// function to change the background color
function changeBG(classname) {
    document.getElementById("body").removeAttribute('class');
    document.getElementById("body").classList.add(classname);
}

// function to reset background color & text color
function reset() {
    document.getElementById("body").removeAttribute('class');
    document.getElementById("image_description").style.color = 'white';
}

// function to change the text color
function changeTEXT(color) {
	document.getElementById("image_description").style.color = color;
}

// function to display the description and image in the page
function clickImage(id,image,title,description_text) {
    document.getElementById(id).addEventListener("mouseover",function() { 
        document.getElementById("image").innerHTML = `<center><img src='images/${image}'/></center>`;
        var title_text = document.getElementById("title_text");
        var description = document.getElementById("description");
        title_text.innerText = title;
        description.innerText = description_text;
  });
}

let asteroids_text = `Beyond the orbit of Mars lies the main belt of asteroids of minor planet. Only one (Ceres) is as much as 900 kilometers in diameter, and only one (Vesta) is ever visible with the naked eye; most of the members of the swarm are very small indeed, and there are fewer than 20 main belt asteroids which are as much as 250 kilometers across. The asteroids are not alike. The largest member of the swarm is fairly regular in shape, and smaller asteroids are certainly quite irregular in outline; collisions must have been and still are relatively frequent. Asteroids appear so small that to record surface detail in them are far from easy. Most main belt asteroids have reasonably circular orbits. There are a several types of asteroids as Carbonaceous, Salicaceous, Metallic etc.`

let astronauts_text = `Astronauts are very interesting people. They are also very intelligent and are very dedicated to what they do. Since we have been sending astronauts into space, we have sent about 500. These 500 people are very lucky, because they are the only people who have seen our planet with their own eyes from space. We haven’t sent them very far yet though, as technology is only limited to what we know. We have come a long way though, with our opportunities limitless in the future. Outside of the 500 Astronauts who have travelled to space, just above the Earth, there are about 25 Astronauts that have travelled just that little bit further and have orbited, and only about half of them have touched down on a completely different world.`

let satellite_text = `Even though natural satellites have been going around things for a very long time, artificial satellites didn't exist until the 1950s. The first man-made satellite, named Sputnik, was built by scientists in the country of the Soviet Union. Sputnik went into space in 1957. It was very small compared to some of the artificial satellites we have today. In fact, it was only the size of a beach ball! Also in 1957, the Russians sent a dog named Laika into space on their second artificial satellite. In case you were wondering, artificial satellites get into space by rockets.`

let collision_text = `dramatic glimpse of the aftermath of a collision between two exoplanets is giving scientists a view at what can happen when planets crash into each other. A similar event in our own solar system may have formed our Moon. This is a rare opportunity to study catastrophic collisions occurring late in a planetary system’s history. These collisions can be bright depending on the energy. While there are several mechanisms that could cause the dust to glow more brightly – it could be absorbing more heat from the stars or moving closer to the stars `

let galaxy_text = `A galaxy is a huge collection of gas, dust, and billions of stars and their solar systems, all held together by gravity. We live on a planet called Earth that is part of our solar system. But where is our solar system? It’s a small part of the Milky Way Galaxy. A galaxy is a huge collection of gas, dust, and billions of stars and their solar systems. A galaxy is held together by gravity. Our galaxy, the Milky Way, also has a supermassive black hole in the middle, When you look up at stars in the night sky, you’re seeing other stars in the Milky Way. If it’s really dark, far away from lights from cities and houses, you can even see the dusty bands of the Milky Way stretch across the sky.`

clickImage("asteroids_btn","asteroid.jpg","Asteroids",asteroids_text);
clickImage("astronaut_btn","astro.jpg","Astronauts",astronauts_text);
clickImage("satelite_btn","satellite.png","Satellite",satellite_text);
clickImage("collision_btn","collision.jpg","Collision",collision_text);
clickImage("galaxies_btn","galaxy.png","Galaxies",galaxy_text);