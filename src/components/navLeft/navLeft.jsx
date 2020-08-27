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

                <div className="navLeft">

                    <div>
                        <NavLink exact to="/profile">
                            <img src={this.props.userL.pic_path !== null ? this.props.userL.pic_path : './defaultProfile.png'} alt="profilePhoto" />
                        </NavLink>
                        <div className="info">
                            <p>{this.props.userL.username !== '' ? this.props.userL.username : '<insert your username>'}</p>
                            <p>You have {this.props.userL.numFriends} friends now.</p>
                            <p>You have  {this.props.userL.pendingFriends} pending friends request.</p>
                            <p>Your hobbies or interests are :{this.props.userL.hobbies}</p>
                        </div>
                    </div>

                    <ul className="listMenu">
                        <li><NavLink exact to="/init">Go to my Events List</NavLink></li>
                        <li><Link to="/logOut">Logout</Link></li>
                    </ul>

                </div>
            );
        }
    }
}
const mapStateToProps = ({ users }) => ({ userL: users?.user })
export default connect(mapStateToProps)(NavLeft);