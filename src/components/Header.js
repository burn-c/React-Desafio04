import React from 'react';

import logoHeader from '../assets/logo_burnbook.png';

function Header() {
    return(
        <header>
            <nav>
                <img src={logoHeader} />
                <div>
                    <span>Meu Perfil </span>
                    <i className="material-icons">account_circle</i>
                </div>
            </nav>
        </header>
        
    );
}

export default Header;