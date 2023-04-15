import "/reset.css";
import "./style.css";

let vid = document.querySelector("video");
// vid.addEventListener('onTimeUpdate', onProgress)
let progressBar = document.querySelector("#progress");
progressBar.style.width = "100px";
vid.ontimeupdate  = () => {
  console.log("something");
  let percentage = (vid.currentTime / vid.duration) * 100;
  console.log(percentage);
  progressBar.style.width = `${percentage}%`;
};
progressBar.style.width = `60%`



let ages = [
  {age:19},
  {age:21},
  {age:35},
  {age:31},
  {age:29}
]

let app = document.querySelector('#app')

ages.forEach(age => {
  let ele =  document.createElement("p")
  ele.innerText = age.age
  app.appendChild(ele)
  }
)

window.addEventListener("keypress", (e)=> {
  e.preventDefault()
  if(e.key === '/'){
    document.querySelector('#search').focus()
  }
})


let r = new Range()

