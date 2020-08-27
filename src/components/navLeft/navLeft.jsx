import { NavLink, Link } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';

import './navLeft.scss';

class NavLeft extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {

        if (this.props.userL.id === undefined) {

            return (<div />);

        } else {
            return (

                <header className="navLeft">

                    <div>
                        <NavLink exact to="/profile">
                            <img src={this.props.userL.pic_path !== null ? this.props.userL.pic_path : './defaultProfile.png'} alt="profilePhoto" />
                        </NavLink>
                        <div className="info">
                            <p>{this.props.userL.username !== '' ? this.props.userL.username : '<insert your username>'}</p>
                            <p>You have {0} friends now.</p>
                            <p>Your hobbies or interests are :{this.props.userL.hobbies}</p>
                        </div>
                    </div>

                    <ul className="list-icons">
                        <li><NavLink exact to="/init">Go to my Events List</NavLink></li>
                        <li> <Link to="/logOut" className="accesos">Logout</Link></li>
                    </ul>

                </header>
            );
        }
    }
}
const mapStateToProps = ({ users }) => ({ userL: users?.user })
export default connect(mapStateToProps)(NavLeft);