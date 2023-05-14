import './index.scss'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

interface PaginationProps {
  prePage(event: React.MouseEvent<HTMLButtonElement>): void;
  nextPage(event: React.MouseEvent<HTMLButtonElement>): void;
  numbers: number[];
  currentPage: number;
  changeCPage(n: number): void;
}

export function Pagination({ prePage, nextPage, numbers, currentPage, changeCPage }: PaginationProps) {
  function handlePageChange(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const pageNumber = parseInt(event.currentTarget.dataset.page || "0");
    if (pageNumber !== 0) {
      changeCPage(pageNumber);
    }
  }

  return (
    <ul className="pagination">
      <li className="page-item">
        <button onClick={prePage} className="page-link">
          <BsChevronLeft />
        </button>
      </li>
      {numbers.map((n, i) => (
        <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
          <button className="page-link" onClick={handlePageChange} data-page={n}>
            {n}
          </button>
        </li>
      ))}
      <li className="page-item">
        <button onClick={nextPage} className="page-link">
          <BsChevronRight />
        </button>
      </li>
    </ul>
  )
}
