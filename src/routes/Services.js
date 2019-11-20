import React from 'react';
import '../layout/Services.css';

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
      // modify these lists to change/add/remove buttons
      const industryButtons = ["Biotech", "Healthcare", "Biomedical"];
      const businessButtons = ["Market Research", "Sales & Marketing", "Operations", "Product Research", "Business Model", "Finance"];

      return (
        <div className="Services-body">
          <ol>
            <li>
              What is your industry?
              <div className="Services-buttongroup">
                {industryButtons.map((name, index) => {
                  return (
                    <button
                      key={name}
                      onClick={() => this.setState({industry: index + 1})}
                      className={this.state.industry === (index + 1) ? 'active' : ''}>
                      {name}
                    </button>
                  );
                })}
              </div>
            </li>
            <li>
              What is your business need?
              <div className="Services-buttongroup">
                {businessButtons.map((name, index) => {
                  return (
                    <button
                      key={name}
                      onClick={() => this.setState({businessNeed: index + 1})}
                      className={this.state.businessNeed === (index + 1) ? 'active' : ''}>
                      {name}
                    </button>
                  );
                })}
              </div>
            </li>
          </ol>
          <button className="Services-actionbutton" onClick={() => this.setState({askingQuestions: false})}>
            Submit
          </button>
        </div>
      );
    } else {
      const solutions = ["Lorem ipsum", "Lorem ipsum", "Lorem ipsum"];

      return (
        <div className="Services-body">
          <div className="Services-resulttitle">
            You selected {this.getIndustryText()} as your industry and {this.getBusinessNeedText()} as your business need.
          </div>
          <div className="Services-solutiongroup">
            {solutions.map((value, index) => {
              return (
                <div className="Services-solution" key={index}>
                  <div className="Services-solutiontitle">Solution {index + 1}</div>
                  {value}
                </div>
              );
            })}
          </div>
          <button className="Services-actionbutton2" onClick={() => this.setState({askingQuestions: true})}>
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