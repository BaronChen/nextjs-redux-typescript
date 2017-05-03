import * as React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { updateGreeting } from './hello-world.actions';

class HelloWorld extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    handleChange(event) {
        this.props.updateGreeting(event.target.value)
    }

    public render() {
        const { greeting } = this.props;
        return (
            <div>
                <input type="text" value={greeting} onChange={(evt) => this.handleChange.bind(this)(evt)} />
                <h1>Hello {greeting}</h1>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        greeting: state.helloWorld.greeting
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateGreeting: bindActionCreators(updateGreeting, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld);