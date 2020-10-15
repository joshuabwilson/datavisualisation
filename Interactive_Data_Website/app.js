//CHART JS

//Bar Chart - Cases
var ctx = document.getElementById('myChart').getContext("2d");

//defining linear color
var barStroke = ctx.createLinearGradient(700, 0, 120, 0);
barStroke.addColorStop(0, 'rgba(0, 255, 188, 0.6)');
barStroke.addColorStop(1, '#ee1250');

var barFill = ctx.createLinearGradient(700, 0, 120, 0);
barFill.addColorStop(0, "#ee1250");
barFill.addColorStop(1, "rgba(0, 205, 194, 0.6)");

var barFillHover = ctx.createLinearGradient(700, 0, 120, 0);
barFillHover.addColorStop(0, "#ee1250");
barFillHover.addColorStop(1, "rgba(0, 205, 194, 0.6)");

//Cases
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ["USA", "INDIA", "BRAZIL", "RUSSIA", "COLOMBIA", "PERU", "ARGENTINA", "SPAIN", "MEXICO"],
        datasets: [{
            label: "Confirmed Cases",
            backgroundColor: barFill,
			hoverBackgroundColor: barFillHover,
            data: [7305270, 6623815, 4906833, 1225889, 848147, 824985, 790818, 789932, 757953]
        }]
    },
    options: {
        animation: {
            easing: "easeInQuart"
        },
        legend: {
            position: "top",
			display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "#000000",
                    fontStyle: "bold",
                    beginAtZero: true,
                    padding: 15,
                },
                gridLines: {
                    drawTicks: false,
                    display: false,
					color: "transparent",
					zeroLineColor: "transparent"
                }
            }],
            xAxes: [{
                gridLines: {
					display: false,
					color: "transparent",
					zeroLineColor: "transparent"
                },
                ticks: {
                    padding: 15,
					beginAtZero: true,
                    fontColor: "#212121",
                    fontStyle: "bold",
					maxTicksLimit: 20,
                }
            }]
        }
    }
});



//Bar Chart - Virus
var ctx = document.getElementById('myChart2').getContext("2d");
var myChart2 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["BRAZIL", "USA", "RUSSIA", "INDIA", "PERU", "CHINA", "MEXICO", "PAKISTAN", "SWEDEN"],
        datasets: [{
            label: "Increase in cases",
            borderColor: barStroke,
			borderWidth: 1,
            fill: true,
            backgroundColor: barFill,
			hoverBackgroundColor: barFillHover,
            data: [30102, 23290, 8952, 8336, 7386, 4220, 3227, 2429, 2240]
        }]
    },
    options: {
        animation: {
            easing: "easeInQuart"
        },
        legend: {
            position: "top",
			display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "#EEEEEE",
                    fontStyle: "bold",
                    beginAtZero: true,
                    padding: 15,
                },
                gridLines: {
                    drawTicks: false,
                    display: false,
					color: "transparent",
					zeroLineColor: "transparent"
                }
            }],
            xAxes: [{
                gridLines: {
					display: false,
					color: "transparent",
					zeroLineColor: "transparent"
                },
                ticks: {
                    padding: 15,
					beginAtZero: true,
                    fontColor: "#000000",
                    fontStyle: "bold",
					maxTicksLimit: 20,
                }
            }]
        }
    }
});


//Donut Chart
var ctx = document.getElementById('myChart3').getContext("2d");
var data = {
    labels: [
        "Fatalities",
        "Recoveries"
    ],
    datasets: [
        {
            data: [1067469, 27691051],
            borderColor: barStroke,
			borderWidth: 0.5,
            
            backgroundColor: [
                "#ee1250",
                "#00cdc1"
            ],
           
						
						
        }]
};
var options = { 
	cutoutPercentage:40,
};
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: options
});


//Line Chart
var data = {
  labels: ["31st Aug","7th Sep", "14 Sep", "21 Sep", "28 Sep", "5th Oct", "12 Oct"],
  datasets: [{
    fill: false,
    borderColor: barFillHover,
    borderWidth: 2,
    hoverBorderColor: "rgba(33,150,243,1)",
    data: [26792777,28677773,30716851,32774182,34840963,37116257,37423660],
    label: 'fatalities',
    xAxisID: 'xAxis1',
    lineTension: 0
  }]
};
var options = {
  maintainAspectRatio: false,
  scales: {
    yAxes: [{
      type: 'linear',
      position: 'left',
      gridLines: {
        display: true,
        color: "rgba(0,0,0,0.1)" 
      },
      ticks:{
          beginAtZero:false,
          suggestedMin: '50',
          suggestedMax: '62',
        callback: function(value, index, values) {
                        return  value + 'M'
        }
        
        }
    }],
    xAxes:[
        {
          id:'xAxis1',
          type:"category",
          ticks:{
            callback:function(label){
              var area = label.split(";")[0];
              var date = label.split(";")[1];
              return date;
            },
          }
        },
     ]
  }
};
Chart.Line('myChart4', {
  options: options,
  data: data
});

//Bar chart fatal
var ctxBar = document.getElementById('myChart5').getContext('2d');
var barChart = new Chart(ctxBar, {
    type: 'bar',
    data: {
        labels: ['USA', 'Brazil', 'India', 'Mexico', 'UK', 'Italy', 'Peru', 'Spain','France'],
        datasets: [{
            label: 'Fatalities',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [212804,150198, 109150, 83642, 42825,36166, 33223, 32929, 32495]
        }]
    },
    options: {}
});

		
