

const body = document.querySelector("body")
const buttonHome = document.getElementById("home-btn")
const buttonAbout = document.getElementById("about-btn")
const buttonProjects = document.getElementById("projects-btn")
const buttonHobby = document.getElementById("hobby-btn")
const buttonContact = document.getElementById("contact-btn")
const social = document.getElementById("social")
const footer = document.querySelector("footer>p")
//const header=document.querySelectorAll("h1")

buttonHome.onclick = () => {
  if (social.style.getPropertyValue("--color-social") == "#fff") {
    social.style.setProperty("--color-social", "rgb(83, 83, 83)")
    footer.style.color = "rgb(83, 83, 83)"
  }
  body.style.background = "linear-gradient(90deg, #aea4e3, #d3ffe8) fixed"
}
buttonAbout.onclick = () => {
  if (social.style.getPropertyValue("--color-social") == "#fff") {
    social.style.setProperty("--color-social", "rgb(83, 83, 83)")
    footer.style.color = "rgb(83, 83, 83)"
  }
  body.style.background = "linear-gradient(90deg, #cfecd0, #a0c9ce, #9ec0db) fixed"
}
buttonProjects.onclick = () => {
  if (social.style.getPropertyValue("--color-social") == "#fff") {
    social.style.setProperty("--color-social", "rgb(83, 83, 83)")
    footer.style.color = "rgb(83, 83, 83)"
  }
  body.style.background = "linear-gradient(to right, #fff7a3, #ffe0a3, #ffccb7, #ffc1d3, #fbbeeb, #e7bcf2, #d0bbf6, #b6baf7, #afb4f8, #a9aff8, #a2a9f9, #9ba4f9) fixed"
}
buttonHobby.onclick = () => {
  footer.style.color = "#fff"
  social.style.setProperty("--color-social", "#fff")
  body.style.background = "linear-gradient(90deg, #9c8de4, #ad4454) fixed"
}
buttonContact.onclick = () => {
  footer.style.color = "#fff"
  social.style.setProperty("--color-social", "#fff")
  body.style.background = "linear-gradient(to left, #370512, #592042, #6a457d, #6071b9, #12a0eb) fixed"
}



