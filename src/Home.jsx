import React from "react";
// import LoadScripts from "./assets/Loadscript";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
require("./assets/css/theme-7.css");

function Home() {
  return (
    <div>
      <title>Bootstrap 4 Blog Template For Developers</title>
      {/* Meta */}
      <meta charSet='utf-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta name='description' content='Blog Template' />
      <meta name='author' content='Xiaoying Riley at 3rd Wave Media' />
      <link rel='shortcut icon' href='favicon.ico' />
      {/* FontAwesome JS*/}
      {/* Theme CSS */}
      <link id='theme-style' rel='stylesheet' href='assets/css/theme-1.css' />
      <header className='header text-center'>
        <h1 className='blog-name pt-lg-4 mb-0'>
          <a href=''>Anthony's Blog</a>
        </h1>
        <nav className='navbar navbar-expand-lg navbar-dark'>
          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navigation'
            aria-controls='navigation'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
          </button>
          <div id='navigation' className='collapse navbar-collapse flex-column'>
            <div className='profile-section pt-3 pt-lg-0'>
              <img
                className='profile-image mb-3 rounded-circle mx-auto'
                src='assets/images/profile.png'
                alt='image'
              />
              <div className='bio mb-3'>
                Hi, my name is Anthony Doe. Briefly introduce yourself here. You
                can also provide a link to the about page.
                <br />
                <a href='about'>Find out more about me</a>
              </div>
              {/*//bio*/}
              <ul className='social-list list-inline py-3 mx-auto'>
                <li className='list-inline-item'>
                  <a href='#'>
                    <i className='fab fa-twitter fa-fw' />
                  </a>
                </li>
                <li className='list-inline-item'>
                  <a href='#'>
                    <i className='fab fa-linkedin-in fa-fw' />
                  </a>
                </li>
                <li className='list-inline-item'>
                  <a href='#'>
                    <i className='fab fa-github-alt fa-fw' />
                  </a>
                </li>
                <li className='list-inline-item'>
                  <a href='#'>
                    <i className='fab fa-stack-overflow fa-fw' />
                  </a>
                </li>
                <li className='list-inline-item'>
                  <a href='#'>
                    <i className='fab fa-codepen fa-fw' />
                  </a>
                </li>
              </ul>
              {/*//social-list*/}
              <hr />
            </div>
            {/*//profile-section*/}
            <ul className='navbar-nav flex-column text-left'>
              <li className='nav-item active'>
                <a className='nav-link' href=''>
                  <i className='fas fa-home fa-fw mr-2' />
                  Blog Home <span className='sr-only'>(current)</span>
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='blog-post'>
                  <i className='fas fa-bookmark fa-fw mr-2' />
                  Blog Post
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='about'>
                  <i className='fas fa-user fa-fw mr-2' />
                  About Me
                </a>
              </li>
            </ul>
            <div className='my-2 my-md-3'>
              <a
                className='btn btn-primary'
                href='https://themes.3rdwavemedia.com/'
                target='_blank'
              >
                Get in Touch
              </a>
            </div>
          </div>
        </nav>
      </header>
      <div className='main-wrapper'>
        <section className='cta-section theme-bg-light py-5'>
          <div className='container text-center'>
            <h2 className='heading'>
              DevBlog - A Blog Template Made For Developers
            </h2>
            <div className='intro'>
              Welcome to my blog. Subscribe and get my latest blog post in your
              inbox.
            </div>
            <form className='signup-form form-inline justify-content-center pt-3'>
              <div className='form-group'>
                <label className='sr-only' htmlFor='semail'>
                  Your email
                </label>
                <input
                  type='email'
                  id='semail'
                  name='semail1'
                  className='form-control mr-md-1 semail'
                  placeholder='Enter email'
                />
              </div>
              <button type='submit' className='btn btn-primary'>
                Subscribe
              </button>
            </form>
          </div>
          {/*//container*/}
        </section>
        <section className='blog-list px-3 py-5 p-md-5'>
          <div className='container'>
            <div className='item mb-5'>
              <div className='media'>
                <img
                  className='mr-3 img-fluid post-thumb d-none d-md-flex'
                  src='assets/images/blog/blog-post-thumb-1.jpg'
                  alt='image'
                />
                <div className='media-body'>
                  <h3 className='title mb-1'>
                    <a href='blog-post'>
                      Why Every Developer Should Have A Blog
                    </a>
                  </h3>
                  <div className='meta mb-1'>
                    <span className='date'>Published 2 days ago</span>
                    <span className='time'>5 min read</span>
                    <span className='comment'>
                      <a href='#'>8 comments</a>
                    </span>
                  </div>
                  <div className='intro'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies...
                  </div>
                  <a className='more-link' href='blog-post'>
                    Read more →
                  </a>
                </div>
                {/*//media-body*/}
              </div>
              {/*//media*/}
            </div>
            {/*//item*/}
            <div className='item mb-5'>
              <div className='media'>
                <img
                  className='mr-3 img-fluid post-thumb d-none d-md-flex'
                  src='assets/images/blog/blog-post-thumb-2.jpg'
                  alt='image'
                />
                <div className='media-body'>
                  <h3 className='title mb-1'>
                    <a href='blog-post'>
                      A Guide to Becoming a Full-Stack Developer
                    </a>
                  </h3>
                  <div className='meta mb-1'>
                    <span className='date'>Published 3 months ago</span>
                    <span className='time'>3 min read</span>
                    <span className='comment'>
                      <a href='#'>26 comments</a>
                    </span>
                  </div>
                  <div className='intro'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies...
                  </div>
                  <a className='more-link' href='blog-post'>
                    Read more →
                  </a>
                </div>
                {/*//media-body*/}
              </div>
              {/*//media*/}
            </div>
            {/*//item*/}
            <div className='item mb-5'>
              <div className='media'>
                <img
                  className='mr-3 img-fluid post-thumb d-none d-md-flex'
                  src='assets/images/blog/blog-post-thumb-3.jpg'
                  alt='image'
                />
                <div className='media-body'>
                  <h3 className='title mb-1'>
                    <a href='blog-post'>High Performance JavaScript</a>
                  </h3>
                  <div className='meta mb-1'>
                    <span className='date'>Published 1 month ago</span>
                    <span className='time'>8 min read</span>
                    <span className='comment'>
                      <a href='#'>12 comments</a>
                    </span>
                  </div>
                  <div className='intro'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies...
                  </div>
                  <a className='more-link' href='blog-post'>
                    Read more →
                  </a>
                </div>
                {/*//media-body*/}
              </div>
              {/*//media*/}
            </div>
            {/*//item*/}
            <div className='item mb-5'>
              <div className='media'>
                <img
                  className='mr-3 img-fluid post-thumb d-none d-md-flex'
                  src='assets/images/blog/blog-post-thumb-4.jpg'
                  alt='image'
                />
                <div className='media-body'>
                  <h3 className='title mb-1'>
                    <a href='blog-post'>Top 5 JavaScript Frameworks</a>
                  </h3>
                  <div className='meta mb-1'>
                    <span className='date'>Published 2 months ago</span>
                    <span className='time'>15 min read</span>
                    <span className='comment'>
                      <a href='#'>3 comments</a>
                    </span>
                  </div>
                  <div className='intro'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies...
                  </div>
                  <a className='more-link' href='blog-post'>
                    Read more →
                  </a>
                </div>
                {/*//media-body*/}
              </div>
              {/*//media*/}
            </div>
            {/*//item*/}
            <div className='item mb-5'>
              <div className='media'>
                <img
                  className='mr-3 img-fluid post-thumb d-none d-md-flex'
                  src='assets/images/blog/blog-post-thumb-5.jpg'
                  alt='image'
                />
                <div className='media-body'>
                  <h3 className='title mb-1'>
                    <a href='blog-post'>Learn React in 24 Hours</a>
                  </h3>
                  <div className='meta mb-1'>
                    <span className='date'>Published 2 months ago</span>
                    <span className='time'>10 min read</span>
                    <span className='comment'>
                      <a href='#'>23 comments</a>
                    </span>
                  </div>
                  <div className='intro'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies...
                  </div>
                  <a className='more-link' href='blog-post'>
                    Read more →
                  </a>
                </div>
                {/*//media-body*/}
              </div>
              {/*//media*/}
            </div>
            {/*//item*/}
            <div className='item'>
              <div className='media'>
                <img
                  className='mr-3 img-fluid post-thumb d-none d-md-flex'
                  src='assets/images/blog/blog-post-thumb-6.jpg'
                  alt='image'
                />
                <div className='media-body'>
                  <h3 className='title mb-1'>
                    <a href='blog-post'>About Remote Working</a>
                  </h3>
                  <div className='meta mb-1'>
                    <span className='date'>Published 3 months ago</span>
                    <span className='time'>2 min read</span>
                    <span className='comment'>
                      <a href='#'>1 comment</a>
                    </span>
                  </div>
                  <div className='intro'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies...
                  </div>
                  <a className='more-link' href='blog-post'>
                    Read more →
                  </a>
                </div>
                {/*//media-body*/}
              </div>
              {/*//media*/}
            </div>
            {/*//item*/}
            <nav className='blog-nav nav nav-justified my-5'>
              <a
                className='nav-link-prev nav-item nav-link d-none rounded-left'
                href='#'
              >
                Previous
                <i className='arrow-prev fas fa-long-arrow-alt-left' />
              </a>
              <a
                className='nav-link-next nav-item nav-link rounded'
                href='blog-list'
              >
                Next
                <i className='arrow-next fas fa-long-arrow-alt-right' />
              </a>
            </nav>
          </div>
        </section>
        <footer className='footer text-center py-2 theme-bg-dark'>
          {/*/* This template is released under the Creative Commons Attribution 3.0 License. Please keep the attribution link below when using for your own project. Thank you for your support. :) If you'd like to use the template without the attribution, you can buy the commercial license via our website: themes.3rdwavemedia.com * /*/}
          <small className='copyright'>
            Designed with{" "}
            <i className='fas fa-heart' style={{ color: "#fb866a" }} /> by{" "}
            <a href='http://themes.3rdwavemedia.com' target='_blank'>
              Xiaoying Riley
            </a>{" "}
            for developers
          </small>
        </footer>
      </div>
      {/*//main-wrapper*/}
      {/* *****CONFIGURE STYLE (REMOVE ON YOUR PRODUCTION SITE)****** */}
      <div id='config-panel' className='config-panel d-none d-lg-block'>
        <div className='panel-inner'>
          <a
            id='config-trigger'
            className='config-trigger config-panel-hide text-center'
            href='#'
          >
            <i
              className='fas fa-cog fa-spin mx-auto'
              data-fa-transform='down-6'
            />
          </a>
          <h5 className='panel-title'>Choose Colour</h5>
          <ul id='color-options' className='list-inline mb-0'>
            <li className='theme-1 active list-inline-item'>
              <a data-style='assets/css/theme-1.css' href='#' />
            </li>
            <li className='theme-2  list-inline-item'>
              <a data-style='./assets/css/theme-2.css' href='#' />
            </li>
            <li className='theme-3  list-inline-item'>
              <a data-style='assets/css/theme-3.css' href='#' />
            </li>
            <li className='theme-4  list-inline-item'>
              <a data-style='assets/css/theme-4.css' href='#' />
            </li>
            <li className='theme-5  list-inline-item'>
              <a data-style='assets/css/theme-5.css' href='#' />
            </li>
            <li className='theme-6  list-inline-item'>
              <a data-style='assets/css/theme-6.css' href='#' />
            </li>
            <li className='theme-7  list-inline-item'>
              <a data-style='assets/css/theme-7.css' href='#' />
            </li>
            <li className='theme-8  list-inline-item'>
              <a data-style='assets/css/theme-8.css' href='#' />
            </li>
          </ul>
          <a id='config-close' className='close' href='#'>
            <i className='fa fa-times-circle' />
          </a>
        </div>
        {/*//panel-inner*/}
      </div>
      {/*//configure-panel*/}
      {/* Javascript */}
      {/* Style Switcher (REMOVE ON YOUR PRODUCTION SITE) */}
    </div>
  );
}

export default Home;
