import React, { Component } from 'react';
import {Button} from 'antd'
import './PersonList.css';

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
      }

  render() {
    return (
        <div>
        <div className="person">
          {this.state.personlist.map((person) => (
            <div key="person.id">
              <p>{person.id} {person.name}</p>
            </div>
          ))}
        </div>
        <Button classname="addperson" onClick={this.handleclick}>+添加人物</Button>

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
          value="Submit"
          disabled= {
            this.state.name===""
          }
          />   
        </form>}
        </div>
    );
  }
}
export default PersonList;