import { Component } from 'react'

import './form.css'

class Form extends Component{

    render() {                    
        return (
            <div className='form-container'>

            <form className='form-input'>

            <div className='form-block'>
            <label htmlFor="name">Название</label>
            <input placeholder='Например, Москва' id="cityName" name="cityName"/>
                </div>
                
            <div className='form-block'>
            <label htmlFor="time-zone">Временная зона</label>
            <input placeholder='-3' type='number' id="timeZone" name="timeZone"/>             
                </div>
                </form>

            <button type="submit" className='form-block-btn'>Добавить</button>  
            </div>
        )
   }

}

            

export default Form

