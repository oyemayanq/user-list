import styles from "./pagination-box.module.css";

export default function PaginationBox({
  value,
  isActivePage,
  pageClick,
  disabled = false,
}) {
  return (
    <button
      className={`${styles["pagination-box"]} ${
        isActivePage ? styles["active-page"] : ""
      }`}
      onClick={() => pageClick(value)}
      disabled={disabled}
    >
      {value}
    </button>
  );
}
