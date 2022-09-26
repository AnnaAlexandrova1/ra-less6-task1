import {Component} from 'react'
import './watch.css'

class Watch extends Component{
    constructor(props) {
        super(props)
        this.cityName = this.props.cityName;
        this.timeZone = this.props.timeZone;
        this.onDelete = this.props.onDelete;
        this.state = {
        hh: null,
        mm: null,
        ss: null
     }
    }

    onUpdateClock = () => {
            const deg = 6;
            let day = new Date();
            const cz = day.getTimezoneOffset()/60
            let hh = (day.getHours() + (cz > 0 ? -cz : cz) + this.props.timeZone) * 30;
            let mm = day.getMinutes() * deg;
            let ss = day.getSeconds() * deg;

            this.setState({
            hh,
            mm,
            ss
            })
    }

    componentDidMount() {
        this.timerId = setInterval(() => this.onUpdateClock(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timerId, this.props.id)
    }
    
   

    render() {
        const { hh, mm, ss } = this.state
        return (
            <div className='clock-elem'>
                 <span className='city-name'>{this.props.cityName}</span>
                <span className="material-symbols-outlined" onClick={() => {
                    this.props.onDelete(this.props.id)
                }}>
                 cancel
                </span>

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
                </div>
        )
        
    }

}

export default Watch