import styles from "./user-item.module.css";

const item = {
  ID: "10",
  JobTitle: "Investment  Advisor",
  EmailAddress: "Cassandra_Blackburn688@corti.com",
  FirstNameLastName: "Cassandra Blackburn",
  Email: "Cassandra_Blackburn2705@fuliss.net",
  Phone: "4-365-303-5207",
  Company: "Erickson",
};

export default function UserItem({ user }) {
  return (
    <div className={styles["user-card"]}>
      <h3 className={styles["user-name"]}>{user?.FirstNameLastName}</h3>
      <div className={styles["company-container"]}>
        <p className={styles["company-name"]}>{user?.Company}</p>
        <div className={styles["divider"]}></div>
        <p className={styles["job-title"]}>{user?.JobTitle}</p>
      </div>
      <div className={styles["contact-container"]}>
        <p>{user?.Email}</p>
        <div className={styles.divider}></div>
        <p>{user?.Phone}</p>
      </div>
    </div>
  );
}
