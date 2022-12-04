import classNames from './classNames.js';

const OPcard = classNames.OPcard;

const appStyles = `
    * {
      box-sizing: border-box
    }
    html, body {
      width: 100%;
      height: 100%;
      margin: 0;
    }
    #app {
      width: 100%;
      height: 100%;
      background: #000;
      overflow: auto;
      padding: 15px;
      font-family: 'Helvetica', sans-serif;
      display: grid;
      justify-content: space-around;
      align-content: space-between;
      grid-gap: 15px;
    }
    #app .${OPcard.wrapper} {
      background: #fff;
      padding: 12px;
      width: 300px;
    }
    #app .${OPcard.title} {
      margin-top: 0;
    }
`;

export default appStyles;
