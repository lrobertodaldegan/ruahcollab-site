import { useState, useEffect } from 'react';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Button/Button';
import './DemandCard.css';

const DemandCard = ({item}) => {
  const [titulo, setTitulo] = useState('');
  const [desc, setDesc] = useState('');
  const [recorrencia, setRecorrencia] = useState('');

  useEffect(()=>{
    if(item && item !== null){
      setTitulo(item.titulo);
      setDesc(item.desc);
      setRecorrencia(item.recorrencia);
    }
  }, []);

  return (
    <div className='demandCard' key={item.id}>
      <div className='row'>
        <div className='col'>
          <input type='text' placeholder='Título'
              value={titulo} 
              onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
      </div>
      <div className='row'>
        <div className='col-8'>
          <div className='row'>
            <div className='col'>
              <p className='desc'>
              <input type='text'  placeholder='Descrição'
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
              />
              </p>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <ul>
                <li>
                  <FontAwesomeIcon icon={faCalendarDays}/>
                  <select value={recorrencia} 
                      onChange={(e) => setRecorrencia(e.target.value)}>
                    <option value="Diária">Diária</option>
                    <option value="Semanal">Semanal</option>
                    <option value="Mensal">Mensal</option>
                    <option value="Anual">Anual</option>
                  </select>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className='row'>
            <div className='col saveBtnWrap'>
              <Button label='Salvar'/>
            </div>
          </div>
          <div className='row'>
            <div className='col removeBtnWrap'>
              <Button label='Remover'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DemandCard;