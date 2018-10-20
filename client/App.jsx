import React, { Fragment } from 'react';
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
      <Fragment>
        Counter: {this.state.counter}
        <button onClick={this.onClick}>Increase counter</button>
        <div className={styles.text}>Hello from react</div>
      </Fragment>
    );
  }
}

export default withStyles(styles)(App);
