import React from 'react';

class App extends React.Component {
	constructor(){
		super();
		this.state = {first: ''}
	}

	update(){
		this.setState({
			first: this.first.refs.input.value,
			second: this.refs.second.value,
			third: this.refs.third.value
		})
	}
	render(){
		return (
			<div>
			<Input
				ref={ component => this.first = component}
				update={this.update.bind(this)}
				/> {this.state.first}
				<br />
				<input
					ref="second"
					type="text"
					onChange={this.update.bind(this)}
				/> {this.state.second}
				<br />
				<input
					ref="third"
					type="text"
					onChange={this.update.bind(this)}
				/> {this.state.third}
			</div>
		)
	}
}

class Input extends React.Component {
	render(){
		return <span><input ref="input" type="text" onChange={this.props.update}/></span>
	}
}

export default App
