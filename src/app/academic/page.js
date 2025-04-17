import { SampleCard } from "../../components/academic/SampleCard";
import { DownloadButton } from "../../components/global/download-button";

export default function AcademicOverviewPage() {
    return(
        <div>
            <header className="mb-4">
                <h1 className="text-3xl font-bold">Academic Overview</h1>
            </header>
            <main>
                <section className="mb-8">
                    <header className="mb-4">
                        <h2 className="text-2xl">Writing Samples</h2>
                    </header>
                    <main className="flex flex-col md:flex-row gap-4">
                        <SampleCard 
                            title="The Violent Reality in El Salvador"
                            description="El Salvador, once the world's most violent country, faces deep-rooted gang violence with devastating social, economic, and political impacts. This essay explores the origins, effects, and responses to the crisis, stressing the need for long-term, humane solutions."
                            link="/samples/writing-sample-el-salvador.pdf"
                        />
                        <SampleCard 
                            title="U.S. Policy and Interests in the South China Sea"
                            description="The South China Sea is vital to U.S. national security, trade, and regional stability. This essay explores evolving U.S. policies under Obama, Trump, and Biden, the strategic need to counter China’s dominance, and recommends multilateral, diplomatic, and military actions."
                            link="/samples/writing-sample-2-SCS.pdf"
                        />
                        <SampleCard 
                            title="Shifting Tides"
                            description="Russia’s invasion of Ukraine sparked a major shift in European defense, with the EU enhancing integration and investment in military capabilities. Poland, once skeptical, now leads in defense spending and EU collaboration, positioning itself as a key force in shaping Europe’s security future."
                            link="/samples/writing-sample-3-Poland.pdf"
                        />
                    </main>
                </section>
                <section>
                    <header className="flex space-x-2 items-center mb-4">
                        <h2 className="text-2xl">Academic synthesis</h2>
                        <DownloadButton link={'/professional/AcademicSynthesis.pdf'}/>
                    </header>
                    <main className="prose md:prose-lg">
                        <p>
                        Throughout my time in the International Security Studies (ISS) program, I have taken several 
                        courses that have shaped my understanding of global affairs and the many dimensions of 
                        international security. The six courses that stand out among them are: Emerging Powers in the 
                        Global System, Global Political Economy, European Politics and Society, International Relations 
                        of East Asia, Crime & Violence in Latin America, and Gender and International Security. 
                        Although each course focused on a particular region or set of themes, taken as a whole, they 
                        demonstrated how security encompasses not only state sovereignty or military might but also 
                        structural violence, economic inequality, and human vulnerability.  
                        </p>
                        <p>
                        These courses deepened my awareness of the complexity of international security and challenged 
                        me to think more critically about the forces that shape our world. As I reflect on them, I see how 
                        they complement one another, progressing from theoretical and macro-level frameworks to case 
                        studies that are relevant to a given location. This essay will go over the main concepts of 
                        international security that came up in these courses, discuss how they all enhanced my academic 
                        experience, and consider how this has helped me grow professionally. I hope to show how my 
                        views on international security have changed and how I have grown to have a more thorough and 
                        critical knowledge of international affairs.
                        </p>
                        <p>
                        Being exposed to a wide variety of security-related subjects and viewpoints has been one of the 
                        most valuable parts of the ISS program. Even though the six courses I chose focused on various 
                        subjects and geographical areas, they all had a few things in common. These include expanding 
                        the idea of security beyond conventional state-centered frameworks, the increasing importance of 
                        regional power dynamics, and the critical part that structural inequality and political economy 
                        play in creating both local and international insecurity. 
                        </p>
                        <p>
                        The redefining of security was a central theme throughout the program. Security is frequently 
                        associated with military power, territorial integrity, and reducing the risk of interstate conflict in 
                        traditional international relations theories. Courses like Gender and International Security and 
                        Crime & Violence in Latin America, however, questioned this limited definition. In Latin 
                        America, internal issues like organized crime, corruption, and weakened state institutions are 
                        closely linked to security. The course focused on how everyday insecurity, especially for 
                        vulnerable communities, is caused by criminal networks and state negligence. 
                        </p>
                        <p>
                        In the same way, Gender and International Security highlighted how gender influences how 
                        security is perceived. It made me realize that violence impacts people differently depending on 
                        their gender, age, and identity, as seen in current and past wars and conflicts. This means that 
                        issues of security, not simply social justice, include gender-based violence, inequality, and lack 
                        of access to basic needs. This pushed me to consider how global systems of inequality affect 
                        individual safety and political agency. These courses changed my understanding of security, 
                        moving from being largely a governmental concern to one that is intricately connected to 
                        people's everyday lives. 
                        </p>
                        <p>
                        The significance of regional dynamics and the shifting balance of power also emerged as a major 
                        subject. Comparative regional studies provided by European Politics and Society and 
                        International Relations of East Asia enabled me to comprehend how history, institutions, and 
                        alliances influence the security setting. For countries like Japan, South Korea, and ASEAN 
                        members, the history of colonialism, the U.S. military presence, and China's ascent to regional 
                        hegemony have led to intricate strategic calculations in East Asia. In addition, internal disputes 
                        and the rise of nationalism and populism pose a threat to the European Union's security strategy, 
                        which is based on integration, diplomacy, and liberal values. These diverse regional dynamics 
                        made it evident to me that there is no one-size-fits-all framework for international security; 
                        rather, it must take historical and political context into consideration.   
                        </p>
                        <p>
                        The connection between many of the courses was the topic of global political economy and how 
                        it affects security. The foundation was established by Global Political Economy, which 
                        demonstrated how resource dependency, capitalism, trade systems, and financial institutions 
                        influence global inequality. This course allowed me to understand how economic decisions 
                        frequently have an impact on security. For instance, civil instability, displacement, and 
                        international crime can result from economic exploitation, resource scarcity, and debt reliance. 
                        Emerging Powers in the Global System expanded on these observations by analyzing how 
                        emerging nations like China, India, Brazil, and South Africa aim to transform global governance 
                        frameworks in response to past economic disparities and marginalization.    
                        </p>
                        <p>
                        The interconnectedness of the local and global, as well as how identity, power, and inequality 
                        influence security, are what eventually bind all these issues together. Every course contributed a 
                        piece of the bigger picture, whether it was examining gendered aspects of war, the growth of 
                        China, gang violence in Central America, or the development of the European Union. When 
                        combined, they demonstrate that security encompasses more than just the existence or lack of 
                        conflict; it also includes access to resources, institutional legitimacy, governance structures, and 
                        people's ability to live free from fear and want.    
                        </p>
                        <p>
                        The way the classes in the ISS program progressively built upon one another resulting in a more 
                        complex and nuanced understanding of international security was one of the most exciting parts 
                        of my education. Together, they formed a coherent academic development from basic ideas of 
                        global order to intricate, intersectional understandings of power, identity, and violence.   
                        </p>
                        <p>
                        Courses like Emerging Powers in the Global System and Global Political Economy set the 
                        foundation for my understanding of the international system at the start of my academic journey. 
                        Important frameworks for examining how trade, finance, and international organizations affect 
                        international relations and contribute to inequality were introduced by Global Political Economy. 
                        It allowed me to understand and analyze how economic disparities and interests fuel conflict, 
                        collaboration, and marginalization. Expanding upon this, Emerging Powers in the Global System 
                        questioned established international power structures. By studying nations such as China, India, 
                        and Brazil, I gained insight into how these countries negotiate and challenge the current 
                        international system. The goals, weaknesses, and strategies of emerging players continuously 
                        affect security, as this course demonstrated. Security is neither static nor exclusively under the 
                        authority of Western countries.   
                        </p>
                        <p>
                        To apply these general ideas to particular geopolitical contexts, the regional courses—
                        International Relations of East Asia and European Politics and Society—provided essential case 
                        studies. China's development and North Korea's instability created a dynamic environment in 
                        which the themes of economic interdependence, regional competition, and U.S. influence 
                        became apparent in International Relations of East Asia. I was able to learn how theoretical 
                        concerns about strategic rivalry and power shifts manifest in real life. The European Union's 
                        strategy for regional stability and collective governance was the subject of European Politics and 
                        Society, which provided an alternative viewpoint. This course allowed me to analyze the 
                        advantages and disadvantages of liberal internationalism, particularly considering issues like 
                        Russian aggression, Brexit, and migration. When combined, these two courses demonstrated the 
                        intersection of regional and global power dynamics and how different parts of the world test out 
                        unique political and security approaches.   
                        </p>
                        <p>
                            Later in the program, more critical, human-centered viewpoints were introduced through the 
                            courses Gender and International Security and Crime & Violence in Latin America. These 
                            courses provided me the opportunity to consider how structural inequality, marginalization, and 
                            identity politics lead to insecurity for individuals and communities. In Latin America, I learned 
                            how the blurred boundaries between state and criminal actors, as well as weak institutional 
                            capacity, contribute to persistent violence and impunity. Furthermore, I learned in the gender 
                            course how gendered experiences of displacement, political exclusion, and violence are 
                            frequently ignored or downplayed by international organizations. Both courses reinforced the 
                            idea that international security must address informal, domestic, and often invisible forms of 
                            violence.    
                        </p>
                        <p>
                            In the end, my coursework shifted from comprehending the theoretical frameworks of 
                            international politics to critically analyzing the real-world consequences. I gained an extensive 
                            understanding of institutions and processes from the earlier courses, but the more recent ones 
                            encouraged me to reconsider whose security is prioritized and whose isn't. This development 
                            enabled me to form a more thorough and critical perspective on international security, one that 
                            considers both the strength of states and the vulnerability of people. 
                        </p>
                        <p>
                        When I think back on the classes I've taken in the ISS program, I can say with confidence that I 
                        now have a much deeper, more critical, and multidisciplinary perspective of international 
                        security. I mostly thought about security in terms of national defense, military conflict, and 
                        geopolitical strategy when I first started the program. However, every course has broadened and 
                        questioned that perspective, making me reevaluate long-held beliefs and acknowledge the 
                        intricate, multifaceted nature of security in the modern world. 
                        </p>
                        <p>
                        Taking courses like Gender and International Security and Crime & Violence in Latin America 
                        inspired one of the biggest changes in my perspective. I understood that poverty, lack of access 
                        to healthcare or education, gender-based discrimination, or state neglect may all contribute to 
                        insecurity, even if it is not always viewed as a priority. Maintaining international security 
                        involves more than just securing borders; it also entails protecting citizens from prevalent, 
                        accepted types of violence.  
                        </p>
                        <p>
                        Taking the Gender and International Security course compelled me to consider how identity, 
                        specifically gender and race, affects power and safety. Before taking this course, I had not given 
                        much thought to how peacekeeping operations and security strategies may perpetuate patriarchal 
                        norms or overlook the unique needs of women. This class helped me appreciate the value of 
                        intersectional analysis and made me more critical of policy solutions that claim to be neutral but 
                        often reinforce existing hierarchies. 
                        </p>
                        <p>
                            Global Political Economy and Emerging Powers in the Global System are two courses that 
                            helped me better comprehend the fundamental causes of global inequality. These courses 
                            encouraged me to look at the institutional and economic factors that drive insecurity rather than 
                            just moral or humanitarian framings of security. For instance, learning about the importance of 
                            FDI and its consequences such as the race to the bottom, unequal trade relationships, and the role 
                            of the IMF and World Bank led me to question how "development" and "stability" are defined 
                            and by whom. I came to understand that a lot of the security issues the Global South faces are 
                            closely related to historical exploitation and current global power disparities rather than being 
                            just the product of internal dysfunction. 
                        </p>
                        <p>
                        Additionally, my coursework on East Asia and Europe gave me the regional context necessary to 
                        see how different parts of the world navigate global security structures. Through these classes, I 
                        was able to understand that no one model can be used to achieve peace and stability, and that 
                        regional perspectives and cultural diversity must be taken into account in global governance. I 
                        also developed a stronger appreciation for the strategic challenges and agency of middle powers, 
                        especially as they navigate the tensions between great powers like the U.S. and China. 
                        </p>
                        <p>
                        I now see global security as a dynamic, contested field influenced by conflicting interests, 
                        identities, and institutions rather than as a set framework. Additionally, my research skills and 
                        critical thinking ability have improved significantly. In the end, the ISS program has taught me 
                        that it is impossible to comprehend international security in isolation. It must be evaluated from 
                        several angles, across regions, and at various analytical levels. For me, security now means 
                        justice, equity, and dignity rather than just the absence of conflict. This shift in perspective has 
                        not only prepared me to engage more thoughtfully with global affairs but has also deepened my 
                        commitment to working toward a more inclusive and just international system.
                        </p>
                        <p>
                        My understanding of international security has been significantly shaped by the ISS program, 
                        which has helped me go beyond conventional frameworks and foster a more critical, inclusive, 
                        and intersectional point of view. Through a diverse set of courses, I’ve come to appreciate the 
                        complexity of global power dynamics, the importance of regional context, and the pressing need 
                        to address human-centered forms of insecurity. In addition to strengthening my analytical and 
                        critical thinking abilities, my academic experience has reinforced my passion to help create a 
                        world that is safer and more just.
                        </p>
                    </main>
                </section>
            </main>
        </div>
    )
}