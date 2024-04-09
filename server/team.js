window.onload = function() {
    const teamID = new URLSearchParams(window.location.search).get('id');
    console.log(teamID)
    const teamData = fetch(`/getteam?id=${teamID}`, {
        method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
        if (data["error"]) {
            return
        }

        console.log(data)
    })
}

function teamSettings(){
    const channelID = new URLSearchParams(window.location.search).get('id');
    window.location.href = `/teamsettings?id=${channelID}`
}

$ = function(id) {
  return document.getElementById(id);
}

var show = function(id) {
	$(id).style.display ='block';
}
var hide = function(id) {
	$(id).style.display ='none';
}
