
function india()
{
  var request = new XMLHttpRequest()
  request.open('GET', 'https://api.covid19india.org/data.json',  true)
  l = []
  request.onload = function () {
    var data = JSON.parse(this.response)
    if (request.status >= 200 && request.status < 400) {
        var i = 0
        p = [0, 0, 0]
        for(i=0;i<15;i++)
        {
          l[i] = JSON.parse(JSON.stringify(p));
        }
        data.cases_time_series.forEach((movie) => {
          var a = movie.dateymd;
          var b = a.slice(0, 4)
          var c = Number(a.slice(5, 7))
          if(b == "2020")
          {
            l[c-1][0] += Number(movie.dailyconfirmed)
            l[c-1][1] += Number(movie.dailyrecovered)
            l[c-1][2] += Number(movie.dailydeceased)
          }
          else
          {
            l[c+11][0] += Number(movie.dailyconfirmed)
            l[c+11][1] += Number(movie.dailyrecovered)
            l[c+11][2] += Number(movie.dailydeceased)
          }
        })
    }
    t_c = []
    t_r = []
    t_d = []
    for(i=0;i<15;i++)
    {
      t_c.push(l[i][0])
      t_r.push(l[i][1])
      t_d.push(l[i][2])
    }
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',
      // The data for our dataset
      data: {
          datasets: [{
              label: 'Confirmed',
              fill: false,
              borderColor: 'rgb(255, 0, 0)',
              data: t_c
          }, {
            label: 'Recovered',
            fill: false,
            borderColor: 'rgb(0, 255, 0)',
            data: t_r,
          },
          {
            label: 'Deceased',
            fill: false,
            borderColor: 'rgb(0, 0, 255)',
            data: t_d,
          }],
          labels: ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December','January_21', 'February_21', 'March_21']
      },
      // Configuration options go here
      options: {
        events: ['click']
        }
    });
  }
  request.send()
}