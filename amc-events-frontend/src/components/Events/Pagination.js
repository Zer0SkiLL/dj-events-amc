import React from 'react'

import Link from 'next/link'

export default function Pagination({ page, lastPage }) {
  return (
    <div className="row justify-content-center align-items-center mt-5">
        {page !== 1 &&
          <div className="col-auto my-1">
              <Link href={`/events?page=${page-1}`}>
            <a href="#!" className="btn btn-soft-primary btn-sm">
              Previous
            </a>
            </Link>
          </div>
}
          <div className="col-auto my-1">
            <nav>
                <ul className="pagination rounded mb-0">
                {Array.apply(null, Array(lastPage)).map((p, i) => (
                    page === i+1 ? <li key={i} className="page-item active"><Link href={`/events?page=${i+1}`}><a className="page-link" href="#!">
                    {i+1}
                  </a>
                  </Link>
                </li> : <li key={i} className="page-item"> <a className="page-link" href="#!">
                    {i+1}
                  </a>
                </li>
                ))}
              
              </ul>
            </nav>
          </div>
          {page < lastPage &&
          <div className="col-auto my-1">
              <Link href={`/events?page=${page+1}`}>
            <a href="#!" className="btn btn-soft-primary btn-sm">
              Next
            </a>
            </Link>
          </div>
}
        </div>
  )
}
