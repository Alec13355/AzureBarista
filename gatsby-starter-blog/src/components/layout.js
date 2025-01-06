import * as React from "react"
import { Link, Script } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      
      <script type="text/javascript" src="https://campaigns.zoho.com/js/zc.iframe.js"></script>
      <iframe frameborder="0" id="iframewin" width="100%" height="100%" src="https://zcsub-cmpzourl.maillist-manage.com/ua/Optin?od=11287eccd8a904&zx=12dbe12b6&tD=1134968a0d51d87a9&sD=1134968a0d51d898a"></iframe>


 


    
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
