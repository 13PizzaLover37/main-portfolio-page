// window.onload = function(){
//     var modeTheme = "day";

//     let modeButton = document.querySelector(".sun");
//     let figure = document.querySelector(".fa-sun");
//     let changesNight = [
//         navbar = document.querySelector("#navbar ul li").childNodes,
//         // body = document.querySelector("body"),
//         // navbarList = document.querySelectorAll("#navbar > ul > li > a"), 
//         welcomeSection = document.querySelector("#welcome-section"),
//         aboutSection = document.querySelector("#about-section"),
//         myProject = document.querySelector("#project-section")
//     ];

//     modeButton.addEventListener("click",function(){
        
//         switch (modeTheme){
//             case "day":
//                 document.getElementsByTagName('body')[0].style.color = "wheat";
//                 figure.classList.remove("fa-sun");
//                 figure.classList.add("fa-moon");
//                 modeTheme = "night";
//                 // document.getElementsByTagName("body")[0].style.backgroundColor = 'gray';
//                 for(let el of changesNight){
//                     console.log(el);
//                     // el.style.color = "wheat";
//                     el.style.backgroundColor = "black";
//                     // el.style.color.
//                 }
//                 for(let e of changesNight.navbar){
//                     e.style.color = "wheat";
//                 }
//                 break;
            
//             default:
//                 figure.classList.remove("fa-moon");
//                 figure.classList.add("fa-sun");
//                 modeTheme = "day";
//         }
    
//     });
// }