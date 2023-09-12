document.addEventListener('DOMContentLoaded', function () {
    const urlJSON = 'data.json';

    const graficoBarras = document.getElementById('engagement');
    const chartEngagement = echarts.init(graficoBarras);
    const data = {};
    const optionsEngagement = {
        tooltip: {
            trigger: 'item'
          },
          legend: {
            top: '5%',
            left: 'center',
            selectedMode: false
          },
          series: [
            {
              name: '',
              type: 'pie',
              radius: ['40%', '70%'],
              center: ['50%', '70%'],
              // adjust the start angle
              startAngle: 180,
              label: {
                show: true,
                formatter(param) {
                  // correct the percentage
                  return param.name + ' (' + param.percent * 2 + '%)';
                }
              },
              data: [
                { value: 1048, name: 'Search Engine' },
                { value: 735, name: 'Direct' },
                { value: 580, name: 'Email' },
                { value: 484, name: 'Union Ads' },
                { value: 300, name: 'Video Ads' },
                {
                  // make an record to fill the bottom 50%
                  value: 1048 + 735 + 580 + 484 + 300,
                  itemStyle: {
                    // stop the chart from rendering this piece
                    color: 'none',
                    decal: {
                      symbol: 'none'
                    }
                  },
                  label: {
                    show: false
                  }
                }
              ]
            }
          ]
    };
    chartEngagement.setOption(optionsEngagement);

    const graficoFranja = document.getElementById('franja');
    const chartFranja = echarts.init(graficoFranja);
    const dataFranja = {
        categories: ['Categoría A', 'Categoría B', 'Categoría C', 'Categoría D', 'Categoría E'],
        values: [25, 40, 15, 30, 55]
    };
    const optionsFranja = {
        title: {
            text: ''
        },
        tooltip: {},
        xAxis: {
            data: dataFranja.categories
        },
        yAxis: {},
        series: [{
            name: 'Valor',
            type: 'bar',
            data: dataFranja.values
        }]
    };
    chartFranja.setOption(optionsFranja);

    const graficoDsitribucion = document.getElementById('distribucion');
    const chartDistribucion = echarts.init(graficoDsitribucion);
    const dataDistribucion = {};
    const optionsDistribucion = {
        title: {
            text: ''
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          legend: {},
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01]
          },
          yAxis: {
            type: 'category',
            data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World']
          },
          series: [
            {
              name: 'Text',
              type: 'bar',
              data: [19325, 23438, 31000, 121594, 134141, 681807]
            }
          ]
    };
    chartDistribucion.setOption(optionsDistribucion);

    const graficoGenero = document.getElementById('genero');
    const chartGenero = echarts.init(graficoGenero);
    const datosGenero = {};
    const optionsGenero = {
        title: {
            text: '',
            subtext: '',
            left: 'center'
          },
          tooltip: {
            trigger: 'item'
          },
          legend: {
            orient: 'vertical',
            left: 'left'
          },
          series: [
            {
              name: 'Access From',
              type: 'pie',
              radius: '50%',
              data: [
                { value: 1048, name: 'Mujer' },
                { value: 735, name: 'Hombre' },
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
    };
    chartGenero.setOption(optionsGenero);

    const graficoEdad = document.getElementById('edad');
    const chartEdad = echarts.init(graficoEdad);
    const datosEdad = {};
    const optionsEdad = {
        title: {
            text: ''
          },
          legend: {
            data: ['Visitas']
          },
          radar: {
            // shape: 'circle',
            indicator: [
              { name: '18-25', max: 6500 },
              { name: '25-32', max: 16000 },
              { name: '32-40', max: 30000 },
              { name: '40-48', max: 38000 },
              { name: '48-56', max: 52000 },
              { name: '56-64', max: 25000 },
              { name: '+65', max: 25000 }
            ]
          },
          series: [
            {
              name: 'Budget vs spending',
              type: 'radar',
              data: [
                {
                  value: [4200, 3000, 20000, 35000, 50000, 18000],
                  name: 'Visitas'
                },
              ]
            }
          ]
    };
    chartEdad.setOption(optionsEdad);

    const graficoPais = document.getElementById('pais');
    const chartPais = echarts.init(graficoPais);
    const datosPais = {};
    const optionsPais = {
        title: [
            {
              text: ''
            }
          ],
          polar: {
            radius: [30, '80%']
          },
          radiusAxis: {
            max: 4
          },
          angleAxis: {
            type: 'category',
            data: ['a', 'b', 'c', 'd'],
            startAngle: 75
          },
          tooltip: {},
          series: {
            type: 'bar',
            data: [2, 1.2, 2.4, 3.6],
            coordinateSystem: 'polar',
            label: {
              show: true,
              position: 'middle',
              formatter: '{b}: {c}'
            }
          },
          animation: false
    };
    chartPais.setOption(optionsPais);

    // Simular una petición AJAX para obtener los datos del JSON
    fetch(urlJSON)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            
            
        });


});
