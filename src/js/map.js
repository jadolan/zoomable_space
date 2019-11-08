const map = L.map('map').setView([0,0],2);
L.tileLayer('src/eso_planets/{z}/{x}/{y}.png', {
  minZoom: 2,
  maxZoom: 4,
  attribution: 'ESO/J. Emerson/VISTA',
  tms: true
}).addTo(map);

map.setZoom(3)

// set icon style
const redIcon = new L.Icon({
  iconUrl: 'src/img/marker-icon-red.png',
  shadowUrl: 'src/img/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// create points
const planetA = L.marker([57.5, -9], {icon: redIcon}).addTo(map);
const planetB = L.marker([55, 77], {icon: redIcon}).addTo(map);
const planetC = L.marker([-28.5, 101.5], {icon: redIcon}).addTo(map);
const planetD = L.marker([-58, 37.8], {icon: redIcon}).addTo(map);
const planetE = L.marker([-19, -75.5], {icon: redIcon}).addTo(map);
const planetF = L.marker([24, -140], {icon: redIcon}).addTo(map);
const rocket = L.marker([46,-86], {icon: redIcon}).addTo(map);

// add popups to planets
planetA.bindPopup("<h5>Planet A</h5>Welcome to planet A.");
planetB.bindPopup("<h4>Planet B</h4>Find out more about planet B.");
planetC.bindPopup("<h4>Planet C</h4>Welcome to planet C.");
planetD.bindPopup("<h4>Planet D</h4>Join us on planet D.");
planetE.bindPopup("<h4>Planet E</h4>Find out more about planet E.");
planetF.bindPopup("<h4>Planet F</h4>Welcome to planet F.");
rocket.bindPopup("<h4>Preparing for landing...</h4>Team Rocket's on its way.");

// add sidebar
let sidebar = L.control.sidebar('sidebar', {
  position: 'left'
});

// toggle sidebar

planetA.on('click', function() {
  sidebar.setContent("<h2>Planet A</h2><div class='crew-member'><h4>Lisa</h4><img class='crew-member' src='src/img/Aldrin_Apollo_11_cropped.jpg' height='250' width='250'></td><td><table><tr><td><b>Project:</b></td><td>Mission 4X</td></tr><tr><td><b>Focus:</b></td><td>shooting stars</td></tr><tr><td><b>Hobbies:</b></td><td>snorkeling</td></tr><tr><td><b>Team:</b></td><td>Europe</td></tr></table></div></div>").show()
});

planetB.on('click', function() {
  sidebar.setContent("<h2>Planet B</h2><div class='crew-member'><h4>Lisa</h4><img class='crew-member' src='src/img/Aldrin_Apollo_11_cropped.jpg' height='250' width='250'></td><td><table><tr><td><b>Project:</b></td><td>Mission 4X</td></tr><tr><td><b>Focus:</b></td><td>shooting stars</td></tr><tr><td><b>Hobbies:</b></td><td>snorkeling</td></tr><tr><td><b>Team:</b></td><td>Europe</td></tr></table></div></div>").show()
});

planetC.on('click', function() {
  sidebar.setContent("<h2>Planet C</h2><div class='crew-member'><h4>Lisa</h4><img class='crew-member' src='src/img/Aldrin_Apollo_11_cropped.jpg' height='250' width='250'></td><td><table><tr><td><b>Project:</b></td><td>Mission 4X</td></tr><tr><td><b>Focus:</b></td><td>shooting stars</td></tr><tr><td><b>Hobbies:</b></td><td>snorkeling</td></tr><tr><td><b>Team:</b></td><td>Europe</td></tr></table></div></div>").show()
});

planetD.on('click', function() {
  sidebar.setContent("<h2>Planet D</h2><div class='crew-member'><h4>Lisa</h4><img class='crew-member' src='src/img/Aldrin_Apollo_11_cropped.jpg' height='250' width='250'></td><td><table><tr><td><b>Project:</b></td><td>Mission 4X</td></tr><tr><td><b>Focus:</b></td><td>shooting stars</td></tr><tr><td><b>Hobbies:</b></td><td>snorkeling</td></tr><tr><td><b>Team:</b></td><td>Europe</td></tr></table></div></div>").show()
});

planetE.on('click', function() {
  sidebar.setContent("<h2>Planet E</h2><div class='crew-member'><h4>Lisa</h4><img class='crew-member' src='src/img/Aldrin_Apollo_11_cropped.jpg' height='250' width='250'></td><td><table><tr><td><b>Project:</b></td><td>Mission 4X</td></tr><tr><td><b>Focus:</b></td><td>shooting stars</td></tr><tr><td><b>Hobbies:</b></td><td>snorkeling</td></tr><tr><td><b>Team:</b></td><td>Europe</td></tr></table></div></div>").show()
});

planetF.on('click', function() {
  sidebar.setContent("<h2>Planet F</h2><div class='crew-member'><h4>Lisa</h4><img class='crew-member' src='src/img/Aldrin_Apollo_11_cropped.jpg' height='250' width='250'></td><td><table><tr><td><b>Project:</b></td><td>Mission 4X</td></tr><tr><td><b>Focus:</b></td><td>shooting stars</td></tr><tr><td><b>Hobbies:</b></td><td>snorkeling</td></tr><tr><td><b>Team:</b></td><td>Europe</td></tr></table></div></div>").show()
});

rocket.on('click', function() {
  sidebar.setContent("<h2>Team Rocket</h2><div class='crew-member'><h4>Lisa</h4><img class='crew-member' src='src/img/Aldrin_Apollo_11_cropped.jpg' height='250' width='250'></td><td><table><tr><td><b>Project:</b></td><td>Mission 4X</td></tr><tr><td><b>Focus:</b></td><td>shooting stars</td></tr><tr><td><b>Hobbies:</b></td><td>snorkeling</td></tr><tr><td><b>Team:</b></td><td>Europe</td></tr></table></div></div>").show()
});

map.addControl(sidebar);
