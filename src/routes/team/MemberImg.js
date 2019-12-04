import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import '../../layout/MemberImg.css';

class MemberImg extends React.Component {
  render() {
    return (
      <div>
        <div className="content">
            <div className="content-overlay"></div>
            <img className="content-image" src={require(`../../assets/headshots/${this.props.obj.imgPath}`)} alt={this.props.obj.name}/>

            <div className="content-details fadeIn-bottom">
              <p className="major">{this.props.obj.major}</p>
              <div className="social-icons">
                <a href={'mailto:'+this.props.obj.email} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} /></a>
                <a href={this.props.obj.linkedin} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a>
              </div>
            </div>
        </div>
        <div className="description">
          <h3 className="name">{this.props.obj.name}</h3>
          <p className="position">{this.props.obj.position}</p>
        </div>
      </div>
    )
  }
}

export default MemberImg;
