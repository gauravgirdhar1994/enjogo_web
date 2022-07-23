import React, { Component } from 'react';
import Link from 'next/link';
import moment from 'moment';

class BlogPost extends Component {

    constructor(props){
        super(props);
        console.log('props', props);
        this.state = { blogPosts: props.blogPosts };
    }

    render() {
        console.log(this.state.blogPosts);
        return (
            <section className="blog-section pb-70" id="blog">
                <div className="container">
                    <div className="section-title">
                        <span>Blog</span>
                        <h2>Our Recent Post</h2>
                    </div>

                    <div className="row justify-content-center">
                        {this.state.blogPosts.slice(0,3)?.map((post) => {
                             return <div className="col-lg-4 col-md-6">
                             <div className="blog-item">
                                 <Link href={post.link}>
                                     <a>
                                         <img style={{width: '100%', height: '300px'}} src={post._embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url} alt="image" />
                                     </a>
                                 </Link>
  
                                 <div className="blog-content">
                                     <ul className="meta-tags">
                                         <li>
                                             <Link href={post.link}>
                                                 <a>
                                                     <i className="fa fa-user-alt"></i> 
                                                     {post._embedded.author[0].name}
                                                 </a>
                                             </Link>
                                         </li>
                                         <li>
                                             <Link href={post.link}>
                                                 <a>
                                                     <i className="fas fa-calendar-week"></i>
                                                     {moment(post.date).format('DD MMMM YYYY')}
                                                 </a>
                                             </Link>
                                         </li>
                                         {/* <li>
                                             <i className="far fa-comments"></i> 
                                             3 Comments
                                         </li> */}
                                     </ul>
 
                                     <h3>
                                         <Link href={post.link}>
                                             
                                              <a><span dangerouslySetInnerHTML={{__html: post.title.rendered}}/></a>
                                             
                                         </Link>
                                     </h3>
 
                                     <p dangerouslySetInnerHTML={{__html: post.excerpt.rendered.slice(0,300)}}></p>
                                 
                                     <Link target="_blank" href={post.link}>
                                         <a className="read-more">
                                             Read More
                                             <i className="fa fa-chevron-right"></i>
                                         </a>
                                     </Link>
                                 </div>
                             </div> 
                         </div>
                        })}
                       
                    </div>
                </div>
            </section>
        );
    }
}

export default BlogPost;