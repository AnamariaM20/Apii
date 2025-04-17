import { NavLink } from "react-router-dom";
import "./sidebar.css"
import Table from "../Components/Table/Table";

const Sidebar = ({ setReqType }) => {
  return (
    <div style={{ width: "200px", padding: "1rem", background: "#eee" }}>
      <h2>My API Project</h2>
      <ul>
        <li>
          <NavLink to="/placeholder/users" onClick={() => setReqType("users")}>
            Users
          </NavLink>
        </li>
        <li>
          <NavLink to="/placeholder/posts" onClick={() => setReqType("posts")}>
            Posts
          </NavLink>
        </li>
        <li>
          <NavLink to="/placeholder/comments" onClick={() => setReqType("comments")}>
            Comments
          </NavLink>
        </li>
        <li>
          <NavLink to="/table">
            Table
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;