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
                            <img className="profilePicLeft" src={this.props.userL.pic_path !== '' ? this.props.userL.pic_path : './defaultProfile.png'} alt="profilePhoto" />
                        </NavLink>
                        <div className="info">
                            <h3>{this.props.userL.username !== '' ? this.props.userL.username : '<insert your username>'}</h3>
                            <p>{this.props.userL.numFriends} friends now.</p>
                            <p>{this.props.userL.pendingFriends} pending request.</p>
                            <p>Your hobby is :  {this.props.userL.hobbies}</p>
                        </div>
                    </div>

                    <ul className="listMenu">
                        <li><NavLink exact to="/init"><img className="linkImg" src="./home.png" alt="Home"/></NavLink></li>
                        <li><NavLink to="/contactMail"><img className="linkImg" src="./contactUs.png" alt="Contact Us"/></NavLink></li>
                        <li><Link to="/logOut"><img className="linkImg" src="./LogOut.png" alt="Log Out"/></Link></li>
                    </ul>
                </div>
            );
        }
    }
}
const mapStateToProps = ({ users }) => ({ userL: users?.user })
export default connect(mapStateToProps)(NavLeft);