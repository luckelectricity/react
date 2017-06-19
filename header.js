/**
 * Created by liuhuan on 2017/6/19.
 */
import React from 'react';

export default class HeaderComponent extends React.Component {
    render() {
        return (
            <div>
                {this.props.title}
            </div>
        )
    }
}

