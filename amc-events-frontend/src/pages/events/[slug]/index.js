import React from 'react'
import { API_URL } from '@config/index';

import Layout from '@layout/Layout'
import PageHeader from '@components/common/PageHeader'
import FooterShort from '@layout/Footer/FooterShort'

import ReactMarkdown from 'react-markdown';
import Link from 'next/link';

export default function EventsDetailPage({ evt }) {

  return (
    <Layout title="Event" desc="Event">
      <PageHeader title={`${evt.name}`} />
      <Link href={`/events/${evt.slug}/guests`}>Guest List</Link>
      <ReactMarkdown >{evt.description}</ReactMarkdown> 
      <FooterShort />
    </Layout>
  )
}

export async function getServerSideProps({ query: { slug } }) {
    const res = await fetch(
        `${API_URL}/api/events/?filters[slug][$eq]=${slug}&populate=*`
    );
    const json = await res.json();
    const events = json.data;

    return {
        props: {
            evt: events[0].attributes,
            id: events[0].id,
        },
    };
}
