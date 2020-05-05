import React from 'react';
import './style.css';

export default function Cadastro(){
    return (
        <div className="cadastro-container">
            <h1>Cadastro</h1>
            <section className="form">
                <form>
                    <input placeholder="Nome Completo" maxLength="100"></input>
                    <input placeholder="CPF"></input>
                    <input placeholder="RG"></input>
                    <input placeholder="Genitora"></input>
                    <input placeholder="Cidade"></input>
                    <input placeholder="Bairro"></input>
                    <input placeholder="Rua"></input>
                    <input placeholder="Casa"></input>
                    <input placeholder="Telefone"></input>
                    <input placeholder="Facção"></input>
                    <input placeholder="Cor"></input>
                    <input placeholder="Peso"></input>
                </form>
            </section>
        </div>
    );
}