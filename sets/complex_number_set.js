
const ctx = document.getElementById('cartesian').getContext('2d');

var complex_number = [3, 8]
var origin = [0,0];
const data = {
    datasets: [{
      label: 'Complex Number plot',
      data: [ {
                x: complex_number[0],
                y: complex_number[1]
             },
             {
                x: origin[0],
                y: origin[0]
            }
        ],
      backgroundColor: 'rgb(255, 99, 132)'
    }],
  };

  
  const config = {
    type: 'scatter',
    data: data,   
    options: {
      scales: {       
        ////
        x: {
            min: 0,
            max: 4,
            display: true,
            title: {
              display: true,
              text: 'Real part',
              color: '#0000FF',
              font: {
                family: 'Comic Sans MS',
                size: 20,
                weight: 'bold',
                lineHeight: 1.2,
              },
              padding: {top: 20, left: 0, right: 0, bottom: 0}
            }
          }, 

        ////
        y: {
            display: true,
            min: 0,
            max: 9,
            title: {
              display: true,
              text: 'Imaginary part',
              color: '#FF0000',
              font: {
                family: 'Comic Sans MS',
                size: 20,
                style: 'normal',
                lineHeight: 1.2
              },
              padding: {top: 30, left: 0, right: 0, bottom: 0}
            }
          }
        ////
      }
    }
  };


var my_chart = new Chart(ctx,config);

