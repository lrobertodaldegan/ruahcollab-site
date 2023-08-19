import { useState, useEffect } from 'react';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Button/Button';
import './DemandCard.css';
import {put, post, del} from '../../Utils/restUtils';

const DemandCard = ({item=undefined, onSave=()=>null, onDelete=()=>null}) => {
  const [titulo, setTitulo] = useState('');
  const [desc, setDesc] = useState('');
  const [recorrencia, setRecorrencia] = useState('');

  useEffect(()=>{
    if(item && item !== null){
      setTitulo(item.title);
      setDesc(item.resume);
      setRecorrencia(item.recurrence);
    }
  }, []);

  const save = () => {
    let rec = recorrencia == 0 ? 'Pontual' : recorrencia;

    if(item && item !== null){
      put('/demand/' + item.id, {title:titulo, resume:desc, recurrence:rec})
      .then(response => {
        if(response.status === 200)
          onSave({error:false, message:'Dados salvos com sucesso!'});
        else
          onSave({error:true, message:'Houve um erro ao tentar atualizar os dados! Tente novamente!'});
      });
    }else{
      post('/demand', {title:titulo, resume:desc, recurrence:rec})
      .then(response => {
        if(response.status === 201){
          onSave({error:false, message:'Dados salvos com sucesso!'});

          setTitulo('');
          setDesc('');
          setRecorrencia('');
        } else{
          onSave({error:true, message:'Houve um erro ao tentar salvar os dados! Tente novamente!'});
        }
      });
    }
  }

  const dell = () => {
    del('/demand/' + item.id)
    .then(response => {
      if(response.status === 200)
        onDelete({error:false, message:'Demanda removida com sucesso!'});
      else
        onDelete({error:true, message:'Houve um erro ao tentar remover os dados! Tente novamente!'});
    });
  }

  const loadDelButton = () => {
    if(item && item !== null){
      return (
        <div className='row'>
          <div className='col removeBtnWrap'>
            <Button label='Remover'  onClick={() => dell()}/>
          </div>
        </div>
      );
    } else {
      return (<></>);
    }
  }

  return (
    <div className='demandCard'>
      <div className='row'>
        <div className='col'>
          <input type='text' placeholder='Título da nova demanda'
              className='input-title'
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
              <textarea type='text' placeholder='Descrição da nova demanda'
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
                    <option value="0">Recorrência (se não selecionada, consideraremos 'Pontual')</option>    
                    <option value="Pontual">Pontual</option>
                    <option value="Diária">Diária</option>
                    <option value="Semanal">Semanal</option>
                    <option value="Mensal">Mensal</option>
                    <option value="Bimestral">Bimestral</option>
                    <option value="Trimestral">Trimestral</option>
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
              <Button label='Salvar' onClick={() => save()}/>
            </div>
          </div>
          {loadDelButton()}
        </div>
      </div>
    </div>
  );
}

export default DemandCard;