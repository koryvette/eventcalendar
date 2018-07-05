const eventBody = document.querySelector("")

function loadevents(){

  const eventlist = new XMLHttpRequest();
  eventlist.open('GET', 'script/upcoming_events.json');
  eventlist.onload = () => {

    try{
      const json = JSON.parse(eventlist.responseText)
      populateEvents(json);
    } catch (e) {
        console.warn("Error loading events!!");
    }
  };

eventlist.send();
}

function populateEvents (json){
  while
}

  document.addEventListener("DOMContentloaded",( => {loadevents();});
