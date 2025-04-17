import GeoMap from "./GeoMap";

import "./geolocation.css"

const Geolocation = ({ users, close, myLocation }) => {
  return (
    <div>
      <h2>Users Location Data</h2>

      <div>
        <h2>Users Map</h2>
        <div className="wrapp-geolocation">
          <div className="geolocation">
            <button onClick={() => close(false)}>
              x
            </button>
            <GeoMap users={users} myLocation={myLocation} />
          </div>
        </div>
      </div>
      {/* <table border="1" cellPadding="8" style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Latitude</th>
              <th>Longitude</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.address?.geo?.lat || "-"}</td>
                <td>{user.address?.geo?.lng || "-"}</td>
              </tr>
            ))}
          </tbody> */}
      {/* </table> */}
    </div>
  );
};

export default Geolocation;