import React from 'react';
import './style.css';
import imgButtonPesquisa from '../../assets/buttonPesquisa.png';
import imgButtonCadastro from '../../assets/buttonCadastro.png';

export default function Home(){
    return(
        <div className="home-container">
            <button>
                <img src={imgButtonPesquisa}></img>
            </button>

            <button>
                <img src={imgButtonCadastro}></img>
            </button>
        </div>
    );
}