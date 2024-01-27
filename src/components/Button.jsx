import style from './button.module.css';

export default function Button({onButtonClick}){
  return (
    <div className={style.btn} onClick={onButtonClick}>
      <button>AC</button  ><button>DE</button><button>.</button><button>/</button><button>7</button><button>8</button><button>9</button><button>*</button><button >4</button><button>5</button><button>6</button><button>-</button><button>1</button><button>2</button><button>3</button><button>+</button><button>00</button><button>0</button><button className={style.equal}>=</button>
    </div>
  );
}