import React from 'react'
import Head from 'next/head'
import { BlogsData } from '../../data/BlogsData'
import Link from 'next/link'

const blog = () => {
    return (
        <div className='main-container'>
            <Head>
                <title>Blogs</title>
                <meta name="description" content="Professional Development Council" />

            </Head>
            <header id="page-header">
                <div className="page-heading">
                    <h2>Blogs</h2>
                </div>
            </header>

            <div className="page-container">
                <div className="card-container">
                    <div className="row">
                        {BlogsData.map((item,index) => {
                            return (
                                <div className='col-md-4' key={index}>
                                    <div className="card-item" data-aos="fade-up">
                                        <div className="card-item-img">
                                            <img src={item.image} alt='item' />
                                        </div>
                                        {item.Tags.map((tags, index) => {
                                            return (
                                                <button className="card-tags" key={index}>
                                                    {tags}
                                                </button>
                                            )
                                        })}
                                        <div className="card-item-content">
                                            <Link href={`/blog/${item.BlogTitle}`}>
                                                <p>{item.BlogTitle}</p>
                                            </Link>

                                            <div className="card__footer">
                                                <div className="user">
                                                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHw%3D&w=1000&q=80" alt="user__image" className="user__image" />
                                                    <div className="user__info">
                                                        <p>{item.author}</p>
                                                        <small>{item.date}</small>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>

        </div>
    )
}

export default blog