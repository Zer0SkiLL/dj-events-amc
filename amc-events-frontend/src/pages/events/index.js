import React from 'react'

import Layout from '@layout/Layout'
import FooterShort from '@layout/Footer/FooterShort'

import PageHeader from '@components/common/PageHeader'
import EventOverview from '@components/Events/EventOverview'
import { API_URL } from '@config/index';

const PER_PAGE = 5;

export default function EventsPage({events, page, pageTotal}) {
  return (
    <Layout>        
      
      
      <PageHeader title='Events' />
      <EventOverview events={events} page={page} pageTotal={pageTotal}/>
      <FooterShort footerGradient />
    </Layout>
  )
}

export async function getServerSideProps({ query: { page = 1 } }) {
    const res = await fetch(
        `${API_URL}/api/events?populate=*&_sort=date:ASC&pagination[pageSize]=${PER_PAGE}&pagination[page]=${page}`
    );
    const json = await res.json();

    page = json.meta.pagination.page;

    const events = json.data;

    return {
        props: {
            events,
            page,
            pageTotal: json.meta.pagination.pageCount,
        },
    };
}