import React from 'react'

import EventCard from '@components/Events/EventCard';
import Pagination from '@components/Events/Pagination';


export default function EventOverview({ events, page, pageTotal }) {
  return (
    <section className="masonary-blog-section ptb-120">
      <div className="container">
        <div className="row">
            {events.length === 0 && <h3>No upcoming Events</h3>}
          {events.map(({ attributes } = evt, id) => (
            <EventCard key={id} evt={attributes}></EventCard>
          ))}
            {pageTotal > 1 && <Pagination page={page} lastPage={pageTotal}></Pagination>}
          
        </div>

        
      </div>
    </section>
  )
}