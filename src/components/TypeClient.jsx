import "./TypeClient.css";
function TypeClient({ customertype, setcustomer}) {
    // customertype: can be 2 states or "Rewards Members" or "Regular Customer"
    // setcustomer: function to update the state of customertype
    return (
    <div className="typeClientBox">
      <h2>Type of client</h2>
      <p>Rewards Members <input type="checkbox" checked={customertype=="Rewards Members"} onChange={() => setcustomer("Rewards Members")}/></p>
      <p>Regular Customer <input type="checkbox" checked={customertype=="Regular Customer"} onChange={() => setcustomer("Regular Customer")} /></p>
    </div>
  )
}
export default TypeClient;
