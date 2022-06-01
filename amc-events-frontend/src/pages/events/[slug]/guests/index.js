import PageHeader from '@components/common/PageHeader'
import Table from '@components/table/Table'
import Layout from '@layout/Layout'
import React from 'react'
import Link from 'next/link'
import { API_URL } from '@config/index';

import { useRouter } from 'next/router'

export default function GuestsPage({guests}) {
  const router = useRouter()
  const slug = router.query.slug;

  console.log(guests)
  return (
    <Layout>       
      <PageHeader title="Guestlist"/>
      <div className="container">
        <div className="row">
          <Link href={`/events/${slug}/guests/add`}>Add</Link>
          <Table guests={guests}></Table>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps({ query: { slug } }) {
    const res = await fetch(
        `${API_URL}/api/guest-lists?populate=*/&filters[event][slug][$eq]=${slug}`
    );
    const json = await res.json();
    console.log(json)
    const guests = json.data;

    console.log(guests)

    return {
        props: {
            guests: guests
        }
    }
}