import { useEffect, useState } from "react";

export default function TicketChoosing(props) {

  const [adultTickets, setAdultTickets] = useState(0);
  const [kidsTickets, setKidsTickets] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    setPrice(adultTickets * 20 + kidsTickets * 12);
  }, [adultTickets, kidsTickets]);

  return (
    <div>
      <h2>Choose Tickets</h2>

      <label htmlFor={"adults"}>Number of Adults (16+)</label>
      <input id="adults" type={"number"} defaultValue={0}
             onChange={e => setAdultTickets(e.target.value)} />
      <label htmlFor={"kid"}>Number of Kids</label>
      <input id="kids" type={"number"} defaultValue={0}
             onChange={e => setKidsTickets(e.target.value)} />

      <p>Price: CHF {price}</p>

      <button onClick={() => props.setTickets({
        adultTickets: adultTickets,
        kidTickets: kidsTickets
      })}>Continue
      </button>
    </div>
  );
}