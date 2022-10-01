import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../context';
import styles from './styles/Header.module.css';
import axios from 'axios'
import { useAxiosGetDrinks } from '../../hooks';



const Header = () => {


  return (
    <div className={styles.header}>
      Header
     </div>
  )
};

export default Header;
