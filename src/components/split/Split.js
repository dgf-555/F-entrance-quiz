import React from 'react';
import {Button} from 'antd'
import './Split.css';


class Split extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  handleclick = () => {
    this.setState({
    });
  };
  render() {
    return (
    <div>
      <div className="splitgroup">
        <p>分组列表</p>
        <Button className="splitbutton" onClick={this.handleclick}>分组学员</Button>
      </div>
      <div>
          
      </div>
    </div>

    );
  }
}
export default Split;