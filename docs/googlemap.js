let map, overlay;

function getNearestBooth({latLng}){
  const lat = Math.abs(latLng.lat())
  const lng = Math.abs(latLng.lng())
  return boothCoords.reduce((acc, booth) => {
    let latDistance = Math.abs(Math.abs(booth.lat) - lat)
    let lngDistance = Math.abs(Math.abs(booth.lng) - lng)
    let totalDist = latDistance+lngDistance
    return ({
      list: [...acc.list, {
        ...booth, latDistance, lngDistance,
      }],
      nearestBooth: totalDist < acc.nearestAmt ? booth : acc.nearestBooth,
      nearestAmt: totalDist < acc.nearestAmt ? totalDist : acc.nearestAmt
    })
  }, { list: [], nearestAmt: 100000 }).nearestBooth
}

function initMap() {
  const myLatlng = { lat: 30.53728085060409, lng: -97.62828689432449 }
  let gm = google.maps;


  map = new gm.Map(document.getElementById("map"), {
    center: myLatlng,
    zoom: 20,
    mapTypeId: "satellite",
  });

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

  let infoWindow = new google.maps.InfoWindow({
    content: "Click the map to get booth info",
    position: myLatlng,
  });
  infoWindow.open(map);
  overlay.addListener("click", (mapsMouseEvent) => {
    infoWindow.close();
    let nearestBooth = getNearestBooth(mapsMouseEvent)
    let position = {
      lat: nearestBooth.lat,
      lng: nearestBooth.lng 
    }

    infoWindow = new google.maps.InfoWindow({
      position
    });

    infoWindow.setContent(`
      <div class='infopopup'>
        <h3>Booth ${nearestBooth.id}</h3>
        <p>Booth ${nearestBooth.id} is Available</p>
        <a href='#'>Reserve Now</a>
      </div>
    `)

    infoWindow.open(map);
  });
}

