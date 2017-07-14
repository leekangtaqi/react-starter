import React, {
  PropTypes,
  Component
} from 'react';
import Landing from '../components/Landing';

export default class LandingContainer extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    return <Landing {...this.props} />;
  }
}