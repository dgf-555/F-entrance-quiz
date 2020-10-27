import React from 'react';
import {Button} from 'antd'
import './Split.css';


class Split extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        splitvisible: false
    };
  }
  handleclick = () => {
    let sum = this.props.personlist.length
    let num = sum/6
    let yushu = sum%6
    this.setState({
        splitvisible: true
    });
  };
  render() {
    return (
    <div>
      <div className="splitgroup">
        <h3>分组列表</h3>
        <Button className="splitbutton" onClick={this.handleclick}>分组学员</Button>
      </div>
      {
          this.state.splitvisible && 
          <div>
              <div className="group">
                  <p className="grouptitle">1 组</p>
              </div>
              <div className="group">
                  <p className="grouptitle">2 组</p>
              </div>
              <div className="group">
                  <p className="grouptitle">3 组</p>
              </div>
              <div className="group">
                  <p className="grouptitle">4 组</p>
              </div>
              <div className="group">
                  <p className="grouptitle">5 组</p>
              </div>
              <div className="group">
                  <p className="grouptitle">6 组</p>
              </div>
          </div>
      }
      <div>

      </div>
    </div>

    );
  }
}
export default Split;