import * as React from 'react';
import HelloWorld from '../components/hellow-world/hello-world.component';
import { updateGreeting } from '../components/hellow-world/hello-world.actions';
import withRedux from 'next-redux-wrapper';
import { initStore } from '../store';

class Index extends React.Component {
	constructor(props) {
    	super(props);
    }

	static getInitialProps({ store, isServer }) {
		store.dispatch(updateGreeting("world"));
		return { isServer: isServer, greeting: "world2" }
	}

	render () {
		return (
			<HelloWorld />
		)
  	}
}


export default withRedux(initStore, null, null)(Index)
