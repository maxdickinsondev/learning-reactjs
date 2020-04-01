import React, { Component } from 'react';
import { FaUserAlt, FaPlus } from 'react-icons/fa';

import '../../App.css';

export default class Main extends Component {
    render() {
        return (
            <div className="container">
                <h1>
                    <FaUserAlt />
                    Usuários
                </h1>
    
                <form className="form" onSubmit={() => {}}>
                    <input type="text" placeholder="Adicionar usuário" />
    
                    <button className="buttonSubmit" type="submit">
                        <FaPlus />
                    </button>
                </form>
            </div>
        )
    }
}