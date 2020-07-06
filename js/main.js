/*const themeMap = {
    dark: "light",
    light: "solar",
    solar: "dark"
  };

  const theme = localStorage.getItem('theme')
  || (tmp = Object.keys(themeMap)[0],
      localStorage.setItem('theme', tmp),
      tmp);
const bodyClass = document.body.classList;
bodyClass.add(theme);

function toggleTheme() {
  const current = localStorage.getItem('theme');
  const next = themeMap[current];

  bodyClass.replace(current, next);
  localStorage.setItem('theme', next);
}

document.getElementById('themeButton').onclick = toggleTheme;*/

const body=document.querySelector("body")
const buttonHome = document.getElementById("home")
const buttonAbout = document.getElementById("about")
const buttonProjects = document.getElementById("projects")
const buttonHobby = document.getElementById("hobby")
const buttonContact = document.getElementById("contact")

//buttonHome.on

buttonHome.onclick = ()=>{
  body.style.background="linear-gradient(90deg, #aea4e3, #d3ffe8) fixed"
}
buttonAbout.onclick = ()=>{
  body.style.background="linear-gradient(90deg, #cfecd0, #a0c9ce, #9ec0db) fixed"
}
buttonProjects.onclick = ()=>{
  body.style.background="linear-gradient(to right, #fff7a3, #ffe0a3, #ffccb7, #ffc1d3, #fbbeeb, #e7bcf2, #d0bbf6, #b6baf7, #afb4f8, #a9aff8, #a2a9f9, #9ba4f9)fixed"
}
buttonHobby.onclick = ()=>{
  body.style.background="linear-gradient(90deg, #9c8de4, #ad4454) fixed"
}
buttonContact.onclick = ()=>{
  body.style.background="linear-gradient(to left bottom, #370512, #592042, #6a457d, #6071b9, #12a0eb) fixed"
}
