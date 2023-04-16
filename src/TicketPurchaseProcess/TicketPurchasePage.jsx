import PurchaseStepper from "./Stepper";
import TicketChoosing from "./TicketChoosing";
import { useEffect, useState } from "react";
import PaymentProcess from "./PaymentProcess";
import Overview from "./Overview";

function TicketPurchasePage() {
  const [step, setStep] = useState(-1);

  const [tickets, setTickets] = useState({ adultTickets: 0, kidTickets: 0 });
  const [paymentInfo, setPaymentInfo] = useState({ clientInfo: 0, creditCardInfo: 0 });

  useEffect(() => {
    setStep(step + 1);
  }, [tickets, paymentInfo])


  return (
    <div>
      <h1>Ticket Purchase</h1>
      {step === 0 &&
        <TicketChoosing setTickets={setTickets} />
      }

      {step === 1 &&
        <PaymentProcess setPaymentInfo={setPaymentInfo} />
      }

      {
        step === 2 &&
        <Overview tickets={tickets} paymentInfo={paymentInfo}></Overview>
      }

      <PurchaseStepper step={step} />
    </div>
  );
}

export default TicketPurchasePage;
