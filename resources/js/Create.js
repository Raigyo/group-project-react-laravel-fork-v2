import React, { Component } from "react";
import Brand from "./components/Brand";
import CreateContent from "./components/CreateContent";

export default class Create extends Component {
    render() {
        return (
            <div>
                <CreateContent />
                <div>
                    <img src="../images/simpsons-donut.png" className="homer" />
                </div>
                {/* <div className="vrincesse">
                    <img
                        src="https://4.bp.blogspot.com/-7Lq-8DZByAI/VAN_LHMq4XI/AAAAAAAAAPw/V1YAVTuWm9g/s1600/princess2400.png"
                        className="baron"
                    />
                </div> */}
            </div>
        );
    }
}
