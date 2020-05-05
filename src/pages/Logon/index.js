import React from 'react';
import './style.css';
import logoImg from '../../assets/logo.png';

export default function Logon(){
    return (
        <div className="logon-container">
            <section className="form">
                <img src={ logoImg } alt="SCA"></img>

                <form>
                    <input placeholder="Login"></input>
                    <input placeholder="Senha"></input>
                    <button className="button" type="submit" href="/home">Entrar</button>
                    <a href="/register"></a>
                </form>
            </section>

            <h1>S.C.A Sistema de Cadastro de Abordados</h1>
            <h3>Criado por Sd PM Zancheta</h3>
        </div>
    );
}