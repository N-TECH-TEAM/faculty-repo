import { useState } from 'react';
import { Link } from 'react-router-dom';
import pdfThumbnail from './pdf/PDFimageFiles/pdfThumbnail.png'
import Leadership from './Leadership';



const About = () => {
    const [showObjectives, setShowObjectives] = useState(false);
    const [showVision, setShowVision] = useState(false);
    const [showMission, setShowMission] = useState(false);

    const toggleObjectives = () => {
        setShowObjectives(!showObjectives);
    };
    
    const toggleVision = () => {
      setShowVision(!showVision);
  };
  const toggleMission = () => {
    setShowMission(!showMission);
  };


    return (
        <div className="container mx-auto p-6">
            <section id="testimonials">
  <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
    <h2 className="text-4xl font-bold text-center">
      Leadership Team
    </h2>
    <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
      <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/2">
        <img src={pdfThumbnail} className="w-16 -mt-14" alt="Leader 1" />
        <h5 className="text-lg font-bold">OLAOSUN ADB-AZIIZ BABATUNDE</h5>
        <p className="text-sm text-darkGrayishBlue">
          President
        </p>
      </div>
      <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/2">
        <img src={pdfThumbnail} className="w-16 -mt-14" alt="Leader 2" />
        <h5 className="text-lg font-bold">HENRIETTA AWAH</h5>
        <p className="text-sm text-darkGrayishBlue">
          Vice President
        </p>
      </div>
    </div>
    <div className="w-full sm:w-1/2 mx-auto">
    <p className="text-lg mb-4">
        Meet the dedicated leaders driving our organization forward:
    </p>
    <p className="text-lg mt-4">
        Our hardworking leaders are committed to excellence, innovation, and making a positive impact in our community.
    </p>
    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4">
    <Link to="/Leadership" element={<Leadership/>} >
        Meet Our Team  
    </Link>
</button>

    </div>
  </div>
</section>

            <section className="my-8">
      <h2 className="text-3xl font-bold mb-4">MISSION</h2>
      <div className="flex flex-col sm:flex-row items-center">
        <div className="w-full sm:w-1/2">
          <p className="text-lg mb-4">
            Our mission is to empower students, foster leadership skills, promote community engagement, and drive innovation and entrepreneurship in the engineering field.
          </p>
          {showMission && (
            <div className="text-lg mb-4">
              <p><b>1. Empowerment:</b> We empower students to realize their full potential and become leaders in their fields through various programs and initiatives.</p>
              <p><b>2. Leadership Development:</b> We provide opportunities for students to develop leadership skills and take on roles of responsibility within the organization and the broader community.</p>
              <p><b>3. Community Engagement:</b> We engage with the community through volunteer work, service projects, and outreach initiatives to make a positive impact and contribute to society.</p>
              <p><b>4. Innovation:</b> We foster a culture of innovation and creativity among students, encouraging them to explore new ideas and solutions to complex problems.</p>
              <p><b>5. Entrepreneurship:</b> We support students in developing entrepreneurial skills and launching their own ventures, startups, and projects.</p>
            </div>
          )}
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={toggleMission}>
            {showMission ? 'See Less' : 'See More'}
          </button>
        </div>
        <img src={pdfThumbnail} alt="Mission" className="w-full sm:w-1/2 ml-0 sm:ml-4" />
      </div>
    </section>

            <section className="my-8">
                <h2 className="text-3xl font-bold mb-4">CORE PRINCIPLE</h2>
                <ul className="list-disc pl-6">
                    <li className="text-lg mb-4">
                        <strong>Excellence:</strong> We uphold the highest standards of academic achievement, professional development, and personal growth. Through mentorship, resources, and opportunities, we strive to equip our members with the skills and knowledge needed to excel in their chosen fields.
                    </li>
                    <li className="text-lg mb-4">
                        <strong>Innovation:</strong> We embrace creativity, curiosity, and ingenuity as driving forces behind progress. NUESA encourages exploration, experimentation, and collaboration to spark innovative solutions to real-world challenges.
                    </li>
                    <li className="text-lg mb-4">
                        <strong>Service:</strong> We are committed to making a meaningful impact in our communities and beyond. Through service projects, outreach initiatives, and partnerships, we aim to use our skills and expertise to address pressing societal needs and promote sustainable development.
                    </li>
                </ul>
            </section>

            <section className="my-8">
                <h2 className="text-3xl font-bold mb-4">OBJECTIVES</h2>
                <div className="flex flex-col sm:flex-row items-center">
                    <div className="w-full sm:w-1/2">
                        <p className="text-lg mb-4">
                            Our objectives include academic enrichment, professional development, community engagement, advocacy and representation, and fostering innovation and entrepreneurship.
                        </p>
                        {showObjectives && (
                            <div className="text-lg mb-4">
                                <p><b>1. Academic Enrichment:</b> NUESA provides academic support, workshops, and resources to help students succeed in their engineering studies. We facilitate peer learning, tutoring programs, and access to educational materials to enhance learning outcomes and promote academic excellence.</p>
                                <p><b>2. Professional Development:</b> We offer career development opportunities, networking events, and industry connections to help students prepare for successful careers in engineering and related fields. NUESA organizes workshops, seminars, and internship programs to develop essential skills and foster professional growth.</p>
                                <p><b>3. Community Engagement:</b> NUESA cultivates a vibrant and inclusive community where students can connect, collaborate, and thrive. We organize social events, community service projects, and extracurricular activities to foster friendships, build networks, and create lasting memories.</p>
                                <p><b>4. Advocacy and Representation:</b> NUESA serves as the voice of engineering students, advocating for their interests, rights, and welfare. We engage with university administrations, government agencies, and industry stakeholders to address issues affecting engineering education and promote student welfare.</p>
                                <p><b>5. Innovation and Entrepreneurship:</b> NUESA fosters a culture of innovation, entrepreneurship, and technological advancement among engineering students. We support student-led projects, startups, and research initiatives aimed at solving complex problems and driving positive change in society.</p>
                            </div>
                        )}
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={toggleObjectives}>
                            {showObjectives ? 'See Less' : 'See More'}
                        </button>
                    </div>
                    <img src={pdfThumbnail} alt="NUESA Objectives" className="w-full sm:w-1/2 ml-0 sm:ml-4" />
                </div>
            </section>

            <section className="my-8">
    <h2 className="text-3xl font-bold mb-4">VISION</h2>
    <div className="flex flex-col sm:flex-row items-center">
        <img src={pdfThumbnail} alt="NUESA Vision" className="w-full sm:w-1/2 ml-0 sm:ml-4" />
        <div className="w-full sm:w-1/2">
            <p className="text-lg mb-4">
                Our vision is to lead the way in engineering innovation and sustainable energy solutions, shaping a future where our collective efforts transcend boundaries and empower communities worldwide.
            </p>
            <p className="text-lg mb-4">
                Our vision includes:
            </p>
            {showVision && (
                <div className="text-lg mb-4">
                    <p><b>1. Engineering Excellence:</b> We are committed to fostering a culture of engineering excellence among our members, providing them with the tools, resources, and opportunities to push the boundaries of innovation and achieve breakthroughs in sustainable energy technologies.</p>
                    <p><b>2. Sustainable Solutions:</b> Our vision extends beyond conventional engineering practices; we strive to integrate sustainability into every aspect of our work, prioritizing solutions that minimize environmental impact and promote resilience in the face of changing climate conditions.</p>
                    <p><b>3. Community Engagement and Empowerment:</b> We believe in the power of community collaboration and seek to actively engage with diverse stakeholders to address pressing energy challenges, leveraging collective expertise and resources to drive meaningful change and empower communities to thrive.</p>
                    <p><b>4. Leadership and Professional Development:</b> Our vision is centered on nurturing the next generation of engineering leaders equipped with the knowledge, skills, and values needed to address complex societal issues, empowering our members to become catalysts for positive change.</p>
                    <p><b>5. Global Impact and Collaboration:</b> We recognize the interconnectedness of our world and the importance of global collaboration in addressing shared challenges, fostering connections and partnerships across borders and cultures to amplify our impact and contribute to collective efforts aimed at building a more resilient and inclusive future for all.</p>
                </div>
            )}
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={toggleVision}>
                {showVision ? 'See Less' : 'See More'}
            </button>
        </div>
    </div>
</section>

<section className="my-8">
      <h2 className="text-3xl font-bold mb-4">PROGRAMS AND INITIATIVES</h2>
      <div className="flex flex-col sm:flex-row items-center">
        <div className="w-full sm:w-1/2">
          <p className="text-lg mb-4">
            Our programs and initiatives focus on empowering students, fostering leadership skills, and promoting community engagement and innovation.
          </p>
          {showObjectives && (
            <div className="text-lg mb-4">
              <p><b>1. Student Leadership Program:</b> We offer leadership development workshops, mentorship programs, and opportunities for students to take on leadership roles within the organization and the broader community.</p>
              <p><b>2. Community Engagement Initiatives:</b> We organize community service projects, volunteer opportunities, and outreach events to give back to the community and make a positive impact.</p>
              <p><b>3. Innovation Challenges:</b> We host innovation challenges, hackathons, and design competitions to encourage creativity, problem-solving skills, and collaboration among students.</p>
              <p><b>4. Career Development Workshops:</b> We provide workshops, seminars, and networking events to help students explore career paths, develop essential skills, and connect with industry professionals.</p>
              <p><b>5. Research and Development Grants:</b> We offer grants, funding, and resources to support student-led research projects, initiatives, and entrepreneurial ventures.</p>
            </div>
          )}
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={toggleObjectives}>
            {showObjectives ? 'See Less' : 'See More'}
          </button>
        </div>
        <img src={pdfThumbnail} alt="Programs and Initiatives" className="w-full sm:w-1/2 ml-0 sm:ml-4" />
      </div>
    </section>



            
        </div>
    );
};

export default About;