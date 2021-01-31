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
    mapTypeId: "terrain",
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

  console.log(overlay)



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

    // setting up booths coords
    // let booth = prompt('Name this Booth').toUpperCase()
    // let boothCoords = JSON.parse(localStorage.getItem('boothCoords')) || []
    // localStorage.setItem('boothCoords', JSON.stringify([...boothCoords, {
    //   id: booth,
    //   lat: mapsMouseEvent.latLng.lat(),
    //   lng: mapsMouseEvent.latLng.lng()
    // }]))
    // infoWindow.setContent(
    // JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
    // JSON.stringify('Booth A03', null, 2)
    // `
    // <a href='#m06'>Booth M06 - Available</a><br/>
    // <a href='#m07'>Booth M07 - Reserved by Bunty Soap</a><br/>
    // <a href='#m08'>Booth M08 - Available</a><br/>
    // `
    // );
    infoWindow.open(map);
  });
}

