import React from 'react';
import {render} from 'react-dom';
import Stores from '../../stores/stores'
import Actions from '../../actions/actions.js'

export class Test extends React.Component{
  constructor(){
    super();
    this.state = {
      clicks: [],
      clickLast: {},
      name: ''
    };
    this.updateNumber = this.updateNumber.bind(this)
  }
  componentWillMount(){
    this.getAll(this);
  }
  componentDidMount(){
    Stores.addChangeListener(this.onChange.bind(this));
  }
  getAll(t){
    Stores.getAll('/ClickRanks', function(datas){
      t.setState({clicks: datas})
    })
  }
  onChange(){
    Stores.getAll('/ClickRanks', function(datas){
      this.setState({clicks: datas})
    }.bind(this))
  }

  updateNumber(t){
    const name1 = this.state.name;
    Stores.find('/ClickRanks',{order:'id DESC', limit: 1}, function(data){
      const dataClick = {
        number: data[0].number + 1,
        name: name1
      };
      Actions.create('/ClickRanks', dataClick, function(result){
        console.log(result.number)
        if(result.number == 10){
          Stores.find('/ClickRanks', {
          where: {
            name: name1
          }
        }, function(value){
          console.log(value);
            alert(`${result.name} da la nguoi chien thang voi so lan Click la ${value.length} `)

        });
        }
      })
    })
  }
  render(){
    const listClick = this.state.clicks.map(function(clicks,index){
      return(
        <li key={index}>
          <span>Stt : {index}</span>
          <p>Name: {clicks.name}</p>
          <p>Number: {clicks.number}</p>
        </li>
      )
    });
    function run(e){
      console.log(e)
      this.setState({clicks: data})

    }
    var urlToChangeStream = '/api/ClickRank/change-stream?_format=event-stream';
    var src = new EventSource(urlToChangeStream);
    src.addEventListener('data', function(msg) {
      run(data);
      var data = JSON.parse(msg.data);
      console.log(data);
    });
    return (
      <div className="section">
        <span>Name</span>
        <input type="text" onChange={(e)=>{this.setState({name: e.target.value})}} />
        <button className="btn btn-default" onClick={this.updateNumber}>Click</button>
        <ul>
          {listClick}
        </ul>
      </div>
    );
  }
}
