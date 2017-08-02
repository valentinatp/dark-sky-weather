$(document).ready(function() {
  
  $("#btn").click(function(e){
      e.preventDefault();
      window.open("temperatura.html", "_self", false)
  });


  $.ajax({
    url: 'https://api.darksky.net/forecast/8fe9d2d70d0d13ff0c4d66bd56b0a9ef/37.8267,-122.4233',
    type: 'GET',
    dataType: 'jsonp',
  })
  .done(function(data) {
    console.log(data);
      
      function calculoCelsius(a,b){
        var calculo = parseInt(data.currently.temperature) - 32 / (1.8);
        return (Math.round(calculo) + '°');
      }

        $('#imagen').append(data.currently.icon);
        $('#grado').append(calculoCelsius);
        $('#wind').append(data.currently.windSpeed + 'm/s');
        $('#humidity').append(data.currently.apparentTemperature + '%');
        $("#uv").append(data.currently.uvIndex);
        $("#pressure").append(data.currently.pressure + ' hPa');

  })

  .fail(function() {
    console.log("error");
  })



});
