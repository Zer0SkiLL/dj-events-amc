import React from 'react'
import Link from 'next/dist/client/link'
import Image from 'next/dist/client/image'


export default function EventCard({evt}) {
  return (
    <div className="col-lg-6 col-md-6">
              <div className="single-article rounded-custom my-3">
                <Link href={`/events/${evt.slug}`}>
                  <a className="article-img">
                    <Image
                      width={414}
                      height={224}
                      src={
                        evt.image.data
                            ? evt.image.data.attributes.formats.medium.url
                            : '/blog/blog-1.jpg'
                    }
                      alt="event"
                    />
                  </a>
                </Link>
                <div className="article-content p-4">
                  <div className="article-category mb-4 d-block">
                    <a
                      href="#!"
                      className={`d-inline-block text-dark badge ${evt.class}`}
                    >
                      {evt.type}
                    </a>
                  </div>
                  <Link href={`/events/${evt.slug}`}>
                    <a>
                      <h2 className="h5 article-title limit-2-line-text">
                        {evt.name}
                      </h2>
                    </a>
                  </Link>
                  {/* todo --overview description in strapi */}
                  {/* <ReactMarkdown >{evt.description}</ReactMarkdown> */}
                  <p className="limit-2-line-text">{evt.overviewDescription}</p>

                  {/* <a href="#!">
                    <div className="d-flex align-items-center pt-4">
                      <div className="avatar">
                        <img
                          src={evt.profilePic}
                          alt="avatar"
                          width="40"
                          className="img-fluid rounded-circle me-3"
                        />
                      </div>
                      <div className="avatar-info">
                        <h6 className="mb-0 avatar-name">{evt.author} </h6>
                        <span className="small fw-medium text-muted">
                          {evt.data}
                        </span>
                      </div>
                    </div>
                  </a> */}
                </div>
              </div>
            </div>
  )
}
