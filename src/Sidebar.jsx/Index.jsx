import { NavLink } from "react-router-dom";
import "./sidebar.css"
import Table from "../Components/Table/Table";
import { useTranslation } from "react-i18next";


const Sidebar = ({ setReqType }) => {
  const { t } = useTranslation();

  return (
    <div style={{ width: "200px", padding: "1rem", background: "#eee" }}>
      <h2>{t('title.titolo')}</h2>
      <ul>
        <li>
          <NavLink to="/placeholder/users" onClick={() => setReqType("users")}>
          {t('title.sidebar1')}
          </NavLink>
        </li>
        <li>
          <NavLink to="/placeholder/posts" onClick={() => setReqType("posts")}>
          {t('title.sidebar2')}
          </NavLink>
        </li>
        <li>
          <NavLink to="/placeholder/comments" onClick={() => setReqType("comments")}>
          {t('title.sidebar3')}
          </NavLink>
        </li>
        <li>
          <NavLink to="/table">
          {t('title.sidebar4')}
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;