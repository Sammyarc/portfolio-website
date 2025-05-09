import {useState} from 'react';
import profileImage from '../../assets/Images/jpeg-optimizer_1736517613687.jpg'; // Ensure you have an image at this path

const About = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <section className="mt-[25vw] px-[4vw] md:mt-[13vw] md:px-0">
            <div>
                <h2
                    className="text-[7.5vw] px-[4vw] text-left font-bold font-Poppins text-white mb-[4vw] md:text-[3vw] md:px-0 md:text-center">About Me</h2>
                <div
                    className="px-4 mx-auto flex flex-col md:flex-row items-center gap-8 md:px-[5vw]">
                    {/* Text Section */}
                    <div className="w-full md:w-[50vw] flex flex-col gap-4">
                        <p
                            className="text-white font-Poppins text-[4vw] mb-4 md:text-[1.2vw]">
                            My journey into the world of software development started like many others -
                            with a curiosity that was part confusion, part excitement. What began as playing
                            around with HTML and CSS in my bedroom has now transformed into a full-blown
                            passion for creating digital experiences that actually make people&apos;s lives
                            easier.
                        </p>
                        {
                            isExpanded && (
                                <p className="text-white font-Poppins mb-[1vw] text-[4vw] md:text-[1.2vw]">
                                    Over the past few years, I&apos;ve honed my skills in JavaScript, React,
                                    Node.js, and MongoDB, working on diverse projects ranging from e-commerce
                                    platforms to real-time collaboration tools. I thrive in collaborative
                                    environments and am always eager to learn new technologies to enhance my craft.
                                    <br/><br/>
                                    When I&apos;m not coding, you can find me exploring the outdoors or reading tech
                                    blogs. I&apos;m committed to continuous
                                    learning and always looking for opportunities to grow both personally and
                                    professionally.
                                </p>
                            )
                        }
                        <span
                            className="text-[4vw] font-Poppins bg-gradient-to-r from-green-400 via-white to-green-400 bg-clip-text text-transparent cursor-pointer transition-all delay-150 md:text-[1.4vw]"
                            onClick={toggleReadMore}>
                            {
                                isExpanded
                                    ? 'Read Less'
                                    : 'Read More'
                            }
                        </span>
                    </div>

                    {/* Image Section */}
                    <div>
                        <img
                            src={profileImage}
                            alt="Profile Image"
                            className="rounded-full w-[80vw] h-[80vw] object-cover mix-blend-luminosity md:w-[32vw] md:h-[32vw]"/>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
