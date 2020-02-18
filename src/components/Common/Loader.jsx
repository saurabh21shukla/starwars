import React, {Component} from 'react';

class Message extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="loader-container">
                <div className="row" >
                    <div className="preloader-wrapper big active">
                    <div className="spinner-layer spinner-blue-only">
                    <div className="circle-clipper left">
                        <div className="circle"></div>
                    </div><div className="gap-patch">
                        <div className="circle"></div>
                    </div><div className="circle-clipper right">
                        <div className="circle"></div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Message;
