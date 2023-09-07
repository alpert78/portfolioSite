/**
 * @author Nicholas Alpert
 * @version V1 6/5/2023
 * The JavaScript file for my portfolio page
 */


/**
 * Event Listener for the color highlight on the side nav bar
 */

//The height of the users screen
const viewportHeight = window.innerHeight;

//An array of all list items
const listItems = [];
const aboutMe = document.querySelector(".aboutMe");
listItems.push(aboutMe);

const skills = document.querySelector(".skills");
listItems.push(skills);

const resume = document.querySelector(".resume");
listItems.push(resume);

const projects = document.querySelector(".projects");
listItems.push(projects);

const contactMe = document.querySelector(".contactMe");
listItems.push(contactMe);

//The original position, used for the first screen
const originalPosition = 0;

this.document.querySelector(".aboutMe").style.backgroundColor = 'rgba(233, 84, 32, 0.25)';

//An event listener for the position the user is at on the page
window.addEventListener('scroll', function() {

  const scrollPosition = window.scrollY || window.pageYOffset;

  switch (true) {
    case scrollPosition == originalPosition:
        listItems.forEach(element => {
            element.style.backgroundColor = "";
        });
        this.document.querySelector(".aboutMe").style.backgroundColor = 'rgba(233, 84, 32, 0.25)';
        break;
    case scrollPosition >= (originalPosition + viewportHeight) && scrollPosition < (viewportHeight*2):
        listItems.forEach(element => {
            element.style.backgroundColor = "";
        });
        this.document.querySelector(".skills").style.backgroundColor = 'rgba(233, 84, 32, 0.25)';
        break;
    case scrollPosition >= (originalPosition + (viewportHeight*2)) && scrollPosition < (viewportHeight*3):
        listItems.forEach(element => {
            element.style.backgroundColor = "";
        });
        this.document.querySelector(".resume").style.backgroundColor = 'rgba(233, 84, 32, 0.25)';
        break;
    case scrollPosition >= (originalPosition + (viewportHeight*3)) && scrollPosition < (viewportHeight*4):
        listItems.forEach(element => {
            element.style.backgroundColor = "";
        });
        this.document.querySelector(".projects").style.backgroundColor = 'rgba(233, 84, 32, 0.25)';
        break;
    case scrollPosition >= (originalPosition + (viewportHeight*4)) && scrollPosition < (viewportHeight*5):
        listItems.forEach(element => {
            element.style.backgroundColor = "";
        });
        this.document.querySelector(".contactMe").style.backgroundColor = 'rgba(233, 84, 32, 0.25)';
        break;
  }
});

document.querySelector(".cardSwitcher").addEventListener("click", switchDivs);

function switchDivs() {
    const div1 = document.querySelector(".skillOne");
    const div2 = document.querySelector(".skillTwo");
    const div3 = document.querySelector(".skillThree");

    var div1Content = div1.innerHTML;
    var div2Content = div2.innerHTML;
    var div3Content = div3.innerHTML;

    div1.innerHTML = div2Content;
    div2.innerHTML = div3Content;
    div3.innerHTML = div1Content;
}