import React, { Component } from 'react';

class Reloj extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hora: new Date().toLocaleTimeString(),
      intervalId: null
    };
  }

  iniciarReloj = () => {
    const intervalId = setInterval(() => {
      this.setState({ hora: new Date().toLocaleTimeString() });
    }, 1000);
    this.setState({ intervalId });
  }

  detenerReloj = () => {
    clearInterval(this.state.intervalId);
    this.setState({ intervalId: null });
  }

  render() {
    return (
      <div>
        <h1>{this.state.hora}</h1>
        <button onClick={this.iniciarReloj}>Iniciar</button>
        <button onClick={this.detenerReloj}>Detener</button>
      </div>
    );
  }
}

export default Reloj;