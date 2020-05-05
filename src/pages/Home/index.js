import React from 'react';
import './style.css';
import imgButtonPesquisa from '../../assets/buttonPesquisa.png';
import imgButtonCadastro from '../../assets/buttonCadastro.png';
import { Link } from 'react-router-dom';

export default function Home(){
    return(
        <div className="home-container">
            <Link className="button" to="/consulta">
                <img src={imgButtonPesquisa}></img>
            </Link>
            
            <Link className="button" to="/cadastro">
                <img src={imgButtonCadastro}></img>
            </Link>
        </div>
    );
}