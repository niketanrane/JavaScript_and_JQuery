// author: Niketan Rane 
(function (){
    var hotel = {
        name: 'Park',
        roomRate: 240,
        discount: 15,
        offerPrice: function () {
            return this.roomRate * ((100 - this.discount) / 100);
        }
    }

    // Write hotel details to page
    var hotelName, roomRate, specialRate;
    hotelName = document.getElementById('hotelName');
    roomRate = document.getElementById('roomRate');
    specialRate = document.getElementById('specialRate');

    hotelName.textContent = hotel.name;
    roomRate.textContent = '$' + hotel.roomRate.toFixed(2);
    specialRate.textContent = '$' + hotel.offerPrice();

    function offerExpires(today) {
        var weekFromToday, day, date, month, year, dayNames, monthNames;
        dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

        day = dayNames[weekFromToday.getDay()];
        date = weekFromToday.getDate();
        month = monthNames[weekFromToday.getMonth()];
        year = weekFromToday.getFullYear();

        var msg = 'Offer expires next ';
        msg += day;
        msg += '<br>(' + date + ' ' + month + ' ' + year + ' )';
        return msg;
    }

    var today = new Date();
    var elEnds = document.getElementById('offerEnds');
    elEnds.innerHTML = offerExpires(today);

}());