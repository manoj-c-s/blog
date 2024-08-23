import React from "react";

function about() {
  return (
    <div>
      <>
        <header className='header text-center'>
          <h1 className='blog-name pt-lg-4 mb-0'>
            <a href='index.html'>Anthony's Blog</a>
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
              <span className='navbar-toggler-icon'></span>
            </button>

            <div
              id='navigation'
              className='collapse navbar-collapse flex-column'
            >
              <div className='profile-section pt-3 pt-lg-0'>
                <img
                  className='profile-image mb-3 rounded-circle mx-auto'
                  src='assets/images/profile.png'
                  alt='image'
                />

                <div className='bio mb-3'>
                  Hi, my name is Anthony Doe. Briefly introduce yourself here.
                  You can also provide a link to the about page.
                  <br />
                  <a href='about.html'>Find out more about me</a>
                </div>
                <ul className='social-list list-inline py-3 mx-auto'>
                  <li className='list-inline-item'>
                    <a href='#'>
                      <i className='fab fa-twitter fa-fw'></i>
                    </a>
                  </li>
                  <li className='list-inline-item'>
                    <a href='#'>
                      <i className='fab fa-linkedin-in fa-fw'></i>
                    </a>
                  </li>
                  <li className='list-inline-item'>
                    <a href='#'>
                      <i className='fab fa-github-alt fa-fw'></i>
                    </a>
                  </li>
                  <li className='list-inline-item'>
                    <a href='#'>
                      <i className='fab fa-stack-overflow fa-fw'></i>
                    </a>
                  </li>
                  <li className='list-inline-item'>
                    <a href='#'>
                      <i className='fab fa-codepen fa-fw'></i>
                    </a>
                  </li>
                </ul>
                <hr />
              </div>

              <ul className='navbar-nav flex-column text-left'>
                <li className='nav-item'>
                  <a className='nav-link' href='index.html'>
                    <i className='fas fa-home fa-fw mr-2'></i>Blog Home{" "}
                    <span className='sr-only'>(current)</span>
                  </a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href='blog-post.html'>
                    <i className='fas fa-bookmark fa-fw mr-2'></i>Blog Post
                  </a>
                </li>
                <li className='nav-item active'>
                  <a className='nav-link' href='about.html'>
                    <i className='fas fa-user fa-fw mr-2'></i>About Me
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
          <article className='about-section py-5'>
            <div className='container'>
              <h2 className='title mb-3'>About Me</h2>

              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
                felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.{" "}
              </p>
              <figure>
                <img
                  className='img-fluid'
                  src='assets/images/about-me.jpg'
                  alt='image'
                />
              </figure>
              <h5 className='mt-5'>About The Blog</h5>
              <p>
                Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque
                rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
                Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
                rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem
                quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam
                quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien
                ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet
                orci eget eros faucibus tincidunt. Duis leo. Sed fringilla
                mauris sit amet nibh. Donec sodales sagittis magna. Sed
                consequat, leo eget bibendum sodales, augue velit cursus nunc,
                quis gravida magna mi a libero. Fusce vulputate eleifend sapien.
                Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id,
                metus.
              </p>
              <h5 className='mt-5'>My Skills and Experiences</h5>
              <p>
                Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque
                rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
                Curabitur ullamcorper ultricies nisi.
              </p>
              <h5 className='mt-5'>Side Projects</h5>
              <p>
                Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque
                rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
                Curabitur ullamcorper ultricies nisi.
              </p>

              <figure>
                <a href='https://made4dev.com'>
                  <img
                    className='img-fluid'
                    src='assets/images/promo-banner.jpg'
                    alt='image'
                  />
                </a>
              </figure>
            </div>
          </article>

          <section className='cta-section theme-bg-light py-5'>
            <div className='container text-center'>
              <h2 className='heading'>Newsletter</h2>
              <div className='intro'>
                Welcome to my blog. Subscribe and get my latest blog post in
                your inbox.
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
          </section>

          <footer className='footer text-center py-2 theme-bg-dark'>
            <small className='copyright'>
              Designed with by{" "}
              <a href='http://themes.3rdwavemedia.com' target='_blank'>
                Xiaoying Riley
              </a>{" "}
              for developers
            </small>
          </footer>
        </div>

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
              ></i>
            </a>
            <h5 className='panel-title'>Choose Colour</h5>
            <ul id='color-options' className='list-inline mb-0'>
              <li className='theme-1 active list-inline-item'>
                <a data-style='assets/css/theme-1.css' href='#'></a>
              </li>
              <li className='theme-2  list-inline-item'>
                <a data-style='assets/css/theme-2.css' href='#'></a>
              </li>
              <li className='theme-3  list-inline-item'>
                <a data-style='assets/css/theme-3.css' href='#'></a>
              </li>
              <li className='theme-4  list-inline-item'>
                <a data-style='assets/css/theme-4.css' href='#'></a>
              </li>
              <li className='theme-5  list-inline-item'>
                <a data-style='assets/css/theme-5.css' href='#'></a>
              </li>
              <li className='theme-6  list-inline-item'>
                <a data-style='assets/css/theme-6.css' href='#'></a>
              </li>
              <li className='theme-7  list-inline-item'>
                <a data-style='assets/css/theme-7.css' href='#'></a>
              </li>
              <li className='theme-8  list-inline-item'>
                <a data-style='assets/css/theme-8.css' href='#'></a>
              </li>
            </ul>
            <a id='config-close' className='close' href='#'>
              <i className='fa fa-times-circle'></i>
            </a>
          </div>
        </div>

        <script src='assets/plugins/jquery-3.3.1.min.js'></script>
        <script src='assets/plugins/popper.min.js'></script>
        <script src='assets/plugins/bootstrap/js/bootstrap.min.js'></script>

        <script src='assets/js/demo/style-switcher.js'></script>
      </>
    </div>
  );
}

export default about;
