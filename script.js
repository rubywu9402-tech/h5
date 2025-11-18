Highcharts.chart('container', {

    title: {
        text: '歷年來台旅客',
        align: 'left'
    },

    subtitle: {
        text: '資料來源: <a href="https://stat.taiwan.net.tw/statistics/year/inbound/nationality" target="_blank">交通部觀光署統計資料庫</a>.',
        align: 'left'
    },

    yAxis: {
        title: {
            text: '旅客人次'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2015 to 2024'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2015
        }
    },

    series: [{
        name: '日本',
        data: [
          1629193,1896456,1895546,1966303,2162426,268798,9910,87133,926140,1318372
        ]
    }, {
        name: '韓國',
        data: [
           662670,887412,1055207,1021530,1245144,179190,3165,51480,745885,1010035
        ]
    }, {
        name: '印度',
        data: [
            36833,38331,40846,45243,48575,6865,1945,9929,36968,45674
        ]
    }


    ],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});