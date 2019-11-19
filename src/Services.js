import React from 'react';
import './Services.css';

class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      askingQuestions: true,
      industry: 0,
      businessNeed: 0,
    };
  }

  getIndustryText() {
    switch(this.state.industry) {
      case 1:
        return "biotech";
      case 2:
        return "healthcare";
      case 3:
        return "biomedical";
      default:
        return "none";
    }
  }

  getBusinessNeedText() {
    switch(this.state.businessNeed) {
      case 1:
        return "market research";
      case 2:
        return "sales and marketing";
      case 3:
        return "operations";
      case 4:
        return "product research";
      case 5:
        return "business model";
      case 6:
        return "finance";
      default:
        return "none";
    }
  }

  getBody() {
    if (this.state.askingQuestions) {
      return (
        <div className="Services-body">
          <ol>
            <li>
              What is your industry?
              <div className="Services-buttongroup">
                <button onClick={() => this.setState({industry: 1})}>Biotech</button>
                <button onClick={() => this.setState({industry: 2})}>Healthcare</button>
                <button onClick={() => this.setState({industry: 3})}>Biomedical</button>
              </div>
            </li>
            <li>
              What is your business need?
              <div className="Services-buttongroup">
                <button onClick={() => this.setState({businessNeed: 1})}>Market Research</button>
                <button onClick={() => this.setState({businessNeed: 2})}>Sales & Marketing</button>
                <button onClick={() => this.setState({businessNeed: 3})}>Operations</button>
                <button onClick={() => this.setState({businessNeed: 4})}>Product Research</button>
                <button onClick={() => this.setState({businessNeed: 5})}>Business Model</button>
                <button onClick={() => this.setState({businessNeed: 6})}>Finance</button>
              </div>
            </li>
          </ol>
          <button className="Services-actionbutton" onClick={() => this.setState({askingQuestions: false})}>
            Submit
          </button>
        </div>
      );
    } else {
      return (
        <div className="Services-body">
          <div className="Services-resulttitle">
            You selected {this.getIndustryText()} as your industry and {this.getBusinessNeedText()} as your business need.
          </div>
          <div className="Services-solutiongroup">
            <div className="Services-solution">
              <div className="Services-solutiontitle">Solution 1</div>
              Lorem ipsum
            </div>
            <div className="Services-solution">
              <div className="Services-solutiontitle">Solution 2</div>
              Lorem ipsum
            </div>
            <div className="Services-solution">
              <div className="Services-solutiontitle">Solution 3</div>
              Lorem ipsum
            </div>
          </div>
          <button className="Services-actionbutton" onClick={() => this.setState({askingQuestions: true})}>
            Go back
          </button>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="Services">
        <div className="Services-title">SERVICES</div>
        <div>Help us help you. Answer two quick questions for potential solutions.</div>
        <div>{this.getBody()}</div>
      </div>
    );
  }
}

export default Services;