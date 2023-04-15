import "/reset.css";
import "./style.css";

let timeele = document.querySelector("#time");

setInterval(() => {
    let d = new Date(Date.now());
    let offset = 330
    let minutes = (330+d.getMinutes())%60;
    let hours = d.getHours() + parseInt((330+d.getMinutes())/60);

//   let hours = d.getHours();
//   let minutes = d.getMinutes();
  let seconds = d.getSeconds();
  let time = `${hours}:${minutes}:${seconds}`;
//   console.log(time);
  //   timeele.appendChild(document.createTextNode(time));
  timeele.innerHTML = time;
}, 1000);
