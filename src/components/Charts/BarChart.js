import React from 'react'
import { Bar } from "react-chartjs-2";

function BarChart({title1, title2, value1, value2, title, ylabel}) {
    return (
        <div className="chart">
            <Bar
                data={{
                labels: [title1, title2],
                datasets: [
                    {
                    label: title,
                    backgroundColor: '#c21e63',
                    data: [value1, value2],
                    },
                ],
                }}
                options={{
                scales: {
                    yAxes: {
                        title: {
                            display: true,
                            text: ylabel,
                            font: {
                                size: 15
                            },
                            color: '#c21e63'
                        }},
                },
                responsive: true,
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Recommendation',
                    fontSize: 50,
                },
                }}
            />
     </div>
    )
}

export default BarChart
