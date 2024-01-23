
import { Container } from "semantic-ui-react";
import { useState} from "react";
import { Button } from "keep-react";

export default function Boton() {
 const [contador, setContador] = useState(localStorage.getItem("calculatorValue") || '');
 const [click, setClick] = useState(false)

 const btn = () => {
  setClick(!click)
 } 
 const saveInputValue = () => {
    localStorage.setItem("calculatorValue", contador);
 };

 const Click = (contar) => {
    setContador(contador + contar);
    saveInputValue();
 };

 const Calcular = () => {
    try {
      setContador(eval(contador).toString());
      saveInputValue();
    } catch {
      setContador('erro');
    }
 };

 const Clear = () => {
    setContador('');
    saveInputValue();
 };

 const Eliminar = () => {
    try{
      setContador(contador.slice(0, -1));
      saveInputValue();
    }
    catch(error){
      console.log(error)
    }
 };
 
 return (
  <Container textAlign="center" className="container">
  {click ? <Button size='md' className="operaciones" color='info' onClick={btn}>On</Button> :
  ''}
    {
      click ? <p className="on">Calculadora apagada</p> : 
      <div className="row">
      <div className="name">
        <div className="h1">
        <h2>Calculadora</h2>
        </div>
        <div className="value">
        <input type="text" value={contador} />
        </div>
      </div>
      <div className="botons">
        {click ? '' : <Button size='md' className="off" color='error' onClick={btn}>off</Button> }
        <button className="ui button blue" onClick={()=> Click('7')}>7</button>
        <button className="ui button blue" onClick={()=> Click('8')}>8</button>
        <button className="ui button blue" onClick={()=> Click('9')}>9</button>
        <Button className="error"size="md" color="info" onClick={Clear} >Clear</Button>
        </div>
      
      <div className="boton">
        <button className="ui button blue" onClick={()=> Click('4')}>4</button>
        <button className="ui button blue" onClick={()=> Click('5')}>5</button>
        <button className="ui button blue" onClick={()=> Click('6')}>6</button>
        <Button size="md" className="operaciones"color="info"  onClick={()=> Click('*')}>*</Button>
        <Button size="md" className="operaciones"color="info"  onClick={()=> Click('.')}>-</Button>
      </div>
      
      <div className="boton">
        <button className="ui button blue" onClick={()=> Click('7')}>7</button>
        <button className="ui button blue" onClick={()=> Click('8')}>8</button>
        <button className="ui button blue" onClick={()=> Click('9')}>9</button>
        <Button size="md" className="operaciones"color="info"  onClick={()=> Click('/')}>/</Button>
        <Button size='md' color='info' className="operaciones" onClick={Eliminar}><i className="bi bi-backspace"></i></Button>
      </div>
      
      <div className="boton">
        <button className="ui button blue" onClick={()=> Click('0')}>0</button>
        <button className="ui button blue" onClick={()=> Click('00')}>00</button>
        <Button size="md" className="operaciones" color="info" onClick={()=> Click('+')}>+</Button>
        <Button size="md" className="igual" color="success" onClick={Calcular}>=</Button>
      </div>
      </div>
    }
 
</Container>
);
}