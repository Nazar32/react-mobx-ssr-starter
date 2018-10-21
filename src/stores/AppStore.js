import axios from 'axios';
import PropTypes from 'prop-types';
import { observable, action } from 'mobx';

export default class AppStore {
  propTypes = {
    appStore: PropTypes.object.isRequired,
  };

  @observable data = null;

  constructor(initialState) {
    this.data = initialState ? initialState.appStore.data : null;
  }

  @action.bound
  async fetchData() {
    const { data } = await axios.get('http://api.tvmaze.com/shows/1');
    this.data = data;
  }

  toJson() {
    return {
      data: this.data,
    };
  }
}
