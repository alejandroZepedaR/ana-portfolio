
export const JobCard = (props) =>{
    return(
        <div className={`${props.side === 'left' ? 'timeline-start md:text-end' : 'timeline-end'} mb-10 `}>
            <time className="font-mono italic">{props.time}</time>
            <header>
                <h4 className="text-lg font-black">{props.jobTitle}</h4>
                <h5 className="text-md text-info">{props.company} - {props.location}</h5>
            </header>
            <ul className="flex flex-col space-y-2">
                {props.responsabilities.map((responsability, index) => (
                    <li key={index} className="p-2 bg-base-300 rounded-md">{responsability}</li>
                ))}
            </ul>
        </div>
    )
}