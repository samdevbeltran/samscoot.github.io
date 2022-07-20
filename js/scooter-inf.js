function getVehicleHtml(){
    return '<div class="scoot-grid">'+
        '<div class="vehicle-container">'+
            '<div class="veh-img-cont">'+
                '<picture>'+
                    '<source media="(max-width:767px)" srcset="images/honda-metro-350.jpg">'+
                    '<img src="images/honda-metro-350.jpg" alt="logo">'+
                '</picture>'+
            '</div>'+
            '<div class="veh-info-cont">'+
                '<table>'+
                    '<tbody>'+
                        '<tr>'+
                            '<td class="veh-name"></td>'+
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
                            '<td class="veh-people" style="text-align: center;">1</td>'+
                            '<td class="veh-re-half" style="text-align: center;">$20</td>'+
                            '<td class="veh-re-full" style="text-align: center;">$30</td>'+
                            '<td class="veh-wa-half" style="text-align: center;">$25</td>'+
                            '<td class="veh-wa-full" style="text-align: center;">$35</td>'+
                        '</tr>'+
                    '</tbody>'+
                '</table>'+
                '<button>Reserve</button>'+
            '</div>'+
        '</div>'+
    '</div>';
}

fetch('../json/scooter-api.json').then(response =>{
    
    console.log(response.json())

})
document.querySelector(".honda-section").innerHTML += getVehicleHtml();