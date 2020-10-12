import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/withStyles';
import { inject, observer} from 'mobx-react';
import AppStore from './stores/AppStore';
import styles from './styles.scss';

@inject('appStore')
@observer
class App extends React.Component {
  static propTypes = {
    appStore: PropTypes.object.isRequired,
  };

  static defaultProps = {
    appStore: new AppStore(),
  };

  render() {
    const { data } = this.props.appStore;

    if (!data) {
      return null;
    }

    return (
      <Fragment>
        <img src={data.image.original} alt={`${data.name} image`}/>
        <div className={styles.text}>
          Name: {data.name}
        </div>
        <div className={styles.text}>
          Language: {data.language}
        </div>
      </Fragment>
    );
  }
}

export default withStyles(styles)(App);
