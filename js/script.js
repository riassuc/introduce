
const daynightmode = document.querySelector("#daynight");
const scrolltext = document.querySelector(".scroll");
const bgColor = document.querySelector(".container");
const clickImage = document.querySelector(".mode_handle");
const innerText = document.querySelector(".day_text");
const blogImage = document.querySelector(".blogimage");
const githubImage = document.querySelector(".githubimage");
const mailImage = document.querySelector(".mailimage");

function daynighthandeler(){
    if (daynightmode.className === 'day'){
        bgColor.style.backgroundColor = "#666666";
        daynightmode.style.color = "#e3e3e3";
        scrolltext.style.color = "#b8b8b8";
        clickImage.src = "images/memoticon/nightmode.png";
        innerText.innerText = "Night";
        daynightmode.className = 'night';
        blogImage.src = "images/contact/blog_night.png"
        githubImage.src = "images/contact/github_night.png"
        mailImage.src = "images/contact/mail_night.png"
    } else if (daynightmode.className === 'night'){
        bgColor.style.backgroundColor = "#e3e8e8";
        daynightmode.style.color = "black";
        scrolltext.style.color = "#9c9c9c";
        clickImage.src = "images/memoticon/daymode.png";
        innerText.innerText = "Day";
        daynightmode.className = 'day';
        blogImage.src = "images/contact/blog.png"
        githubImage.src = "images/contact/github.png"
        mailImage.src = "images/contact/mail.png"
        }
    }
clickImage.addEventListener("click", daynighthandeler);