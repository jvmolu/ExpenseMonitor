import ChartBar from './ChartBar';
import './Chart.css'

const Chart = (props) => {

    const values = props.dataPoints.map(dataPoint => dataPoint.value)
    const maxValue = Math.max(...values)

    return (
        <div className="chart">
            {
                props.dataPoints.map((dataPoint) => {
                    let barFillHeight = '0%'

                    if(maxValue > 0)
                    {
                        barFillHeight = String(Math.round((dataPoint.value / maxValue) * 100)) + '%'
                        console.log(dataPoint.label + " has " + barFillHeight)
                    }

                    return <ChartBar key={dataPoint.label} label={dataPoint.label} barFillHeight={barFillHeight}/>
                })
            }
        </div>
    )

}

export default Chart