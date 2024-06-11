export default function Footer({logo_url, delfil_icon}) {
    return (
        <>
        <div className=" container-fluid p-3 py-4 main-footer">
            <div className="row">
                <div className=" col-md-3 footer-box-1 my-3">
                    <div className="footer-logo main-logo mb-3">
                        <img src={logo_url} alt="" />
                        <div className="logo-text">LOTUS SENTRY</div>
                    </div>

                    <p className="gray-text">
                        Lotus Sentry Security Corp © 2024
                    </p>
                </div>
                <div className=" col-md-2 footer-box-2 my-3">
                    <p className="footer-title mb-3">
                        NAVIGATION
                    </p>
                    <div className="list">
                        <ul className="options">
                            <li className="">
                                <a href="">Introduction</a>
                            </li>
                            <li className="">
                                <a href="">Settings</a>
                            </li>
                            <li className="">
                                <a href="">Settings</a>
                            </li>
                            <li className="">
                                <a href="">Settings</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className=" col-md-2 footer-box-3 my-3">
                    <p className="footer-title mb-3">
                        SOCIAL
                    </p>
                    <div className="list">
                        <ul className="options">
                            <li className="">
                                <a href=""  className="link-icon inline-icon">
                                    <div className="icon ">
                                        <svg className="w-5 h-5" fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Medium</title><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"></path></svg>
                                    </div>
                                    <p className="icon-text" >Medium</p>
                                </a>
                            </li>
                            <li className="">
                                <a href=""  className="link-icon inline-icon">
                                    <div className="icon ">
                                        <svg className="w-5 h-5" fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Medium</title><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"></path></svg>
                                    </div>
                                    <p className="icon-text" >Medium</p>
                                </a>
                            </li>
                            <li className="">
                                <a href=""  className="link-icon inline-icon">
                                    <div className="icon ">
                                        <svg className="w-5 h-5" fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Medium</title><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"></path></svg>
                                    </div>
                                    <p className="icon-text" >Medium</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className=" col-md-2 footer-box-4 my-3">
                    <p className="footer-title mb-3">
                        PROUDLY USING
                    </p>
                    <div className="list">
                        <ul className="options">
                            <li className="">
                                <a href="" className="footer-image">
                                    <img src={delfil_icon} alt="" />
                                </a>
                            </li>
                            <li className="">
                                <a href="" className="footer-image">
                                    <img src={delfil_icon} alt="" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className=" col-md-3 footer-box-5 my-3">
                    <p className="footer-title mb-3">
                        CARBON FOOTPRINT
                    </p>
                    <div className="list">
                        <ul className="options">
                            <li className="">
                                <a href="" className="footer-image">
                                    <img src={delfil_icon} alt="" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                    <p className="gray-text">
                        Lotus Sentry Security Corp © 2024
                    </p>

                </div>
            </div>
        </div>
        </>
    )
}