import { useState } from "react";
import { Tasks } from './Tasks';
import {user} from '../data'


export const CardMain = () => {
  
  const [act, setAct] = useState('daily')
  
  return (
    <>
      <div className="card">
        <div className="user">
          <div className="circle">
            <img className="circle "src="src/images/IMG-20210505-WA0013.png" alt="" />
          </div>
          <div className="data">
            <p className="title">Web Developer</p>
            <p className="name">Sergio Perez</p>
          </div>
        </div>
        <div className="period">
          <button style={act=='daily'?{color:' rgb(114, 172, 243)'}:{color:'white'}} onClick={()=>setAct('daily')} className="day">Day</button>
          <button style={act=='weekly'?{color:' rgb(114, 172, 243)'}:{color:'white'}} onClick={()=>setAct('weekly')} className="week">Week</button>
          <button style={act=='monthly'?{color:' rgb(114, 172, 243)'}:{color:'white'}} onClick={()=>setAct('monthly')} className="month">Month</button>
        </div>
      </div>
      {user.map(({ title, img, i , divStyle, timeframes}) =>
        <Tasks key={i} title={title} img={img} divStyle={divStyle} timeframes={timeframes} period={act} />
      )}
    </>
  );
};
