import Spinner from "../Spinner/Spinner";
import styles from "./user-list.module.css";

import UserItem from "./UserItem";

export default function UserList({ userList, loading }) {
  console.log(userList);

  return (
    <div className={styles["list-container"]}>
      {loading ? (
        <div className={styles["spinner-container"]}>
          <Spinner />
        </div>
      ) : (
        <div>
          {userList && userList?.length > 0 ? (
            userList?.map((user) => {
              return (
                <div key={user?.id} className={styles["list-item"]}>
                  <UserItem user={user} />
                </div>
              );
            })
          ) : (
            <p>There are no users</p>
          )}
        </div>
      )}
    </div>
  );
}
