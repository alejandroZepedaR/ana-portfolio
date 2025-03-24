
export const EducationCard = (props) =>{
    return(
        <article className="card bg-base-200 w-96 shadow-sm">
            <div className="card-body">
                <div>
                    <h2 className="card-title">{props.degree}</h2>
                    <h3>{props.school}</h3>
                    <span>{props.date}</span>
                </div>
                <p>{props.description}</p>
                <div className="card-actions justify-end">
                    <a href={props.viewLink} target="_blank">
                        <button className="btn btn-secondary">
                            View
                        </button>
                    </a>
                </div>
            </div>
        </article>
    )
}