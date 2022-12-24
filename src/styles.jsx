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
      padding: 15px;
      font-family: 'Helvetica', sans-serif;
      display: grid;
      justify-content: space-around;
      align-content: space-between;
      grid-gap: 15px;
    }
    #app .op_card_wrapper {
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
