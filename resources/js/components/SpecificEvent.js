import React from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

class SpecificEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            event_name: " ",
            event_author: " ",
            event_description: " ",
            event_address: " ",
            event_date: " ",
            event_price: " ",
            created_at: " ",
            updated_at: " ",
            events: []
        };
    }
    componentDidMount() {
        this.getSpecificEvent();
    }
    async getSpecificEvent() {
        await Axios.get("/api/events/" + this.props.match.params.id)
            .then(response => {
                console.log(response.data),
                    this.setState({
                        events: response.data
                    });
            })
            .catch(err => console.log(err));
        console.log(this.state.events);
    }
    render() {
        console.log(this.props);
        return (
            <div className="eventsPassed">
                <div className="passedEvents">
                    <div className="eventImg">
                        <h1 className="eventTitle">
                            {this.state.events.event_name}
                            <i>(by {this.state.events.event_author})</i>
                        </h1>
                    </div>
                    <div className="passedEvents2">
                        <p> {this.state.events.event_description}</p>
                    </div>
                    <div className="wholeInfos">
                        <div className="wholeInfos1">
                            <div className="info">
                                <img
                                    className="infoIcons"
                                    src="../images/icons/location-icon.png"
                                />
                                <p className="infoTxt">
                                    {this.state.events.event_address}
                                </p>
                            </div>
                            <div className="info">
                                <img
                                    className="infoIcons"
                                    src="../images/icons/calendar-icon.png"
                                />
                                <p className="infoTxt">
                                    {this.state.events.event_date}
                                </p>
                            </div>
                            <div className="info">
                                <img
                                    className="infoIcons"
                                    src="../images/icons/euro-icon.png"
                                />
                                <p className="infoTxt">
                                    Price: {this.state.events.event_price}€
                                </p>
                            </div>
                        </div>
                        <div className="wholeInfos2">
                            <div className="info">
                                <img
                                    className="infoIcons2"
                                    src="../images/icons/posted-icon.png"
                                />
                                <p className="infoTxt">
                                    Posted on {this.state.events.created_at}
                                </p>
                            </div>
                            <div className="info">
                                <img
                                    className="infoIcons2"
                                    src="../images/icons/last-update.webp"
                                />
                                <p className="infoTxt">
                                    Last update: {this.state.events.updated_at}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SpecificEvent;
