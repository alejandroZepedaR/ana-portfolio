import {JobCard} from './job-card'
const Svg = () =>{
    return (
            <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5">
                    <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd" />
            </svg>
    )
}
export const WorkHistory = () => {
    return(
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <li>
                <div className="timeline-middle">
                <Svg />
                </div>
                    <JobCard 
                        side="left"
                        time="01/2025 - Present"
                        jobTitle="Public Benefits Intern"
                        company="International Rescue Committee, IRC"
                        location="Tucson, AZ"
                        responsabilities={[
                            "Provided direct and administrative support to clients by assisting with cash assistance applications, monitoring benefit approvals, and conducting EBT orientations.",
                            "Educated clients on using EBT cards for cash withdrawals and supported the Refugee Cash Assistance Coordinator by maintaining accurate client records and providing direct service to clients."
                        ]}
                    />
                    <hr />
            </li>
            <li>
                <hr />
                <div className="timeline-middle">
                <Svg />
                </div>
                <JobCard
                    side="end" 
                    time="07/2024 - Present"
                    jobTitle="Sales Associate"
                    company="Calvin Klein"
                    location="Tucson, AZ"
                    responsabilities={[
                        'Boosted customer satisfaction levels through exceptional service, addressing concerns promptly, and providing a welcoming store environment.',
                        'Achieved monthly sales targets consistently by implementing effective sales strategies and maintaining a high level of product knowledge.',
                    ]}
                />
                <hr />
            </li>
            <li>
                <hr />
                <div className="timeline-middle">
                <Svg />
                </div>
                <JobCard
                    side="left" 
                    time="10/2024 - 01/2025"
                    jobTitle="Sales Associate"
                    company="Alo Yoga"
                    location="Tucson, AZ"
                    responsabilities={[
                        'Collaborated with team members to improve overall store performance.',
                        'Maintained calm demeanor and professionally managed issues in busy, high-stress situations.',
                    ]}
                />
                <hr />
            </li>
            <li>
                <hr />
                <div className="timeline-middle">
                <Svg />
                </div>
                <JobCard
                    side="end" 
                    time="03/2021 - 01/2024"
                    jobTitle="Team Lead"
                    company="ASICS"
                    location="Tucson, AZ"
                    responsabilities={[
                        'Supervised and trained new employees, resulting in a 20% increase in customer satisfaction ratings.',
                        "Managed inventory and arranged merchandise in the store's front and back.",
                        "Oversaw the store's KPIs with diligence to meet daily sales targets regularly."
                    ]}
                />
                <hr />
            </li>
        </ul>
    )
}