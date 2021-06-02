//Tabela.js
//********************************

import { render } from '@testing-library/react'
import React from 'react'

class Tabela extends React.Component {
    render() {
        return(
            <table className="table">
                <thead>
                    <tr>
                        <td>Nome</td>
                        <td>Apelido</td>
                    </tr>    
                </thead>    
                <tbody>
                    <tr>
                        <td>João</td>
                        <td>Lopes</td>
                    </tr>
                    <tr>
                        <td>Mario</td>
                        <td>Santos</td>
                    </tr>
                    <tr>
                        <td>Ana</td>
                        <td>Silva</td>
                    </tr>
                </tbody>
            </table>
        )
    }

}



export default Tabela