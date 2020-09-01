import React from 'react';
import { connect } from 'react-redux';

import NavLeft from '../../components/navLeft/navLeft.jsx';

class ProfileExt extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {
        if (this.props.user.id === undefined) { this.props.history.push('/'); }
    }

    render() {
        return (
            <div>
                <div className="leftMenu"><NavLeft /></div>
                <div className="centerInfo" >
                    <h2>Profile of {this.props.userExt.username}</h2>
                    <div className="formsFormat">
                        <div>
                        <img className="profilePicLeft" src={this.props.userExt.pic_path===''?'defaultProfile.png':this.props.userExt.pic_path} width="200px" alt="eventPhoto" />
                            {/*friends*/}
                        </div>
                        <div>
                            <p><label>Username: </label>&nbsp;{this.props.userExt.username}</p>
                            <p><label>City: </label>&nbsp;{this.props.userExt.city}</p>
                            <p><label>Country: </label>&nbsp;{this.props.userExt.country}</p>
                            <p><label>Hobbies: </label>&nbsp;{this.props.userExt.hobbies}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = ({ users }) => ({
    user: users?.user,
    userExt: users?.userExt
});
export default connect(mapStateToProps)(ProfileExt);