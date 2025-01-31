import React from 'react'
import './HelpForm.css'
import Button from '../Button/Button'

const HelpForm = () => {
    
  return (
    <div className='helpForm_component'>
        <div className="text_information">
            <p><b>Помочь с выбором ответственного исполнителя?</b></p>
            <p>Привет, быстрее оформляй заказ и мы быстро найдем хорошего исполнителя</p>
        </div>
        
       <Button 
        text="Оформить заявку"
        style={{backgroundColor: '#EE5300', color:'black',border: '2px solid #EE5300', width: '150px',
            height: '50px'}}
        
            />
    </div>
  )
}

export default HelpForm