import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

export default class EventContent extends Component {
    constructor(props) {
        super(props);
        this.getEvents = this.getEvents.bind(this);

        this.state = {
            isLoading: true,
            events: []
        };
    }

    componentDidMount() {
        this.getEvents();
    }

    getEvents(e) {
        Axios.get("/api/events")
            .then(response => {
                console.log(response);

                this.setState({
                    events: response.data,
                    isLoading: false
                });
                console.log(this);
            })
            .catch(err => console.log(err));
        console.log();
    }

    render() {
        const { isLoading, events } = this.state;

        if (!isLoading)
            return this.state.events.map(eventit => (
                <div className="eventsPassed">
                    <div className="passedEvents">
                        <div className="eventImg">
                            <Link to={`/Event/${eventit.id}`}>
                                <h1 className="eventTitle">
                                    {eventit.event_name}
                                </h1>
                            </Link>
                            <i>(by {eventit.event_author} )</i>
                        </div>
                        <div className="wholeInfos">
                            <div className="wholeInfos1">
                                <div className="info">
                                    <img
                                        className="infoIcons"
                                        src="../images/icons/location-icon.png"
                                    />
                                    <p className="infoTxt">
                                        {eventit.event_address}
                                    </p>
                                </div>
                                <div className="info">
                                    <img
                                        className="infoIcons"
                                        src="../images/icons/calendar-icon.png"
                                    />
                                    <p className="infoTxt">
                                        {eventit.event_date}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ));
        return <p>loading...</p>;
    }
}
