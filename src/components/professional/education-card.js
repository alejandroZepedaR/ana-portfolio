
export const EducationCard = (props) =>{
    return(
        <article className="card bg-base-200 w-96 shadow-sm">
            <div className="card-body">
                <div> 
                    <h2 className="card-title">{props.degree}</h2>
                    <h3>{props.school} - <time>{props.date}</time></h3>
                    {props.gpa && 
                        <span className="badge badge-accent mt-1">GPA - {props.gpa}</span>
                    }
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