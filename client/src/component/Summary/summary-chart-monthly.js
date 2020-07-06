import React from 'react';
import { Line } from 'react-chartjs-2';

const state = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
        '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
        '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
    datasets: [
        {
            label: 'Calorie consumed',
            backgroundColor: 'rgba(144, 193, 227, 0.5)',
            borderColor: 'rgba(0,0,0,0.5)',
            borderWidth: 2,
            data: [43, 25, 74, 35, 26, 56, 89, 120, 109, 23,
                43, 25, 74, 35, 26, 56, 89, 120, 109, 23,
                43, 25, 74, 35, 26, 56, 89, 120, 109, 23]
        },
        {
            label: 'Calorie suggested',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderColor: 'rgba(235, 146, 133, 1)',
            borderWidth: 2,
            data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
                100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
                100, 100, 100, 100, 100, 100, 100, 100, 100, 100]
        }
    ]
}

const ChartLineMonthly = () => {

    return (
        <div>
            <Line
                data={state}
                width={10}
                height={200}
                options={{
                    title: {
                        display: true,
                        text: 'Monthly Calorie Report',
                        fontSize: 25
                    },
                    legend: {
                        display: false,
                        position: 'right'
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                min: 0, // 스케일에 대한 최솟갓 설정, 0 부터 시작
                                stepSize: 5, // 스케일에 대한 사용자 고정 정의 값
                            }
                        }]
                    },
                    maintainAspectRatio: false // false로 설정 시 사용자 정의 크기에 따라 그래프 크기가 결정됨.
                }
                }
            />
        </div>
    )
}

export default ChartLineMonthly;