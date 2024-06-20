import styles from "./pagination-box.module.css";

export default function PaginationBox({ value, isActivePage, pageClick }) {
  return (
    <div
      className={`${styles["pagination-box"]} ${
        isActivePage ? styles["active-page"] : ""
      }`}
      onClick={() => pageClick(value)}
    >
      {value}
    </div>
  );
}
