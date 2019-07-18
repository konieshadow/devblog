import React from 'react';

import favicon from './favicon.ico';

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
          <link rel="shortcut icon" href={favicon} />
          <link rel="stylesheet" href="/live2d/css/live2d.css" />
          <script src="/js/matomo.js" />
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          <div id="landlord">
            <div className="message" style={{opacity:0}}></div>
            <canvas id="live2d" width="280" height="250" className="live2d"></canvas>
            <div className="hide-button">退下</div>
          </div>
          <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.4.1.min.js"></script>
          <script src="/live2d/js/live2d.js"></script>
          <script src="/live2d/js/message.js"></script>
        </body>
      </html>
    );
  }
}
