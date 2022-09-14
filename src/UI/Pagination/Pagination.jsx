import React from 'react';
import s from "../../components/posts/styles/postContainer.module.css";

const Pagination = ({pagesArray, page, setPage}) => {
  return (
      <div className={s.pagination}>
        {pagesArray.map(n => {
          if (n === page) {
            return <span key={n} onClick={() => setPage(n)} className={`${s.number} ${s.page_active}`}>{n}</span>
          }
          return <span key={n} onClick={() => setPage(n)} className={s.number}>{n}</span>
        })
        }
      </div>
  );
};

export default Pagination;