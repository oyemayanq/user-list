import "./styles/app.css";

import { useState, useEffect } from "react";

import Spinner from "./Components/Spinner/Spinner";
import UserItem from "./Components/UserList/UserItem";
import UserList from "./Components/UserList/UserList";
import UserService from "./Services/UserService";
import Pagination from "./Components/Pagination/Pagination";

export default function App() {
  const [userList, setUserList] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  function handlePageClick(v) {
    setPage(v);
  }

  useEffect(() => {
    setLoading(true);
    UserService.getUserList(page, false)
      .then((responseData) => {
        console.log("responseData", responseData);
        setUserList(responseData?.users);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [page]);

  return (
    <main className="main">
      <UserList userList={userList} loading={loading} />
      <div className="pagination-container">
        <Pagination page={page} pageClick={handlePageClick} />
      </div>
    </main>
  );
}
