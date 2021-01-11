import { render } from '@testing-library/react';
import React, {Component} from 'react';

class Interpolation extends Component {
    constructor(props) {
      super(props);
      this.state = {
          X1: '',
          Y1: '',
          X2: '',
          Y2: '',
          X3: '',
          res: '',
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;
    
        this.setState({
            [name]: value
        });
    }

  
    handleSubmit(event) {
      event.preventDefault();
      const mValue = (this.state.Y2 - this.state.Y1) / (this.state.X2 - this.state.X1);
      const bValue = this.state.Y1 - mValue * this.state.X1;
      const res1 = (mValue * this.state.X3 + bValue).toFixed(2);
     this.setState({
        res: res1
     });
        

    }
  
    render() {
      return (
          <div className="form-container">
              <h2>Interpolation</h2>
            <form autocomplete="off" onSubmit={this.handleSubmit}>
                <div id ="point-one">
                    <label>
                    X1
                        <input id='input-item' type="text" value={this.state.X1} name="X1" onChange={this.handleChange} />
                    </label>
        
            <label>
            Y1
                <input id='input-item' type="text" value={this.state.Y1} name="Y1" onChange={this.handleChange} />
            </label>
            </div>

            <div id ="point-one">
                <label>
                X2
                    <input id='input-item' type="text" value={this.state.X2} name="X2" onChange={this.handleChange} />
                </label>
                <label>
                Y2
                    <input id='input-item' type="text" value={this.state.Y2} name="Y2" onChange={this.handleChange} />
                </label>
            </div>

            <label>
            X3
                <input id='input-item' type="text" value={this.state.X3} name="X3" onChange={this.handleChange} />
            </label>
            <label>
                Interpolated Result: 
                {' '} {this.state.res}
            </label>
            <input id="submit-btn" type="submit" value="Submit" />
            </form>
        </div>
      );
    }
  }

export default Interpolation;   