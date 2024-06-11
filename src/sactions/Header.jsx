export default function header({logo_url}) {
    return (
        <>
            <div className="header">
                <div className="container-fluid p-3">
                    <div className=" row">
                        <div className=" col-md-6 left">
                            <div className="header-logo main-logo">
                                <img src={logo_url} alt="" />
                                <div className="logo-text">LOTUS SENTRY</div>
                            </div>
                        </div>
                        <div className=" col-md-6 right">
                            <div className="header-menu">
                                <div className="btn-1 btn-notifications">
                                    <span className="material-symbols-outlined"> notifications</span>
                                </div>

                                <div className="btn-1 btn-notifications has-drop-down">
                                    <span className="material-symbols-outlined"> Settings</span>
                                    <span className="material-symbols-outlined">arrow_drop_down</span>
                                    <div className="drop-down">
                                        <ul className="options">
                                            <li className="">
                                                <p className=" text-center">Settings</p>
                                            </li>
                                            <li className="">
                                                <p className=" text-center">Help</p>
                                            </li>
                                            <li className="">
                                                <p className=" text-center">Report bug</p>
                                            </li>
                                            <li className="">
                                                <p className=" text-center">Connect</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}