import React from 'react';
import './App.css';
class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      no_of_rows: 0,
      columns_string: '',
      gutter_row: 0,
      gutter_col: 0
    }
    this.onRowsChange = this.onRowsChange.bind(this);
    this.onColsChange = this.onColsChange.bind(this);
    this.onRowGutterChange = this.onRowGutterChange.bind(this);
    this.onColGutterChange = this.onColGutterChange.bind(this);
  }
  onRowsChange = (e) => {
    this.setState( {no_of_rows: e.target.value});
  }
  onColsChange = (e) => {
    this.setState( {columns_string: e.target.value});
  }
  onRowGutterChange = (e) => {
    this.setState( {gutter_row: e.target.value});
  }
  onColGutterChange = (e) => {
    this.setState( {gutter_col: e.target.value});
  }
  render() {
    return (
      <div className="App">
        <div className="input-group">  
          <Input
          type="number"
          id="no_of_rows"
          placeholder="no of rows"
          value={this.state.no_of_rows} 
          onchange={this.onRowsChange}/>
          <Input 
          type="text" 
          name="columns_string"
          placeholder="columns string" 
          onchange={this.onColsChange} 
          value={this.state.columns_string}/>
        </div>
        <div className="input-group">  
          <Input 
          type="number"
          name="gutter_row"
          onchange={this.onRowGutterChange} 
          value={this.state.gutter_row} 
          placeholder="space between rows in px"/>
          <Input 
          type="number"
          name="gutter_col"
          onchange={this.onColGutterChange} 
          value={this.state.gutter_col} 
          placeholder="space between boxes in px"/>
        </div>
        <br/>
        <Grid 
        rows={this.state.no_of_rows}
        columns={this.state.columns_string}
        boxGutter={this.state.gutter_col + 'px'}
        rowGutter={this.state.gutter_row + 'px'}/>
      </div>
    );
  }
}

const Input = (props) => {
  return (<input 
  className="form-control" 
  type={props.type}
  placeholder={props.placeholder} 
  onChange={props.onchange} 
  value={props.rows}
  />)
}

const Grid = (props) => {
  let rows = [];
  let cols = props.columns.split(',');
  for(let i=props.rows; i>0; i--){
    rows.push(React.createElement(Row, { key: i, number:cols[i-1], boxGutter: props.boxGutter, rowGutter: props.rowGutter }, []));
  }
  return (
    <div className="container">
      {rows}
    </div>
  )
}

const Row = (props) => {
  let boxes = [];
  for(let i= props.number; i>0; i--){
    boxes.push(React.createElement('div', { key: i, className:"col", style:{margin: props.boxGutter}}, []));
  }
  return (
    <div className="row" style={{margin: props.rowGutter}}>
      {boxes}
    </div>
  )
}

export default App;
