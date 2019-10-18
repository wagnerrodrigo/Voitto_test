import React from 'react';
// importar css dos botoes

export default class Botoes extends React.Component{
    render(){
        return(
            <div className="botoes">
                <button id="parentese-aberto" onClick={this.props}></button>
                
            
            </div>
        )
    }
}