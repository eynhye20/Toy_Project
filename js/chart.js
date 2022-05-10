/* Chart */
type="text/javascript"
var context = document
    .getElementById('barChart')
    .getContext('2d');
var myChart = new Chart(context, {
    type: 'bar', // 차트의 형태
    data: { // 차트에 들어갈 데이터
        labels: [
            //x 축
             '02','04','08','10','12','14','16','18','20','22','24','26','28','30'
        ],
        datasets: [
            { //데이터
                label: '', //차트 제목
                data: [
                    52.000,32.300,23.000,10.000,12.00,6.000,13.500,15.230,10.000,42.500,26.000,40.000,60.000,45.000//x축 label에 대응되는 데이터 값
                ],
                backgroundColor: '#38C976',
            }
        ]
    },
    options: {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true
                    }
                }
            ]
        }
    }
});

var context = document
    .getElementById('doughnut')
    .getContext('2d');
var Chart = new Chart(context, {
    type: 'doughnut', // 차트의 형태
    data: { // 차트에 들어갈 데이터
        datasets: [
            { //데이터
                fill: false, // line 형태일 때, 선 안쪽을 채우는지 안채우는지
                data: [
                   10,8,18,12,9 //x축 label에 대응되는 데이터 값
                ],
                backgroundColor: [
                    //색상
                    '#BD5B00',
                    '#0057BD',
                    '#00BDB2',
                    '#FEC229',
                    '#C4C4C4',
                ],
            }
        ]
    },
});

