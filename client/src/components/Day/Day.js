import React  from 'react';
import Moment from 'react-moment';
import "./style.css";
import Date from "Date"

 class Day extends React.Component {
    render() {
        return (
            <div><Moment format="YYYY/MM/DD">{this.props.dateToFormat}</Moment></div>

            )
        }
    }
export default Day;
