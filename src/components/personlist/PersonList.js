import React, { Component } from 'react';
import {Button} from 'antd';
import './PersonList.css';
import Split from '../split/Split';
import Person from './Person'

class PersonList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          personlist: new Array(),
          formvisible: false,
          name: '',
        };
      }
      componentDidMount() {
          this.update();
      }
      update(){
        async function fetchData(url) {
            const response = await fetch(url, {
              method: 'GET',
              headers: myHeaders,
              mode: 'cors',
              //转字符串格式
            });
            const result = await response.json();
            console.log(result);
            return result;
          }
          //修改请求头
          let myHeaders = new Headers({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'text/plain',
          });
          const URL = 'http://localhost:8080/person/list';
          fetchData(URL)
            .then((result) => {this.setState({ personlist: result });
          console.log(this.state.personlist)})
            .catch((error) => console.log(error));
      }

      handleclick = () => {
        this.setState({
            formvisible: true,
          })
      }

      handleclickcancle = () => {
        this.setState({
            formvisible: false,
          })
      }

      handleChange=(event)=>{
        this.setState({
          [event.target.name]:event.target.value,
        })
      }

      handlesubmit =(event)=>{
        event.preventDefault();
          // On submit of the form, send a POST request with the data to the server.
        const URL = 'http://localhost:8080/person/list';
        let myHeaders = new Headers({
            'Content-Type': 'application/json',
        });
        // let formData = new FormData();
        // formData.append('name', this.state.name);
        // formData.append('price', this.state.price); 
        let id = this.state.personlist.length + 1;
        let params = {"id":id, "name":this.state.name};  
        fetch(URL, { 
          headers: myHeaders,
          method: 'POST',
          mode: 'cors',//跨域
          body:JSON.stringify(params),
          //body: formData,
        })
        .then((response) => {
          if (response.ok) {  
              return response.status;  
          }  
        }).then((status) => {
          alert("添加成功");  
        }).catch((error) => {  
          console.error(error);  
        })
        this.setState({
            formvisible: false,
          })
        this.update();
      }

  render() {
    return (
        <div>
        <Split personlist={this.state.personlist} />
        <h3>学员列表</h3>
        <div className="personlist">
          {this.state.personlist.map((person) => (
            <div className="person" key="person.id">
              <Person person={person}/>
            </div>
          ))}
        </div>
        <Button className="addperson" onClick={this.handleclick}>+添加学员</Button>

        {this.state.formvisible && 
        <form className='from' onSubmit={this.handlesubmit}>
          <input 
          className="nameform" 
          type='text'
          name ='name' 
          value={this.state.name} 
          onChange={this.handleChange}
          />  
          <br/>
          <input 
          className="submit" 
          type="submit" 
          value="确认添加"
          disabled= {
            this.state.name===""
          }
          />
          <button onClick={this.handleclickcancle}>取消</button>
        </form>}
        </div>
    );
  }
}
export default PersonList;