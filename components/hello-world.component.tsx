import * as React from 'react';

export default class HelloWorld extends React.Component<any, any> {

	constructor(props: any){
        super(props);
    }

    public render() {
        return (
            <div>
				<h1>Hello World~~!</h1>
            </div>
        );
    }
}
