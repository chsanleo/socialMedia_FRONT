import React from 'react';

import { connect } from 'react-redux';

class CountryList extends React.Component {

    state = {}

    render() {
        return (
            <select defaultValue={this.props.selected} onChange={
                e => this.props.setCountry( e.target.value )}>
                {this.props.countries?.map(country => (
                    <option key={country.id}
                        value={country.id}
                    >
                        {country.code + " " + country.name}
                    </option>
                ))}
            </select>

        )
    }
}

const mapStateToProps = ({ data }) => ({ countries: data.countriesList })
export default connect(mapStateToProps)(CountryList);
