import React, {
  Component,
  PropTypes
} from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { ReduxAsyncConnect } from 'redux-connect';

export default class Html extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    renderProps: PropTypes.object.isRequired,
    assets: PropTypes.object.isRequired
  };

  render() {
    const {
      store,
      renderProps,
      assets
    } = this.props;

    const initialState = `window.__INITIAL_STATE__ = ${JSON.stringify(store.getState())}`;

    const content = renderToString(
      <Provider store={store}>
        <ReduxAsyncConnect {...renderProps} />
      </Provider>
    );

    const scripts = assets.javascript.map(i => {
      return (<script src={i}/>)
    })

    const styles = assets.style.map(i => {
      return (<link href={i} rel="stylesheet" type="text/css"/>)
    })

    return (
      <html lang="en">
        <head>
          {styles}
        </head>
        <body>
          <div id="root" dangerouslySetInnerHTML={{ __html: content }} />
          <script dangerouslySetInnerHTML={{ __html: initialState }} />
          {scripts}
        </body>
      </html>
    );
  }
}