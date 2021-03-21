function states(name)
{
    // const app = document.getElementById("root")
    var request = new XMLHttpRequest()
    request.open('GET', 'https://api.covid19india.org/states_daily.json', true)
    l = []
    request.onload = function() {
        var data = JSON.parse(this.response)
        if((request.status >= 200) && (request.status < 400)) {
            var i = 0
            var j = 0
            p = [0, 0, 0]
            for(i=0;i<13;i++)
            {
                l[i] = JSON.parse(JSON.stringify(p));
            }
            data.states_daily.forEach((movie) => {
                var a = movie.dateymd
                var b = a.slice(0, 4)
                var c = Number(a.slice(5, 7))
                if(b == '2020')
                {
                    l[c-3][j] += Number(movie[name])
                }
                else
                {
                    l[c+9][j] += Number(movie[name])
                }
                j++;
                if(j == 3)
                {
                    j = 0;
                }
            })
        }
        t_c = []
        t_r = []
        t_d = []
        for(i=0;i<13;i++)
        {
          t_c.push(l[i][0])
          t_r.push(l[i][1])
          t_d.push(l[i][2])
        }
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
          type: 'line',
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
              labels: ['March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January_21', 'February_21', 'March_21']
          },
          options: {
            events: ['click']
          }
        });
    }
    request.send()
}