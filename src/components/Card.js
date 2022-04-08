import React from 'react'
function Card(props) {
    let cardContent = <>
        <div className="col-lg-8 col-md-8 col-12 my-3 " id='details'>
            <h4 className="m-t-0 m-b-0"><strong>{props.firstName} </strong>{props.lastName}</h4>
            <span className="job_post text-muted">React Developer</span>
            <p>{props.email}</p>
            <div>
                <button className="btn btn-primary btn-round mx-1">Follow</button>
                <button className="btn btn-primary btn-round btn-simple mx-1">Message</button>
            </div>
            <p className="social-icon m-t-5 m-b-0">
                <a title="Twitter" href="/"><i className="fa fa-twitter"></i></a>
                <a title="Facebook" href="/"><i className="fa fa-facebook"></i></a>
                <a title="Google-plus" href="/"><i className="fa fa-twitter"></i></a>
                <a title="Behance" href="/"><i className="fa fa-behance"></i></a>
                <a title="Instagram" href="/"><i className="fa fa-instagram "></i></a>
            </p>
        </div>
    </>
    return (
        <>
            <div className="container profile-page ">
                <div className="row1 d-flex justify-content-center">
                    <div className="col-xl-6 col-lg-7 col-md-12">
                        <div className="card profile-header my-5">
                            <div className="body">
                                <div className="row d-flex align-items-center">
                                    <div className="col-lg-4 col-md-4 col-12">
                                        <div className="profile-image float-md-right d-flex">
                                            <img className='mx-auto' src={props.cardImgUrl} alt="" />
                                        </div>
                                    </div>
                                    {props.firstName === '' ? "Click on a button below, to view any details" : cardContent}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card