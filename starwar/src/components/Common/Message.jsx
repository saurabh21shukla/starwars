import React, {Component} from 'react';

class Message extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {message, title, theme} = this.props;

        return (
            <div className="message-container">
                <div className={`row ${theme}`} >
				<div className={`col s12 ${theme}-title`}>
                    {title && title}
                </div>
                <div className={`col s12 ${theme}-message`}>
                    {message && message}
                </div>
                </div>
            </div>
        );
    }
}

export default Message;
