import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  const referenceSetter = (element) => {
    console.log('Image loaded:', element);
  };

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
      {/* <div id="newsletter-container">
        <div id="sf3zc9b642d99270ab0e0d58ca830ea795655b103455b7d50f6335671bfa4eefc8bb" data-type="signupform">
          <div id="customForm">
            <div className="quick_form_18_css" 
              style={{
                backgroundColor: "rgb(255, 255, 255)",
                width: "300px",
                zIndex: 2,
                fontFamily: "Arial",
                border: "1px solid rgb(206, 206, 206)",
                overflow: "hidden"
              }} 
              name="SIGNUP_BODY"
            >
              <div style={{ textAlign: "center" }}>
                <div style={{
                  fontSize: "22px",
                  fontFamily: "Arial",
                  fontWeight: "normal",
                  color: "rgb(1, 176, 255)",
                  textAlign: "left",
                  padding: "15px",
                  width: "100%",
                  display: "block",
                  backgroundColor: "transparent"
                }} id="SIGNUP_HEADING">
                  Join Our Newsletter
                </div>
                <div style={{ position: "relative" }}>
                  <div id="Zc_SignupSuccess" style={{
                    display: "none",
                    position: "absolute",
                    marginLeft: "4%",
                    width: "90%",
                    backgroundColor: "white",
                    padding: "3px",
                    border: "3px solid rgb(194, 225, 154)",
                    marginTop: "10px",
                    marginBottom: "10px",
                    wordBreak: "break-all"
                  }}>
                    <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                      <tbody>
                        <tr>
                          <td width="10%">
                            <img 
                              className="successicon" 
                              src="https://zcsub-cmpzourl.maillist-manage.com/images/challangeiconenable.jpg" 
                              alt="success icon"
                            />
                          </td>
                          <td>
                            <span id="signupSuccessMsg" style={{
                              color: "rgb(73, 140, 132)",
                              fontFamily: "sans-serif",
                              fontSize: "14px",
                              wordBreak: "break-word"
                            }}>
                              &nbsp;&nbsp;Thank you for Signing Up
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <form 
                  method="POST" 
                  id="zcampaignOptinForm" 
                  style={{ margin: 0, width: "100%" }} 
                  action="https://zcsub-cmpzourl.maillist-manage.com/weboptin.zc" 
                  target="_zcSignup"
                >
                  <div style={{
                    backgroundColor: "rgb(255, 235, 232)",
                    padding: "10px",
                    color: "rgb(210, 0, 0)",
                    fontSize: "11px",
                    margin: "20px 10px 0px",
                    border: "1px solid rgb(255, 217, 211)",
                    opacity: 1,
                    display: "none"
                  }} id="errorMsgDiv">
                    Please correct the marked field(s) below.
                  </div>
                  <div style={{
                    position: "relative",
                    width: "270px",
                    height: "40px",
                    marginTop: "15px",
                    display: "inline-block"
                  }}>
                    <input 
                      type="text" 
                      style={{
                        fontSize: "14px",
                        borderWidth: "0 0 2px",
                        borderColor: "rgb(1, 176, 255)",
                        borderStyle: "solid",
                        width: "100%",
                        height: "100%",
                        zIndex: 4,
                        outline: "none",
                        padding: "5px 10px",
                        boxSizing: "border-box",
                        color: "rgb(0, 0, 0)",
                        textAlign: "left",
                        fontFamily: "Arial",
                        backgroundColor: "rgb(255, 255, 255)",
                        borderRadius: "0px"
                      }}
                      placeholder="Email"
                      changeitem="SIGNUP_FORM_FIELD"
                      name="CONTACT_EMAIL"
                      id="EMBED_FORM_EMAIL_LABEL"
                    />
                  </div>
                  <div style={{
                    position: "relative",
                    width: "270px",
                    height: "40px",
                    marginTop: "30px",
                    display: "inline-block"
                  }}>
                    <input 
                      type="text" 
                      style={{
                        fontSize: "14px",
                        borderWidth: "0 0 2px",
                        borderColor: "rgb(1, 176, 255)",
                        borderStyle: "solid",
                        width: "100%",
                        height: "100%",
                        zIndex: 4,
                        outline: "none",
                        padding: "5px 10px",
                        boxSizing: "border-box",
                        color: "rgb(0, 0, 0)",
                        textAlign: "left",
                        fontFamily: "Arial",
                        backgroundColor: "rgb(255, 255, 255)",
                        borderRadius: "0px"
                      }}
                      placeholder="Name"
                      changeitem="SIGNUP_FORM_FIELD"
                      name="LASTNAME"
                      id="EMBED_FORM_NAME_LABEL"
                    />
                  </div>
                  <div style={{
                    position: "relative",
                    width: "150px",
                    height: "40px",
                    margin: "20px 115px 25px auto",
                    display: "inline-block"
                  }}>
                    <input 
                      type="button" 
                      style={{
                        textAlign: "center",
                        width: "100%",
                        height: "100%",
                        zIndex: 5,
                        border: 0,
                        color: "rgb(255, 255, 255)",
                        cursor: "pointer",
                        outline: "none",
                        fontSize: "14px",
                        backgroundColor: "rgb(1, 176, 255)",
                        borderRadius: "5px"
                      }}
                      name="SIGNUP_SUBMIT_BUTTON"
                      id="zcWebOptin"
                      value="Join Now"
                    />
                  </div>
                  <input type="hidden" id="fieldBorder" value=""/>
                  <input type="hidden" id="submitType" name="submitType" value="optinCustomView"/>
                  <input type="hidden" id="emailReportId" name="emailReportId" value=""/>
                  <input type="hidden" id="formType" name="formType" value="QuickForm"/>
                  <input type="hidden" name="zx" id="cmpZuid" value="12dbe12b6"/>
                  <input type="hidden" name="zcvers" value="3.0"/>
                  <input type="hidden" name="oldListIds" id="allCheckedListIds" value=""/>
                  <input type="hidden" id="mode" name="mode" value="OptinCreateView"/>
                  <input type="hidden" id="zcld" name="zcld" value="1134968a0d51d88f4"/>
                  <input type="hidden" id="zctd" name="zctd" value="1134968a0d51d87a9"/>
                  <input type="hidden" id="document_domain" value=""/>
                  <input type="hidden" id="zc_Url" value="zcsub-cmpzourl.maillist-manage.com"/>
                  <input type="hidden" id="new_optin_response_in" value="0"/>
                  <input type="hidden" id="duplicate_optin_response_in" value="0"/>
                  <input type="hidden" name="zc_trackCode" id="zc_trackCode" value="ZCFORMVIEW"/>
                  <input type="hidden" id="zc_formIx" name="zc_formIx" value="3zc9b642d99270ab0e0d58ca830ea795655b103455b7d50f6335671bfa4eefc8bb"/>
                  <input type="hidden" id="viewFrom" value="URL_ACTION"/>
                  <span style={{ display: "none" }} id="dt_CONTACT_EMAIL">1,true,6,Contact Email,2</span>
                  <span style={{ display: "none" }} id="dt_FIRSTNAME">1,false,1,First Name,2</span>
                  <span style={{ display: "none" }} id="dt_LASTNAME">1,false,1,Last Name,2</span>
                </form>
              </div>
            </div>
          </div>
        </div>
        <img 
          src="https://zcsub-cmpzourl.maillist-manage.com/images/spacer.gif" 
          id="refImage" 
          onLoad={() => referenceSetter(this)}
          style={{display: "none"}}
          alt=""
        />
        <input type="hidden" id="signupFormType" value="QuickForm_Vertical" />
        <div id="zcOptinOverLay" 
          onContextMenu={() => false} 
          style={{
            display: "none",
            textAlign: "center",
            backgroundColor: "rgb(0, 0, 0)",
            opacity: 0.5,
            zIndex: 100,
            position: "fixed",
            width: "100%",
            top: 0,
            left: 0,
            height: "988px"
          }}
        />
        <div id="zcOptinSuccessPopup" 
          style={{
            display: "none",
            zIndex: 9999,
            width: "800px",
            height: "40%",
            top: "84px",
            position: "fixed",
            left: "26%",
            backgroundColor: "#FFFFFF",
            borderColor: "#E6E6E6",
            borderStyle: "solid",
            borderWidth: "1px",
            boxShadow: "0 1px 10px #424242",
            padding: "35px"
          }}
        >
          <span 
            style={{
              position: "absolute",
              top: "-16px",
              right: "-14px",
              zIndex: 99999,
              cursor: "pointer"
            }} 
            id="closeSuccess"
          >
            <img 
              src="https://zcsub-cmpzourl.maillist-manage.com/images/videoclose.png"
              alt="close"
            />
          </span>
          <div id="zcOptinSuccessPanel"></div>
        </div>
      </div> */}

      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  );
}

export default Layout
