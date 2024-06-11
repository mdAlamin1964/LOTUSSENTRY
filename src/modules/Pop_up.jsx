export default function pop_up({data, hanlde_close}) {
    return (
        <>
            <div className="pop-up">
                <div className="pop_up_content">
                    <div className="close-btn-area">
                        <span onClick={hanlde_close()} className="material-symbols-outlined pointer">close</span>
                    </div>
                    <div className="pop-up-data">
                        {data}
                    </div>
                </div>
            </div>
        </>
    )
}