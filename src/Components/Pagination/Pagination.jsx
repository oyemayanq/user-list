import PaginationBox from "./PaginationBox";
import styles from "./pagination.module.css";

export default function Pagination({ page, pageClick }) {
  const minValue = page > 3 ? page - 2 : 1;
  const maxValue = page < 3 ? 5 : page + 2;
  const pageValues = [];
  for (let i = minValue; i <= maxValue; i++) {
    pageValues.push(i);
  }

  return (
    <div className={styles.pagination}>
      <PaginationBox value="Previous" />
      {pageValues?.map((value) => {
        return (
          <PaginationBox
            key={value}
            value={value}
            isActivePage={page === value}
            pageClick={(v) => pageClick(v)}
          />
        );
      })}
      <PaginationBox value="Next" />
    </div>
  );
}
