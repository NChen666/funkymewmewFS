import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';


class PinIndexItem extends React.Component {
    constructor(props) {
        // debugger
        super(props);
        this.state = { visible: false };
        this.turnOffVisibility = this.turnOffVisibility.bind(this);
        this.turnOnVisibility = this.turnOnVisibility.bind(this);
        this.displayLinks = this.displayLinks.bind(this);
        this.toPinShow = this.toPinShow.bind(this);
    }
    
    turnOffVisibility(e) {
        // debugger
        this.setState({ visible: false });
    }

    turnOnVisibility(e) {
        // debugger
        this.setState({ visible: true });
    }

    toPinShow(e) {
        console.log('to pin show');
        this.props.history.push(`/pins/${this.props.pin.id}`);
        
    }

    displayLinks() {
        // debugger
       
        if (this.state.visible) {
            
            // return (<div></div>)
            //console.log(true)
            return (

                <div className='p-links visible'>
                   {/* need link url for pin  */}
                    <div className='top-links'>
                        <button
                            className='save-btn'
                            onClick={this.showCreateModal}>
                            <i className='fas fa-map-pin'></i>
                            <p>Save</p>
                        </button>
                    </div>
                </div>
            )
        } else {
            return <div className='p-links'></div>;
        }
    }

    render() {
        // debugger
        return (
            // <Link to={`/pins/${this.props.pin.id}`}>
                <div className='pin-index-box' id="grid"
                    onClick={this.toPinShow}
                    onMouseEnter={this.turnOnVisibility}
                    onMouseLeave={this.turnOffVisibility}>
                    <div className='pin-index-image'>
                        <img src={this.props.pin.imageUrl} />
                        {this.displayLinks()}
                    </div>
                    <div className="pin-index-title">{this.props.pin.title}</div>
                    
                </div>
            //</Link>
        )
    }
}

export default withRouter(PinIndexItem);