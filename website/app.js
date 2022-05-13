//Init will be loaded within the HTML
window.addEventListener('load', init);
//Video button ID
const button = document.getElementById('buttonvid');
//Paragraph status change ID
const paragraph = document.getElementById('status');

//Init function loads all the functions of the JS file
function init (){
    button.addEventListener("click", buttonEventListener)
}

//buttonEventLister: Whenever someone clicks on the "more info" button,
//they get more information about the Infofinder + link to the product video.
function buttonEventListener(e){
  //prevents from re-loading the event
    e.preventDefault();
    //if text value is "more info", the JS will return the function createLink
    if (button.value === 'More info') {
        button.value = 'return';
        createLink()
    
    //if that's not the case, the innerHTML will be emptied.
      } else {
        button.value = 'More info';
        document.getElementById("link").innerHTML = '';
        paragraph.innerHTML = '';
      }
    }

//Creates the product video link whenever the user clicks on the "more infor" button
function createLink(){
  paragraph.innerHTML = "Furthermore, you can add your own information on the Infofinder for the public to see! To see it in main action, click on the video below!"
  let text = `Click on the video to see the product in action`;
  let result = "<a href=' https://youtu.be/y9oQAOvz7XM'>" + text + "</a>";
  document.getElementById("link").innerHTML = result;
}