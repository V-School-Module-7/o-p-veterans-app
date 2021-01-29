let map, overlay;

//30.536632781218408, -97.62809405596124
function initMap() {
 const myLatlng = { lat: 30.53728085060409, lng: -97.62828689432449 }
let gm = google.maps;
/* Multiply the degrees of separation of longitude and latitude by 111,139 to get the corresponding linear distances in meters. */
  const booth1pos = [
    { lat: 30.53728085060409, lng: -97.62828689432449 },
  	{ lat: 30.53729355684305, lng: -97.62825957046756 },
  	{ lat: 30.53730707471945, lng: -97.62827573084391 },
  	{ lat: 30.53729648841995, lng: -97.62829234703848 },
  	{ lat: 30.53728085060409, lng: -97.62828689432449 }
  ]

  map = new gm.Map(document.getElementById("map"), {
    center: myLatlng,
    zoom: 20,
    mapTypeId: "satellite",
  });
  
  
  
  
  
  

  
/*     const goldStar = {
    path:
      "M 5,5 5,22 22,22 22,5 z",
    fillColor: "#618572",
    fillOpacity: 0.8,
    scale: 1,
    strokeColor: "gold",
    strokeWeight: 2,
        rotation: -30,
    size: 1,
    
    }; */
/*   new google.maps.Marker({
    position: map.getCenter(),
    size: 1,
    
    icon: goldStar,
    scaleControl: false,
      map: map,
  }); */
  
/*     const imageBounds = {
    north: 30.53761638794729,
    south: 30.536057263069647,
    east: -97.62702795643577,
    west: -97.628673533051,
      }; */
      
const imageBounds = {
    north: 30.5376063879472,
    south: 30.5360572630696,
    east: -97.627017956435,
    west: -97.628660533051,
  };
  overlay = new google.maps.GroundOverlay(
    "https://v-school-module-7.github.io/o-p-veterans-app/2020%20site%20map%20png%20labeled.png",
    imageBounds
  );
overlay.setMap(map);
  
console.log(overlay)



    let infoWindow = new google.maps.InfoWindow({
    content: "Click the map to get Booth info",
    position: myLatlng,
  });
  infoWindow.open(map);
  // Configure the click listener.
  overlay.addListener("click", (mapsMouseEvent) => {
    // Close the current InfoWindow.
    infoWindow.close();
    // Create a new InfoWindow.
    infoWindow = new google.maps.InfoWindow({
      position: mapsMouseEvent.latLng,
    });
    infoWindow.setContent(
      JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
    );
    infoWindow.open(map);
  });
/*     const booth1 = new google.maps.Polyline({
    path: booth1pos,
    geodesic: true,
    strokeColor: "#5f5",
    strokeOpacity: 1.0,
    strokeWeight: 2,
    fill: "#FFEE00",
      });
      booth1.setMap(map); */
  /* console.log(gm) */
}

