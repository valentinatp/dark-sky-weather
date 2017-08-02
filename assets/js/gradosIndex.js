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
  .done(function(data){

      function calculoCelsiusUno(a,b){
        var calculoUno = parseInt(data.daily.data[0].temperatureMin) - 32 / (1.8);
        var calculoDos = parseInt(data.daily.data[0].temperatureMax) - 32 / (1.8)
        var res = (Math.round(calculoUno) + '°') + ' ' + '-' + ' '+ (Math.round(calculoDos) + '°');
        return res;
      }

      function calculoCelsiusDos(a,b){
        var calculoUno = parseInt(data.daily.data[1].temperatureMin) - 32 / (1.8);
        var calculoDos = parseInt(data.daily.data[1].temperatureMax) - 32 / (1.8)
        var res = (Math.round(calculoUno) + '°') + ' ' + '-' + ' '+ (Math.round(calculoDos) + '°');
        return res;
      }

      function calculoCelsiusTres(a,b){
        var calculoUno = parseInt(data.daily.data[2].temperatureMin) - 32 / (1.8);
        var calculoDos = parseInt(data.daily.data[2].temperatureMax) - 32 / (1.8)
        var res = (Math.round(calculoUno) + '°') + ' ' + '-' + ' '+ (Math.round(calculoDos) + '°');
        return res;
      }

      function calculoCelsiusCuatro(a,b){
        var calculoUno = parseInt(data.daily.data[3].temperatureMin) - 32 / (1.8);
        var calculoDos = parseInt(data.daily.data[3].temperatureMax) - 32 / (1.8)
        var res = (Math.round(calculoUno) + '°') + ' ' + '-' + ' '+ (Math.round(calculoDos) + '°');
        return res;
      }

      function calculoCelsiusCinco(a,b){
        var calculoUno = parseInt(data.daily.data[4].temperatureMin) - 32 / (1.8);
        var calculoDos = parseInt(data.daily.data[4].temperatureMax) - 32 / (1.8)
        var res = (Math.round(calculoUno) + '°') + ' ' + '-' + ' '+ (Math.round(calculoDos) + '°');
        return res;
      }

      function calculoCelsiusSeis(a,b){
        var calculoUno = parseInt(data.daily.data[5].temperatureMin) - 32 / (1.8);
        var calculoDos = parseInt(data.daily.data[5].temperatureMax) - 32 / (1.8)
        var res = (Math.round(calculoUno) + '°') + ' ' + '-' + ' '+ (Math.round(calculoDos) + '°');
        return res;
      }

      function calculoCelsiusSiete(a,b){
        var calculoUno = parseInt(data.daily.data[6].temperatureMin) - 32 / (1.8);
        var calculoDos = parseInt(data.daily.data[6].temperatureMax) - 32 / (1.8)
        var res = (Math.round(calculoUno) + '°') + ' ' + '-' + ' '+ (Math.round(calculoDos) + '°');
        return res;
      }

      $("#monday").append(calculoCelsiusUno);
      $("#tuesday").append(calculoCelsiusDos);
      $("#wednesday").append(calculoCelsiusTres);
      $("#thursday").append(calculoCelsiusCuatro);
      $("#friday").append(calculoCelsiusCinco);
      $("#saturday").append(calculoCelsiusSeis);
      $("#sunday").append(calculoCelsiusSiete);

  })
  .fail(function() {
    console.log("error");
  })



});
