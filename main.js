import './style.css'
import { data } from './data';

window.onload = () => {
  const codeElm = document.querySelector("#code");
  codeElm.textContent = `
const personDetails= ${JSON.stringify(data.personDetails, 0, 2)}

  
const jobDetails= ${JSON.stringify(data.jobDetails, 0, 2)}


const socialLinks= ${JSON.stringify(data.socialLinks, 0, 2)}


const techStack= ${JSON.stringify(data.techStack, 0, 2)}
  `

  hljs.highlightAll()
}
