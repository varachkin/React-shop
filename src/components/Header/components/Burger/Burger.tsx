import React, {Component} from 'react';
import {BurgerStyled} from "./styled";

class Burger extends Component {
    render() {
        return (
            <BurgerStyled>
                <span className="material-symbols-outlined">
                    menu
                </span>
            </BurgerStyled>
        );
    }
}

export default Burger;