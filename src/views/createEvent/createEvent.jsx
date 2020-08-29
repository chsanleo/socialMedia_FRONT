import React from 'react';
import { connect } from 'react-redux';

import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import CountryList from '../../components/countryList/countryList.jsx';
import TypesList from '../../components/typesList/typesList.jsx';
import { validations } from '../../utils/validations.js';
import { utils } from '../../utils/utils.js';
import { eventService } from '../../services/eventService.js';


class CreateEvent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            owner: '', title: '', body: '', pic_path: '',
            type: '', date: new Date(), city: '', country: '',
            msgError: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.setDate = this.setDate.bind(this);
    }

    handleChange = (ev) => {
        this.setState({ [ev.target.name]: ev.target.type === 'string' ? +ev.target.value : ev.target.value });
    }
    /*
        handleChange(date) {
            this.setState({
              date: date
            })
          }*/

    componentDidMount() {
        if (utils.isNullOrEmpty(this.props.user == null)) { this.props.history.push('/'); }
        this.setState({
            owner: this.props.user,
            country: this.props.user.country,
            city: this.props.user.city
        });
    }
    setCountry = (country) => {
        this.setState({ country: country });
    }
    setHobby = (hobby) => {
        this.setState({ type: hobby });
    }
    setDate(date) {
        this.setState({ date: date });
    }
    isIMG(imageURL){

        let url = imageURL.split('.');
        switch(url[url.length-1]){
            case 'jpg':
            case 'JPG':
            case 'jpeg':
            case 'JPEG':
            case 'png':
            case 'PNG': return(<img src={this.state.pic_path} width="200px" alt="eventPhoto" />);

            default : return (<img src='Activities.png' width="200px" alt="eventPhoto" />)
        }
    }

    pressCreate = (ev) => {
        ev.preventDefault();
        let event = {
            owner: this.props.user,
            title: this.state.title,
            body: this.state.body,
            pic_path: this.state.pic_path,
            type: this.state.type != '' ? this.state.type : this.props.user.hobbies,
            date: this.state.date,
            city: this.state.city != null ? this.state.city : this.props.user.city,
            country: this.state.country != null ? this.state.country : this.props.user.country
        };

        let error = validations.validateEvent(event);

        if (!utils.isNullOrEmpty(error)) {
            this.setState({ msgError: error });
            return;
        }
        console.log(event);
        try {
            eventService.createEvent(event);
            setTimeout(() => {
                this.props.history.push('/init');
            }, 1000);

        } catch (error) {
            console.log(error);
        }
    }
    render() {
        return (
            <div className="centerInfo" >
                <form onSubmit={this.pressCreate}>
                    <h2>Event information</h2>
                    <div className="image">
                        {this.isIMG(this.state.pic_path)}
                     <br />
                    </div>
                    <p><label>Add remote Photo (url):</label>&nbsp;
                    <input type="text" name="pic_path" value={this.state.pic_path || ''}
                            onChange={this.handleChange}></input><br /></p>
                    <span className="errorText">{this.state.msgError}</span>

                    <p><label>Title</label>&nbsp;
                    <input type="text" name="title" value={this.state.title || ''}
                            onChange={this.handleChange}></input><br /></p>
                    <p><label>Body</label>&nbsp;
                    <input type="text" name="body" value={this.state.body || ''}
                            onChange={this.handleChange}></input><br /></p>

                    <p><label>Date of event: </label>
                        <DatePicker
                            selected={this.state.date}
                            onChange={date => this.setDate(date)}
                            minDate={new Date()}
                            name="date"
                            dateFormat="dd/MM/yyyy"
                        />
                    </p>
                    <p><label>City</label>&nbsp;
                    <input type="text" name="city" value={this.state.city || ''}
                            onChange={this.handleChange}></input><br /></p>
                    <p><label>Country: </label> {this.props.user.country}<br />
                        <CountryList setCountry={this.setCountry} readOnly /></p>
                    <p><label>Type: </label> {this.props.user.hobbies}<br />
                        <TypesList setHobby={this.setHobby} readOnly /></p>
                    <br />
                    <button type="submit">Create Event!</button><br />
                </form>
            </div>
        )
    }
}
const mapStateToProps = ({ users }) => ({ user: users?.user })
export default connect(mapStateToProps)(CreateEvent);