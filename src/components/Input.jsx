import style from './input.module.css';
export default function Input({display}){
  return(
      <textarea type="text" className={style.input} value={display} readOnly/>
  );
}