var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if(xhr.readyState === 4) {
    console.log(xhr.responseText);
  }
};
xhr.open('GET', 'script/upcoming_events.json');
xhr.send();
