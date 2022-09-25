import {Component} from 'react'
import './watch.css'

class Watch extends Component{
    state = {
        hh: null,
        mm: null,
        ss: null
    }

    onUpdateClock = () => {
        const deg = 6;
        let day = new Date();
        let hh = day.getHours() * 30;
        let mm = day.getMinutes() * deg;
        let ss = day.getSeconds() * deg;

        this.setState({
            hh,
            mm,
            ss
        })
    }

    componentDidMount() {
        this.onUpdateClock()
    }
    

    render() {
        const { hh, mm, ss } = this.state
        return (
            <div className="clock">
            <div className="hour">
            <div className="hr" id="hr" style={{'transform': `rotateZ(${(hh) + (mm/12)}deg)`}}></div>
            </div>
            <div className="min">
                    <div className="mn" id="mn" style={{ 'transform': `rotateZ(${mm}deg)` }}></div>
            </div>
            <div className="sec">
            <div className="sc" id="sc" style={{ 'transform': `rotateZ(${ss}deg)` }}></div>
             </div>
            </div>
        )
        
    }

}

export default Watch