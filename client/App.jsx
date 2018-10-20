import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import styles from './styles.scss';

class App extends React.Component {
  state = {
    counter: 0,
  };

  onClick = () => {
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }));
  };

  render() {
    return (
      <div>
        Counter: {this.state.counter}
        <button onClick={this.onClick}>Increase counter</button>
        <div className={styles.text}>Hello from react</div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
