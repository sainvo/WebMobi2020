import React, {useState} from 'react'
import ReactDOM from 'react-dom'


const Button = ({onClick, text}) => (
    <button onClick = {onClick}>
        {text}
    </button>
)

const Statistic = (props) => {
    return(
        <tr>            
        <td>{props.text}</td> 
        <td>{props.value}</td>
        </tr>
    )

}

const Stats = (props) => {
    console.log(props)
    let good = props.clicksByType[0]
    let neutral = props.clicksByType[1]
    let bad = props.clicksByType[2]
    let diff = good*1 + (-1*bad) + neutral*0//good === 1 and bad === -1, neutral is 0 weight
    let all = props.clicksByType[3].length
    let ave = diff/all

    if (props.clicksByType[3].length === 0){
        return(
            <div>
                Dear customer, we value your opinion. Please, give us feedback by pushing one of the buttons.
            </div> 
        )
    }
    return(
        <table>
            <tbody>
                <Statistic text="good" value ={props.clicksByType[0]}/>
                <Statistic text="neutral" value ={props.clicksByType[1]}/>
                <Statistic text="bad" value={props.clicksByType[2]}/>
                <Statistic text="Average:" value= {Number(ave).toFixed(1)}/>
                <Statistic text ="Positive feedback:" value= {Number(good/all).toLocaleString(undefined,{style:'percent', minimumFractionDigits:1})}  />
            </tbody>
        </table>
    )
}

//THE APP AKA MAIN COMPONENT
const App = (props) => {
    //save clicks of each button to own state
    const[good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const [allClicks, setAll] = useState([])
    const clicksByType = [good,neutral,bad,allClicks]
    
    //EVENT HANDLERS
    const handleGood =() =>{
        setAll(allClicks.concat('G'))
        setGood(good +1)
    }
    const handleNeutral =() => {
        setAll(allClicks.concat('N'))
        setNeutral(neutral +1)
    }
    const handleBad = () => {
        setAll(allClicks.concat('B'))
        setBad(bad +1)
    }
   
    return(
        <div> 
            <h1><p><b>Give feedback</b></p></h1>
            <div>
                <Button onClick={handleGood} text='good'/>
                <Button onClick={handleNeutral} text='neutral'/>
                <Button onClick={handleBad} text='bad' />
            </div>
            <h1><p><b>Statistics</b></p></h1>
            <div>
                <Stats clicksByType = {clicksByType}/>
            </div>
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));