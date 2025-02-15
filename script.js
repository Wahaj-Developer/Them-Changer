//  Code to make colour box enable or disable
let colourIcons=  document.querySelector(".colour-icons"),
icons = document.querySelector(".colour-icons .icons");

icons.addEventListener("click", ()=>{
    colourIcons.classList.toggle("open");
})

  //  Geting all .btn element

 let buttons = document.querySelectorAll(".btn");  

for (var button of buttons) {

button.addEventListener("click" , (e)=>{

let target = e.target;


let open = document.querySelector(".open");
if(open) open.classList.remove("open");

   document.querySelector(".active").classList.remove("active");
   target.classList.add("active");




 //  Code of switch colour (Also day night colour)

let root = document.querySelector(":root"),
dataColor = target.getAttribute("data-color"); // Getting data clour value while spliting the colour
color = dataColor.split(" "); // spillting each colour from space and make them arry

root.style.setProperty("--white", color[0]);
root.style.setProperty("--black", color[1]);
root.style.setProperty("--nav-main", color[2]);
root.style.setProperty("--switchers-main", color[3]);
root.style.setProperty("--light-bg", color[4]);

let iconName = target.className.split(" ")[2];
colorText = document.querySelector(".home-content span");

if(target.classList.contains("fa-moon")){
target.classList.replace(iconName , "fa-sun");
colourIcons.style.display = "none";
colorText.classList.add("darkMode");

}else if(target.classList.contains("fa-sun")){
    target.classList.replace("fa-sun" , "fa-moon");
    colourIcons.style.display = "block";
    colorText.classList.remove("darkMode");
document.querySelector(".btn.blue").click();
}
})
}






 

