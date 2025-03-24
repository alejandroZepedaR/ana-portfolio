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
                    <main>
                        <p className="text-md">
                            here goes a brief professional bio: introduce yourself, your professional background, and your
                            career goals.
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