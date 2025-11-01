const schools = [
  "Bulumko Secondary School",
  "Cosa Secondary School",
  "Harry Gwala Secondary School",
  "Joe Slovo Engineering High School",
  "Luhlaza Secondary School",
  "Manyano High School",
  "Matthew Goniwe Memorial High School",
  "Sinako High School",
  "Sizimisele Secondary School",
  "Sizamile Secondary School",
  "Zola Secondary School",
  "Uxolo High School"
];
const dropdown = document.getElementById("schoolDropdown");
schools.forEach(school => {
  const option = document.createElement("option");
  option.value = school;
  option.textContent = school;
  dropdown.appendChild(option);
});

document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("message").textContent = "Thanks! You'll get a WhatsApp message soon.";
});

