import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="logo">Logo</div>
      <div className="amount">
        <div className="total">
          <p className="small">Total</p>
          <input className="total-amount" type="text" value="200.00" />
        </div>
        <div className="your-part">
          <p className="small">your share:</p>
          <p className="your-amount">110.00</p>
        </div>
      </div>
      <div className="input-item">
        <label forHtml="item-name" />
        <input id="item-name" className="input-basic" type="text" value="" />
        <label forHtml="item-value" />
        <input id="item-value" className="input-basic" type="text" value="" />
        <button className="item-add" type="button">
          add
        </button>
      </div>
      <div className="list">
        <div className="list-container">
          <div className="item">
            <p>item 1 50.00</p>
            <button className="item-remove" type="button">
              X
            </button>
          </div>
          <div className="item">
            <p>item 2 50.00</p>
            <button className="item-remove" type="button">
              X
            </button>
          </div>
        </div>
        <div className="tip-container">
          <p className="">
            Tip Percent
            <input className="tip-percent" type="text" value="10" />
          </p>
          <p className="tip-amout">10.00</p>
        </div>
      </div>
    </div>
  );
}

export default App;
