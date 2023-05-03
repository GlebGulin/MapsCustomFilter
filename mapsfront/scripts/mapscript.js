let typesPlaces = [];
let initializedPlaces = [];
let chooseType = "";
let customMap;
let markers = [];
let labelButton = "Hide Filers";
let showMode = true;

function InitTestData(){
	var button = document.getElementById('hideMarks');
	button.innerText = button.textContent = 'Hide Filers';
	if(initializedPlaces.length === 0){
		console.log("Getting started values");
		initializedPlaces = InitPlaces();
	}

	if(typesPlaces.length === 0){
		console.log("Getting possible types from location data");
		InitTypePlaces();
	}
	InitSelectElement();

}

function InitTypePlaces(){
	for (var i = 0; i < initializedPlaces.length; i++){
		console.log(i);
		if(!typesPlaces.includes(initializedPlaces[i].type)){
			typesPlaces.push(initializedPlaces[i].type);
		}
	}
	if(typesPlaces.length > 0){
		chooseType = typesPlaces[0];
	}
}

function InitSelectElement(){
	var selectElement = document.getElementById('typeBuildOptions');
	ClearOldValues(selectElement);
	debugger;
	var a = selectElement;
	for (var i = 0; i < typesPlaces.length; i++){
		var newOption = document.createElement("option");
		var optionText = document.createTextNode(typesPlaces[i]);
		newOption.appendChild(optionText);
		newOption.setAttribute('value',i.toString());
		selectElement.appendChild(newOption);
	}
}

function ClearOldValues(element){
	var i, L = element.options.length - 1;
	for(i = L; i >= 0; i--) {
		element.remove(i);
	}
}


function customSelectType(){
	clearOverlays();
	var elem = document.getElementById("typeBuildOptions");
    var textElem = elem.options[elem.selectedIndex].text;
    chooseType = textElem;
	for (var j = 0; j < initializedPlaces.length; j++){
		if(initializedPlaces[j].type === chooseType){
				console.log(initializedPlaces[j].name);
				var markerPlace = new google.maps.Marker({
					position : { lat : initializedPlaces[j].latitude, lng : initializedPlaces[j].longtitude },
					// map : chooseType,
					title : initializedPlaces[j].name + ', type of building: ' + initializedPlaces[j].type,
					optimized: false,
					icon: "img/blueMarker35.png"
			});
			markerPlace.setMap(customMap);
			markers.push(markerPlace);
		}
	}
	var button = document.getElementById('hideMarks');
	button.innerText = button.textContent = "Hide Filters";
	showMode = true;
}

function clearOverlays() {
  setMapOnAll(null);
  markers.length = 0;
}

function HideShowMarks(){
	debugger;
	showMode = !showMode;
	var selectBlock = document.getElementById("selectControl");
	if (showMode){
		labelButton = "Hide Filters";
		setMapOnAll(customMap);
		selectBlock.style.display = "block";
	}
	else {
		labelButton = "Show Filters";
		setMapOnAll(null);
		selectBlock.style.display = "none";
	}
	var button = document.getElementById('hideMarks');
	button.innerText = button.textContent = labelButton;
}

function setMapOnAll(map) {
  debugger;
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

