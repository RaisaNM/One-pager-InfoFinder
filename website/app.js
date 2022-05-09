window.addEventListener('load', init);
const button = document.getElementById('buttonvid');
const paragraph = document.getElementById('status');
    
function init (){
    button.addEventListener("click", buttonEventListener)
}

function buttonEventListener(e){
    e.preventDefault();
    if (button.value === 'More info') {
        button.value = 'return';
        createLink()

      } else {
        button.value = 'More info';
        document.getElementById("link").innerHTML = '';
        paragraph.innerHTML = '';
      }
    }

function createLink(){
  paragraph.innerHTML = "Furthermore, you can add your own information on the Infofinder for the public to see! To see it in main action, click on the video below!"
  let text = `Click on the video to see the product in action`;
  let result = "<a href=' https://youtu.be/y9oQAOvz7XM'>" + text + "</a>";
  document.getElementById("link").innerHTML = result;
}