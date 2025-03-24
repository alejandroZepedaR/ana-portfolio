import { IoSchoolOutline } from "react-icons/io5";
import { EducationCard } from "./education-card";
import { MdOutlineWorkOutline } from "react-icons/md";
import { WorkHistory } from "./work-history";
import {EDUCATION, SKILLS} from "../../util/constants";
import {DownloadButton} from "../global/download-button";

export const ResumeSection = () =>{
    return (
        <section>
            <header className="flex space-x-2 items-center">
                <h2 className="text-2xl">Resume</h2>
                <DownloadButton 
                    link={"resume/Resume.pdf"}
                />
            </header>
            <main className="flex flex-col space-y-2">
                <section>
                    <header>
                        <h3 className="text-xl">Professional Summary</h3>
                    </header>
                    <main>
                        <p>
                        Skilled benefits specialist with strong attention to detail and results-driven mindset. Adept at navigating complex
                        administrative tasks, ensuring compliance, and delivering high-quality support. Collaborative team player known
                        for adaptability and effective bilingual communication in fast-paced environments.
                        </p>
                    </main>
                </section>
                <section>
                    <header className="flex items-center mb-2 space-x-2">
                        <IoSchoolOutline />
                        <h3 className="text-xl">Education</h3>
                    </header>
                    <main className="flex space-x-2">
                        {EDUCATION.map((item, index) => (
                            <EducationCard key={index} {...item} />
                        ))}
                    </main>
                </section>
                <section>
                    <header className="flex items-center mb-2 space-x-2">
                        <MdOutlineWorkOutline />
                        <h3 className="text-xl">Work History</h3>
                    </header>
                    <main>
                        <WorkHistory />
                    </main>
                </section>
                <section>
                    <header className="flex items-center mb-2">
                        <h3 className="text-xl">Skills</h3>
                    </header>
                    <main>
                        <ul className="flex flex-wrap space-x-2 space-y-2">
                           {SKILLS.map((skill, index) => (
                                 <li key={index} className="badge badge-primary">{skill}</li>
                           ))}
                        </ul>
                    </main>
                </section>
                <section>
                    <header className="flex items-center mb-2">
                        <h3 className="text-xl">Languages</h3>
                    </header>
                    <main className="flex space-x-2 flex-wrap">
                        <div>
                            <div className="flex space-x-2">
                                <h4>English</h4>
                                <span className="badge">Native</span>
                            </div>
                            <progress className="progress progress-accent w-56" value={100} max="100"></progress>
                        </div>
                        <div>
                            <div className="flex space-x-2">
                                <h4>Spanish</h4>
                                <span className="badge">Native</span>
                            </div>
                            <progress className="progress progress-accent w-56" value={100} max="100"></progress>
                        </div>
                    </main>
                </section>
            </main>
        </section>
    )
}