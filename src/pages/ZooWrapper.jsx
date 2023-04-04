import routes from "../routes/Routes";

function ZooWrapper() {
  return (<div style={{backgroundColor:"lightblue"}}>{routes.map(route =><>{route.icon} - {route.name}</> )} </div>);
}

export default ZooWrapper;
