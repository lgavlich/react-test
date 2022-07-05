import React from "react";
import {Link} from 'react-router-dom'
import logo from '../../assets/img/mida.svg';
import {menu} from './menu';
import s from './Header.module.css'
import {Button} from 'antd';
import "antd/dist/antd.css";



const Header =()=>{
  
    return(
    <div className={s.header}>
<div className={s.logo}>
    <img src={logo} alt='' height = '50'/>
</div>
<div className={s.wrapper}>
    <ul className={s.menu}>
        {menu.map((item,idx)=> 
        <li  className={s.item}key ={`menu item ${idx}`}>
        <Link to={s.item} href={item.link}>{item.title}</Link>
    </li>)}
        
    </ul>
<div className={s.buttons}>
    
<Button type ='primary' style ={{marginRight: 10}}>Login</Button>
<Button type ='primary'>Sign up</Button>
</div>
</div>
    </div>
)
}
export default Header;