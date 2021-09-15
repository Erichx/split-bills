import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="amount">
        <div className="total">
          <label className="small">Total</label>
          <input className="total-amount" type="text" value="200.00" />
        </div>
        <div className="your-part">
          <label className="small">your share:</label>
          <p className="your-amount">110.00</p>
        </div>
      </div>
      <div className="input-item">
        <button className="item-add button-amount" type="button">
          <i className="bi bi-plus" />
        </button>
        <input
          id="item-name"
          className="input-basic"
          type="text"
          value=""
          placeholder="Item"
        />

        <input
          id="item-value"
          className="input-basic"
          type="text"
          value=""
          placeholder="0.00"
        />
      </div>
      <div className="list">
        <div className="list-container">
          <div className="item">
            <p>item 1 50.00</p>
            <button className="item-remove button-amount" type="button">
              <i className="bi bi-x" />
            </button>
          </div>
          <div className="item">
            <p>item 2 50.00</p>
            <button className="item-remove button-amount" type="button">
              <i className="bi bi-x" />
            </button>
          </div>
        </div>
        <div className="tip-container">
          <p className="">
            Tip Percent
            <input className="tip-percent" type="text" value="100" />
          </p>
          <p className="tip-amout">10.00</p>
        </div>
      </div>
    </div>
  );
}

export default App;
