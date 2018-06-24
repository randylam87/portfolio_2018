import React, { Component } from 'react';
import { withTheme } from '@material-ui/core/styles'
import './Header.css';
import Button from '@material-ui/core/Button';

class Header extends Component {
    constructor (props) {
        super(props)
    }

    render() {
        return (
            <header id='header'>
                Header
                <Button color='primary'>Primary</Button>
                <Button color='secondary'>Secondary</Button>
            </header>
        )
    }
}

export default  withTheme()(Header);