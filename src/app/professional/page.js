import {ResumeSection} from "../../components/professional/resume";
import {ReflectionEssay} from "../../components/professional/reflection-essay";
import {PersonalBackground} from "../../components/professional/personal-background";
export default function ProfessionalOverviewPage() {
    return(
        <div>
            <header className="mb-4">
                <h1 className="text-3xl font-bold">Professional Overview</h1>
                
            </header>
            <main className="flex flex-col space-y-4">
                <section>
                    <header>
                        <h2 className="text-2xl">Professional Bio</h2>
                    </header>
                    <main className="prose md:prose-lg">
                    <p>
                        As a Public Benefits Intern with the International Rescue Committee (IRC) in Tucson, Arizona, I am a committed professional with a solid history in sales, customer service, and client assistance. In my position, I help clients navigate public assistance programs both directly and administratively. I help clients apply for financial assistance, monitor benefit approvals, and lead orientations to help them use their EBT cards. Additionally, I assist the Refugee Cash Assistance Coordinator by keeping thorough records and providing client-centered services. 
                        My retail background strengthened my leadership, problem-solving, and communication skills. I consistently met sales goals, provided exceptional customer service, and helped accomplish team objectives while working as a sales associate at Calvin Klein and Alo Yoga. My ability to remain composed and professional in high-pressure situations has made me a reliable asset.
                    </p>
                    <p>
                        In a previous role, I was a Team Lead at ASICS, where I oversaw and trained new hires, managed inventory, and helped the store meet key performance indicators. My dedication to quality and teamwork was demonstrated when we increased customer satisfaction ratings by 20% under my leadership.
                        With a proven ability to connect with people from diverse backgrounds, I bring adaptability, strong interpersonal skills, and a results-driven mindset to every role I undertake. I have a strong desire to make significant contributions in nonprofit settings and continue to seek opportunities that combine leadership with service. 
                    </p>
                    </main>
                </section>
                <ResumeSection />
                <PersonalBackground />
                <ReflectionEssay />
            </main>
        </div>
    )
}