import React from 'react';
import ReactDom from 'react-dom';
import Header from './header.js';
import Content from './content.js';
import Footer from './footer.js';

class Root extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'luckelectricity'
        }
    }

    render() {
        let title = '标题内容在这里',
            content = '内容在这里',
            footer = '底部内容在这里';
        setTimeout(() => {
            this.setState({
                name: "liuhuan"
            })
        },5000);
        return (
            <div>
                <div>{this.state.name}</div>
                <Header title={title}/>
                <Content/>
                <Footer/>
            </div>
        )
    }
}

ReactDom.render(<Root/>, document.getElementById("a"));