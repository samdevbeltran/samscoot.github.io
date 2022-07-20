function getVehicleHtml(obj){
    return '<div class="vehicle-container">'+
            '<div class="veh-img-cont">'+
                '<picture>'+
                    '<img src="images/'+obj["src"]+'" alt="logo">'+
                '</picture>'+
            '</div>'+
            '<div class="veh-info-cont">'+
                '<table>'+
                    '<tbody>'+
                        '<tr>'+
                            '<td class="veh-name">'+obj["model"]+'</td>'+
                            '<td class="yellow-backG" style="text-align: center;" colspan="2"><strong>Reservation</strong></td>'+
                            '<td class="blue-backG" style="text-align: center;" colspan="2"><strong>Walk-In</strong></td>'+
                        '</tr>'+
                        '<tr>'+
                            '<td style="text-align: center;"><strong>Max. Persons</strong></td>'+
                            '<td class="yellow-backG" style="text-align: center;"><strong>Half Day<br>(3 hrs)</strong></td>'+
                            '<td class="yellow-backG" style="text-align: center;"><strong>Full Day</strong></td>'+
                            '<td class="blue-backG" style="text-align: center;"><strong>Half Day<br>(3 hrs)</strong></td>'+
                            '<td class="blue-backG" style="text-align: center;"><strong>Full Day</strong></td>'+
                        '</tr>'+
                        '<tr>'+
                            '<td class="veh-people" style="text-align: center;">'+obj["max_person"]+'</td>'+
                            '<td class="veh-re-half" style="text-align: center;">'+ obj["reservation"]["half-day"]+'</td>'+
                            '<td class="veh-re-full" style="text-align: center;">'+obj["reservation"]["full-day"]+'</td>'+
                            '<td class="veh-wa-half" style="text-align: center;">'+obj["walk-in"]["half-day"]+'</td>'+
                            '<td class="veh-wa-full" style="text-align: center;">'+obj["walk-in"]["full-day"]+'</td>'+
                        '</tr>'+
                    '</tbody>'+
                '</table>'+
                '<button>Reserve</button>'+
            '</div>'+
        '</div>';
}
const url = "https://samdevbeltran.github.io/samscoot.github.io/json/scooter-api.json"

fetch(url).then(response => response.json() ).then(obj =>{
    let honda = document.querySelector("#honda-content");
    let atv = document.querySelector("#ATV-content");
    let jeep = document.querySelector("#jeep-content");

    obj["honda-motor-scooters"].forEach(element => {
        honda.innerHTML += getVehicleHtml(element);
    });

    obj["ATV"].forEach(element => {
        atv.innerHTML += getVehicleHtml(element);
    });

    obj["Jeep rentals"].forEach(element => {
        jeep.innerHTML += getVehicleHtml(element);
    });
})
