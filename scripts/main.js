/*
 *  ___
 * /\_ \
 * \//\ \      __      ___   __  __    ___     ___
 *   \ \ \   /'__`\  /' _ `\/\ \/\ \  / __`\ /' _ `\
 *    \_\ \_/\ \_\.\_/\ \/\ \ \ \_\ \/\ \_\ \/\ \/\ \
 *    /\____\ \__/.\_\ \_\ \_\/`____ \ \____/\ \_\ \_\
 *    \/____/\/__/\/_/\/_/\/_/`/___/> \/___/  \/_/\/_/
 *                               /\___/
 *                               \/__/
 *
 * Designed, built, and released under MIT license by @mdo. Learn more at
 * https://github.com/poole/lanyon.
 */


/*
 * Contents
 *
 * Global resets
 * Masthead
 * Sidebar
 * Slide effect
 * Posts and pages
 * Pagination
 * Reverse layout
 * Themes
 */


/*
 * Global resets
 *
 * Update the foundational and global aspects of the page.
 */

/* Prevent scroll on narrow devices */
html,
body {
  overflow-x: hidden;
}

html {
  font-family: "PT Sans", Helvetica, Arial, sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: "PT Sans", Helvetica, Arial, sans-serif;
  font-weight: 400;
  color: #313131;
  letter-spacing: -.025rem;
}


/*
 * Wrapper
 *
 * The wrapper is used to position site content when the sidebar is toggled. We
 * use an outter wrap to position the sidebar without interferring with the
 * regular page content.
 */

.wrap {
  position: relative;
  width: 100%;
}


/*
 * Container
 *
 * Center the page content.
 */

.container {
  max-width: 28rem;
}
@media (min-width: 38em) {
  .container {
    max-width: 32rem;
  }
}
@media (min-width: 56em) {
  .container {
    max-width: 38rem;
  }
}


/*
 * Masthead
 *
 * Super small header above the content for site name and short description.
 */

.masthead {
  padding-top:    1rem;
  padding-bottom: 1rem;
  margin-bottom: 3rem;
  border-bottom: 1px solid #eee;
}
.masthead-title {
  margin-top: 0;
  margin-bottom: 0;
  color: #505050;
}
.masthead-title a {
  color: #505050;
}
.masthead-title small {
  font-size: 75%;
  font-weight: 400;
  color: #c0c0c0;
  letter-spacing: 0;
}

@media (max-width: 48em) {
  .masthead-title {
    text-align: center;
  }
  .masthead-title small {
    display: none;
  }
}


/*
 * Sidebar
 *
 * The sidebar is the drawer, the item we are toggling with our handy hamburger
 * button in the corner of the page.
 *
 * This particular sidebar implementation was inspired by Chris Coyier's
 * "Offcanvas Menu with CSS Target" article, and the checkbox variation from the
 * comments by a reader. It modifies both implementations to continue using the
 * checkbox (no change in URL means no polluted browser history), but this uses
 * `position` for the menu to avoid some potential content reflow issues.
 *
 * Source: http://css-tricks.com/off-canvas-menu-with-css-target/#comment-207504
 */

/* Style and "hide" the sidebar */
.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: -14rem;
  width: 14rem;
  visibility: hidden;
  overflow-y: auto;
  font-family: "PT Sans", Helvetica, Arial, sans-serif;
  font-size: .875rem; /* 15px */
  color: rgba(255,255,255,.6);
  background-color: #202020;
  -webkit-transition: all .3s ease-in-out;
          transition: all .3s ease-in-out;
}
@media (min-width: 30em) {
  .sidebar {
    font-size: .75rem; /* 14px */
  }
}

/* Sidebar content */
.sidebar a {
  font-weight: normal;
  color: #fff;
}
.sidebar-item {
  padding: 1rem;
}
.sidebar-item p:last-child {
  margin-bottom: 0;
}

/* Sidebar nav */
.sidebar-nav {
  border-bottom: 1px solid rgba(255,255,255,.1);
}
.sidebar-nav-item {
  display: block;
  padding: .5rem 1rem;
  border-top: 1px solid rgba(255,255,255,.1);
}
.sidebar-nav-item.active,
a.sidebar-nav-item:hover,
a.sidebar-nav-item:focus {
  text-decoration: none;
  background-color: rgba(255,255,255,.1);
  border-color: transparent;
}

@media (min-width: 48em) {
  .sidebar-item {
    padding: 1.5rem;
  }
  .sidebar-nav-item {
    padding-left:  1.5rem;
    padding-right: 1.5rem;
  }
}

/* Hide the sidebar checkbox that we toggle with `.sidebar-toggle` */
.sidebar-checkbox {
  display: none;
}

/* Style the `label` that we use to target the `.sidebar-checkbox` */
.sidebar-toggle {
  position: absolute;
  top:  1rem;
  left: 1rem;
  display: block;
  width: 2.2rem;
  padding: .5rem .65rem;
  color: #505050;
  background-color: #fff;
  border-radius: 4px;
  cursor: pointer;
}
.sidebar-toggle:before {
  display: block;
  content: "";
  width: 100%;
  padding-bottom: .125rem;
  border-top: .375rem double;
  border-bottom: .125rem solid;

  /* Make the border inside the box */
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
}

.sidebar-toggle:active,
#sidebar-checkbox:checked ~ .sidebar-toggle {
  color: #fff;
  background-color: #505050;
}

@media (min-width: 30.1em) {
  .sidebar-toggle {
    position: fixed;
    width: 2.25rem;
  }
  .sidebar-toggle:before {
    padding-bottom: .15rem;
    border-top-width: .45rem;
    border-bottom-width: .15rem;
  }
}


/* Slide effect
 *
 * Handle the sliding effects of the sidebar and content in one spot, seperate
 * from the default styles.
 *
 * As an a heads up, we don't use `transform: translate3d()` here because when
 * mixed with `position: fixed;` for the sidebar toggle, it creates a new
 * containing block. Put simply, the fixed sidebar toggle behaves like
 * `position: absolute;` when transformed.
 *
 * Read more about it at http://meyerweb.com/eric/thoughts/2011/09/12/.
 */

.wrap,
.sidebar,
.sidebar-toggle {
  -webkit-backface-visibility: hidden;
      -ms-backface-visibility: hidden;
          backface-visibility: hidden;
}
.wrap,
.sidebar-toggle {
  -webkit-transition: -webkit-transform .3s ease-in-out;
          transition: transform .3s ease-in-out;
}

#sidebar-checkbox:checked + .sidebar {
  z-index: 10;
  visibility: visible;
}
#sidebar-checkbox:checked ~ .sidebar,
#sidebar-checkbox:checked ~ .wrap,
#sidebar-checkbox:checked ~ .sidebar-toggle {
  -webkit-transform: translateX(14rem);
      -ms-transform: translateX(14rem);
          transform: translateX(14rem);
}


/*
 * Posts and pages
 *
 * Each post is wrapped in `.post` and is used on default and post layouts. Each
 * page is wrapped in `.page` and is only used on the page layout.
 */

.page,
.post {
  margin-bottom: 4em;
}

/* Blog post or page title */
.page-title,
.post-title,
.post-title a {
  color: #303030;
}
.page-title,
.post-title {
  margin-top: 0;
}

/* Meta data line below post title */
.post-date {
  display: block;
  margin-top: -.5rem;
  margin-bottom: 1rem;
  color: #9a9a9a;
}

/* Related posts */
.related {
  padding-top: 2rem;
  padding-bottom: 2rem;
  border-top: 1px solid #eee;
}
.related-posts {
  padding-left: 0;
  list-style: none;
}
.related-posts h3 {
  margin-top: 0;
}
.related-posts li small {
  font-size: 75%;
  color: #999;
}
.related-posts li a:hover {
  color: #268bd2;
  text-decoration: none;
}
.related-posts li a:hover small {
  color: inherit;
}


/*
 * Pagination
 *
 * Super lightweight (HTML-wise) blog pagination. `span`s are provide for when
 * there are no more previous or next posts to show.
 */

.pagination {
  overflow: hidden; /* clearfix */
  margin-left: -1rem;
  margin-right: -1rem;
  font-family: "PT Sans", Helvetica, Arial, sans-serif;
  color: #ccc;
  text-align: center;
}

/* Pagination items can be `span`s or `a`s */
.pagination-item {
  display: block;
  padding: 1rem;
  border: 1px solid #eee;
}
.pagination-item:first-child {
  margin-bottom: -1px;
}

/* Only provide a hover state for linked pagination items */
a.pagination-item:hover {
  background-color: #f5f5f5;
}

@media (min-width: 30em) {
  .pagination {
    margin: 3rem 0;
  }
  .pagination-item {
    float: left;
    width: 50%;
  }
  .pagination-item:first-child {
    margin-bottom: 0;
    border-top-left-radius:    4px;
    border-bottom-left-radius: 4px;
  }
  .pagination-item:last-child {
    margin-left: -1px;
    border-top-right-radius:    4px;
    border-bottom-right-radius: 4px;
  }
}


/*
 * Reverse layout
 *
 * Flip the orientation of the page by placing the `.sidebar` and sidebar toggle
 * on the right side.
 */

.layout-reverse .sidebar {
  left: auto;
  right: -14rem;
}
.layout-reverse .sidebar-toggle {
  left: auto;
  right: 1rem;
}

.layout-reverse #sidebar-checkbox:checked ~ .sidebar,
.layout-reverse #sidebar-checkbox:checked ~ .wrap,
.layout-reverse #sidebar-checkbox:checked ~ .sidebar-toggle {
  -webkit-transform: translateX(-14rem);
      -ms-transform: translateX(-14rem);
          transform: translateX(-14rem);
}


/*
 * Themes
 *
 * Apply custom color schemes by adding the appropriate class to the `body`.
 * Based on colors from Base16: http://chriskempson.github.io/base16/#default.
 */

/* Red */
.theme-base-08 .sidebar,
.theme-base-08 .sidebar-toggle:active,
.theme-base-08 #sidebar-checkbox:checked ~ .sidebar-toggle {
  background-color: #ac4142;
}
.theme-base-08 .container a,
.theme-base-08 .sidebar-toggle,
.theme-base-08 .related-posts li a:hover {
  color: #ac4142;
}

/* Orange */
.theme-base-09 .sidebar,
.theme-base-09 .sidebar-toggle:active,
.theme-base-09 #sidebar-checkbox:checked ~ .sidebar-toggle {
  background-color: #d28445;
}
.theme-base-09 .container a,
.theme-base-09 .sidebar-toggle,
.theme-base-09 .related-posts li a:hover {
  color: #d28445;
}

/* Yellow */
.theme-base-0a .sidebar,
.theme-base-0a .sidebar-toggle:active,
.theme-base-0a #sidebar-checkbox:checked ~ .sidebar-toggle {
  background-color: #f4bf75;
}
.theme-base-0a .container a,
.theme-base-0a .sidebar-toggle,
.theme-base-0a .related-posts li a:hover {
  color: #f4bf75;
}

/* Green */
.theme-base-0b .sidebar,
.theme-base-0b .sidebar-toggle:active,
.theme-base-0b #sidebar-checkbox:checked ~ .sidebar-toggle {
  background-color: #90a959;
}
.theme-base-0b .container a,
.theme-base-0b .sidebar-toggle,
.theme-base-0b .related-posts li a:hover {
  color: #90a959;
}

/* Cyan */
.theme-base-0c .sidebar,
.theme-base-0c .sidebar-toggle:active,
.theme-base-0c #sidebar-checkbox:checked ~ .sidebar-toggle {
  background-color: #75b5aa;
}
.theme-base-0c .container a,
.theme-base-0c .sidebar-toggle,
.theme-base-0c .related-posts li a:hover {
  color: #75b5aa;
}

/* Blue */
.theme-base-0d .sidebar,
.theme-base-0d .sidebar-toggle:active,
.theme-base-0d #sidebar-checkbox:checked ~ .sidebar-toggle {
  background-color: #6a9fb5;
}
.theme-base-0d .container a,
.theme-base-0d .sidebar-toggle,
.theme-base-0d .related-posts li a:hover {
  color: #6a9fb5;
}

/* Magenta */
.theme-base-0e .sidebar,
.theme-base-0e .sidebar-toggle:active,
.theme-base-0e #sidebar-checkbox:checked ~ .sidebar-toggle {
  background-color: #aa759f;
}
.theme-base-0e .container a,
.theme-base-0e .sidebar-toggle,
.theme-base-0e .related-posts li a:hover {
  color: #aa759f;
}

/* Brown */
.theme-base-0f .sidebar,
.theme-base-0f .sidebar-toggle:active,
.theme-base-0f #sidebar-checkbox:checked ~ .sidebar-toggle {
  background-color: #8f5536;
}
.theme-base-0f .container a,
.theme-base-0f .sidebar-toggle,
.theme-base-0f .related-posts li a:hover {
  color: #8f5536;
}


/*
 * Overlay sidebar
 *
 * Make the sidebar content overlay the viewport content instead of pushing it
 * aside when toggled.
 */

.sidebar-overlay #sidebar-checkbox:checked ~ .wrap {
  -webkit-transform: translateX(0);
      -ms-transform: translateX(0);
          transform: translateX(0);
}
.sidebar-overlay #sidebar-checkbox:checked ~ .sidebar-toggle {
  box-shadow: 0 0 0 .25rem #fff;
}
.sidebar-overlay #sidebar-checkbox:checked ~ .sidebar {
  box-shadow: .25rem 0 .5rem rgba(0,0,0,.1);
}

/* Only one tweak for a reverse layout */
.layout-reverse.sidebar-overlay #sidebar-checkbox:checked ~ .sidebar {
  box-shadow: -.25rem 0 .5rem rgba(0,0,0,.1);
}
