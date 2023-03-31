const labels = [
    'HTML5',
    'CSS',
    'JAVASCRIPT',
    'PWA',
    'PHP',
    'MYSQL',
    'MARIADB',
    'INGLES INTERMEDIO',
];

// Configuracion de los datos
const data = {
  labels: labels,
  datasets: [{
    label: 'Mis Habilidades',
    data: [90, 80, 70, 80, 70, 80, 70, 50],
    backgroundColor: [
      'rgba(255, 99, 132, 0.7)',
      'rgba(255, 159, 64, 0.7)',
      'rgba(255, 205, 86, 0.7)',
      'rgba(75, 192, 192, 0.7)',
      'rgba(54, 162, 235, 0.7)',
      'rgba(153, 102, 255,0.7)',
      'rgba(201, 203, 207,0.7)',
      'rgba(115, 254, 90, 0.7)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)',
      'rgba(115, 254, 90)'
    ],
    borderWidth: 2,
  }]
};

// Configuracion de barras
const config = {
    type: 'bar',
    data,
    options: {
      // Para barras en herizontal
      indexAxis: 'y',
      scales:{
        // propiedades y
        y:{
          ticks:{
            color:'#FFFFFF'
          }
        },
        // propiedades y
        x:{
          ticks:{
            color:"#FFFFFF"
          }
        }
      }
    }
};

const myChart = new Chart(
  document.getElementById('myChart'),
  config
);