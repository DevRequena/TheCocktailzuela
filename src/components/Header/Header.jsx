import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../context';
import styles from './styles/Header.module.css';
import axios from 'axios'
import { useAxiosGetDrinks } from '../../hooks';



const Header = () => {


  return (
    <div className={styles.header}>
      <div className={styles.nameHomeContainer}>
        <div className={styles.nameProducto}>
          <img className={styles.imgNavbar} src="../../Imagenes/logo.png" alt="" />
          <div className={styles.logo}>The Cocktailzuela</div>
        </div>
        <div className={styles.homeSearch}>
          <div className={styles.home}> Home </div>
          <div><input type="text" className={styles.search} placeholder="Buscar Cocteles" /></div>
        </div>
      </div>
      <div className={styles.ingredientsContent}>
          <div className={styles.ingredient}>
            <a className={styles.ladilla} href='www.vodka.com'>Vodka</a>
          </div>
          <div className={styles.ingredient}>
            <a className={styles.ladilla} href='www.Gin.com'>Gin </a>
          </div>
          <div className={styles.ingredient}>
            <a className={styles.ladilla} href='www.Rum.com'>Rum</a>
          </div>
          <div className={styles.ingredient}>
            <a className={styles.ladilla} href='www.Tequila.com'>Tequila</a>
          </div>
      </div>
    </div>
  )
};

export default Header;
