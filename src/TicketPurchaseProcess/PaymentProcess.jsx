import { useState } from "react";
import ClientInfo from "./ClientInfo";
import CreditCardInfo from "./CreditCardInfo";

function PaymentProcess(props) {
  const [clientInfo, setClientInfo] = useState({});
  const [creditCardInfo, setCreditCardInfo] = useState({});

  return (
    <div>
      <h2>Payment Process</h2>
      <ClientInfo setClientInfo={setClientInfo}/>
      <CreditCardInfo setCreditInfo={setCreditCardInfo}/>
      <button onClick={() => props.setPaymentInfo({clientInfo: clientInfo,
          creditCardInfo: creditCardInfo})}>Continue</button>
    </div>
  )
}

export default PaymentProcess;
