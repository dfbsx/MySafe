import React from "react";
import "./MessageTab.css";
import { SlArrowRight } from "react-icons/sl";
import { Link } from "react-router-dom";
import key from "../const"

function MessageTab({ date, title, id }) {
  
  const storeId= () => {
    localStorage.setItem("messageId",JSON.stringify({messageId: id}));
  }

  return (
    <Link to={`messages/${id}`}>
      <table className="messageRow" onClick={storeId}>
        <thead>
          <tr>
            <td className="tableDate">{date}</td>
            <td className="tableMessageTitle">{title}</td>
            <td className="moreAboutMessage">
              <SlArrowRight style={{ color: "#329DFF" }} />
            </td>
          </tr>
        </thead>
      </table>
    </Link>
  );
}

export default MessageTab;
