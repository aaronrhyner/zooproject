function CreditCardInfo(props) {
  const creditCardInfo = {
    nameOnCard: "",
    creditCardNumber: "",
    expMonth: "",
    expYear: "",
    cvv: ""
  };

  return (
    <div>
      <h3>Client Info</h3>

      <form>
        <label>Name on Card</label>
        <input type={"text"} onChange={e => creditCardInfo.nameOnCard = e.target.value} />

        <label>Credit Card Number</label>
        <input type={"text"} onChange={e => creditCardInfo.creditCardNumber = e.target.value} />

        <label>Exp Month</label>
        <input type={"number"} onChange={e => creditCardInfo.expMonth = e.target.value} />

        <label>Exp Year</label>
        <input type={"number"} onChange={e => creditCardInfo.expYear = e.target.value} />

        <label>CVV</label>
        <input type={"number"} onChange={e => creditCardInfo.cvv = e.target.value} />


        <input type={"submit"} onClick={e => {
          props.setCreditInfo(creditCardInfo);
          e.preventDefault();
        }} />
      </form>
    </div>
  );
}

export default CreditCardInfo;
