function ClientInfoForm(props) {
  const clientInfo = {
    fullName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: ""
  };

  return (
    <div>
      <h3>Client Info</h3>

      <form>
        <label>Full Name</label>
        <input type={"text"} onChange={e => clientInfo.fullName = e.target.value} />

        <label>Email</label>
        <input type={"email"} onChange={e => clientInfo.email = e.target.value} />

        <label>Address</label>
        <input type={"text"} onChange={e => clientInfo.address = e.target.value} />

        <label>City</label>
        <input type={"text"} onChange={e => clientInfo.city = e.target.value} />

        <label>State</label>
        <input type={"text"} onChange={e => clientInfo.state = e.target.value} />

        <label>Zip</label>
        <input type={"number"} />

        <input type={"submit"} onClick={e => {
          props.setClientInfo(clientInfo);
          e.preventDefault();
        }} />
      </form>
    </div>
  );
}

export default ClientInfoForm;
