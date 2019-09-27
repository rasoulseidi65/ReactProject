import React, {Component} from 'react';
import {Fab} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import PropTypes from 'prop-types';

import './header.css';
const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '12',
            number:1
        };
        this.timer();

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }
    timer=()=>{
   setInterval(()=>{
       this.setState({number:this.state.number+1})
   },1000)
    }
    render() {
        return (
<div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse"
                                    data-target="#myNavbar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav">
                                <li className=""><a href="#">صفحه اصلی</a></li>
                                <li><a href="#">Page 1</a></li>
                                <li><a href="#">Page 2</a></li>
                                <li><a href="#">Page 3</a></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="#"><span className="glyphicon glyphicon-user"></span>  ثبت نام</a></li>
                                <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> ورود</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

</div>
        );
    }
}

Header.propTypes = {};

export default Header;

