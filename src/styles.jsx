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
      color: #FFF;
      width: 100%;
      height: 100%;
      background: #000;
      overflow: auto;
      font-family: 'Helvetica', sans-serif;
      display: grid;
      align-content: start;
      grid-gap: 15px;
    }
    #app .op_mode_picker_wrapper button {
      background: #0072a2;
      color: white;
      padding: 10px;
    }
    #app .op_card_wrapper {
      color: #000;
      background: #fff;
      padding: 12px;
      max-width: 300px;
      width: 100%;
    }
    #app .op_card_title {
      margin-top: 0;
    }
`;

export default appStyles;
