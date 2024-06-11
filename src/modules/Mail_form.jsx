export default function mail_form() {
    return (
        <>
            <div className="from">
                <h4>Connect Wallet</h4>
                <form action="">
                    <p className="title">Name*</p>
                    <div className="name-box">
                        <div className="fname">
                            <label htmlFor="fname">First Name</label>
                            <input type="text" name="fname" />
                        </div>
                        <div className="lname">
                            <label htmlFor="fname">First Name</label>
                            <input type="text" name="fname" />
                        </div>
                    </div>
                    
                    <p className="title">Email*</p>
                    <div className="email-box">
                            <input type="email" name="email" />
                    </div>
                    <p className="title">Subject*</p>
                    <div className="subject-box">
                            <input type="text" name="subject" />
                    </div>
                    <p className="title">message*</p>
                    <div className="message-box">
                            <textarea name="subject" id=""></textarea>
                    </div>
                    <button className="btn-1">Send</button>
                </form>
            </div>
        </>
    )
}