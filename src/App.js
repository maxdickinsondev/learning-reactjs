import React, { Component } from 'react';
import { FaUserAlt, FaPlus } from 'react-icons/fa';

import './App.css';

class App extends Component {
    render() {
        function handleButton(e) {
            e.preventDefault();
        }

        return (
            <div className="container">
                <h1>
                    <FaUserAlt />
                    Usuários
                </h1>

                <form className="form" onSubmit={handleButton}>
                    <input type="text" placeholder="Adicionar usuário" />

                    <button className="buttonSubmit" type="submit">
                        <FaPlus />
                    </button>
                </form>
                
            </div>
        )
    }
}

export default App;