const labels = [
    'Wins',
    'Draws',
    'Loses'
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'Matches',
      backgroundColor: [
        'rgb(255, 255, 255)',
        'rgb(0, 0, 0)',
        'rgb(255, 0, 0)'
      ],
      borderColor: 'rgb(100, 100, 100)',
      data: [34,9,13],
    }]
  };

  const config = {
    type: 'pie',
    data: data,
    options: {}
  };


  const myChart = new Chart(
    document.getElementById('seasonChart'),
    config
  );