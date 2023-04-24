import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head'
import { BlogsData } from '../../data/BlogsData';
import EmptyList from '../../components/EmptyList';

const blogDetails = () => {
    const Router = useRouter()
    const BlogTitle = Router.query.blogDetails;
    const [Blog, setBlog] = useState(null);
    useEffect(() => {
        let Blog = BlogsData.find((Blog) => Blog.BlogTitle === (BlogTitle));
        if (Blog) {
            setBlog(Blog);
        }
    }, [BlogTitle]);


    return (
        <div className='main-container'>
            <Head>
                <title>Blog</title>
                <meta name="description" content="Professional Development Council" />

            </Head>

            <header id="page-header">
                <div className="page-heading">
                    <h2>Blog</h2>
                </div>
            </header>
            
            {Blog ? (


                <div className="page-container">
                    <div className="blog-content">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="section-heading">
                                    <h1>{Blog.BlogTitle}</h1>
                                </div>

                                <div className="para-contaent">
                                    <p>Published Date: {Blog.date}</p>
                                    <p>Author: {Blog.author}</p>
                                    <p>{Blog.content}</p>
                                </div>


                            </div>
                            <div className="col-md-6">
                                <img src={Blog.image} alt="event" />


                            </div>
                        </div>

                    </div>
                </div>

            ) : (
                <EmptyList />
            )}
        </div>
    )
}

export default blogDetails