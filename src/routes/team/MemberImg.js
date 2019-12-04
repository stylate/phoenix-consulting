import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
// import headshot from '../../assets/headshots/anmol.jpg';
import '../../layout/MemberImg.css';


// const headshotSize = {
//   height: "10em"
// }

class MemberImg extends React.Component {
  render() {
    const headshot = this.props.obj.imgPath;
    console.log(this.props.obj.imgPath);
    return (
      <div>
        <div class="content">
            <div class="content-overlay"></div>
            <img class="content-image" src={this.props.obj.imgPath} alt={this.props.obj.name}/>

            <div class="content-details fadeIn-bottom">
              <p class="major">{this.props.obj.major}</p>
              <div class="social-icons">
                <a href={'mailto:'+this.props.obj.email} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faEnvelope} /></a>
                <a href={this.props.obj.linkedin} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a>
              </div>
            </div>
        </div>
          <h3 class="name">{this.props.obj.name}</h3>
          <p class="position">{this.props.obj.position}</p>
      </div>
    )
  }
}

export default MemberImg;
