import React, {
  PropTypes,
  PureComponent
} from 'react';

export default class App extends PureComponent {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  render() {
    const { children } = this.props;

    return (
      <div>
        {children}
      </div>
    );
  }
}