import React from 'react'
import './ActionButComponent.css'
import Button from '../../../components/Button/Button'
import { useNavigate } from 'react-router-dom'


const ActionButComponent = () => {

  const navigate = useNavigate();
  
    const handleClickCreate =() =>{
      navigate('./CreatingTask');
    }
    const handleClickFind =() =>{
      navigate('./FindTask');
    }


  return (
    <div className='action_component'>
        <div className="find_help_component">
            <p>Ищите проверенных специалистов или выгодные заказы с помощью сервиса</p>

            <div className="action_button">
                <Button   
                    text="Найти исполнителя" 
                    onClick={handleClickCreate}
                    style={{ backgroundColor: '#EE5300',fontWeight:'bold', color: 'black', border: '2px solid #EE5300', width:'34%', height:'8vh' }} 
                />
                <Button
                    text="Стать исполнителем" 
                    onClick={handleClickFind}
                    style={{ backgroundColor: 'white',fontWeight:'bold', color: 'black', border: '2px solid #EE5300',width:'34%',height:'8vh' }} />
            </div>
        </div>
    </div>
  )
}

export default ActionButComponent