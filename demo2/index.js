import React from 'react';
import ReactDom from 'react-dom';

class Root extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [1, 2, 3],
            inputvalue: ''
        }
    }

    handleBtnClick() {
        let list = this.state.list.push(this.state.inputvalue);
        this.setState({
            list:this.state.list
        })
        //alert(this.refs.input.value)
    }

    handleInputChange(e) {
        this.setState({
            inputvalue:e.target.value
        })
    }

    render() {

        return (
            <div>
                <input type="text"  onChange={this.handleInputChange.bind(this)}/>
                <button onClick={this.handleBtnClick.bind(this)}>新增事项</button>
                <ul>
                    {
                        this.state.list.map((value, index) => {
                            return <li key={index + "_todolist"}>{value}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

ReactDom.render(<Root/>, document.getElementById("root"));