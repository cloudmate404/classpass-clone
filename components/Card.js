const Card = () =>{

    

    return(
        <article className="card">
            <div className="info-container">
                <div className="img-container">
                    {/* <img 
                        src=""
                        alt=""
                    /> */}
                </div>
                <div className="text-container">
                    <h3>Name</h3>
                    <p>Tag Line</p>
                </div>
            </div>
            <div className="description-container">
                <p>description</p>
            </div>
        </article>
    )
}

export default Card