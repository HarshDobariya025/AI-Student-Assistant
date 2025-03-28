import { useState } from "react";
import { motion } from "framer-motion";
import { Filter } from "lucide-react";
import CourseCard from "./CourseCard";
import CourseModal from "./CourseModal";
import "./CourseList.css";
  
// Sample course data
const courses = [
  {
    id: 1,
    title: "Full Stack Web Development",
    category: "Web Development",
    level: "Intermediate",
    duration: "24 weeks",
    description: "Learn front-end and back-end technologies to become a full stack developer.",
    eligibility: "Basic programming knowledge, HTML/CSS familiarity",
    syllabus: [
      "HTML5, CSS3, JavaScript ES6+",
      "React.js & State Management",
      "Node.js & Express",
      "MongoDB & SQL Databases",
      "RESTful API Development",
      "Authentication & Authorization",
      "Deployment & DevOps Basics",
    ],
    link:"https://lp.pwskills.com/Full-Stack-Web-Development-Version2-B?utm_source=google&utm_medium=cpc&utm_campaign=HR-Skills-Full-Stack-WOTP-India-Google-Lead-Search-CPL-Keyword-13-Jan-2024&utm_keyword=full%20stack%20web%20development%20course&utm_adgroupid={adgroupname}&utm_matchtype=p&device=c&gad_source=1&gclid=Cj0KCQjwm7q-BhDRARIsACD6-fUWa4A9jH8ZPf1QDuOaORUTcP-t8DsRGkX5zBL2ZO8EfssNEPTR54QaAk0PEALw_wcB",
    careers: ["Full Stack Developer", "Front-End Developer", "Back-End Developer", "Web Application Developer"],
    image: "https://www.shutterstock.com/image-vector/full-stack-developer-programmer-who-260nw-2273927175.jpg",
  },
  {
    id: 2,
    title: "Data Science & Machine Learning",
    category: "Data Science",
    level: "Advanced",
    duration: "32 weeks",
    description: "Master data analysis, visualization, and machine learning algorithms.",
    eligibility: "Basic programming knowledge, Statistics fundamentals",
    syllabus: [
      "Python for Data Science",
      "Data Cleaning & Preprocessing",
      "Statistical Analysis",
      "Data Visualization",
      "Machine Learning Algorithms",
      "Deep Learning Fundamentals",
      "Big Data Technologies",
      "Model Deployment",
    ],
    link:"https://www.scaler.com/event/learn-data-science-machine-learning/?utm_source=ads&utm_medium=googlesearch&utm_campaign=perf_scaler-dsml_requestcallback_ads_googlesearch_dsa-new_key-metros_25-45&utm_content=dsa-data-science-new&utm_term=&param1=693360064288&param2=c&param3=&gad_source=1&gclid=Cj0KCQjwm7q-BhDRARIsACD6-fUcD2JZX8-3POreYaeIqkxdiPbC4U7P4AhkPkHDC5iHcZBD91wfapwaAl0AEALw_wcB",
    careers: ["Data Scientist", "Machine Learning Engineer", "Data Analyst", "AI Specialist"],
    image: "https://cdn.builtin.com/cdn-cgi/image/f=auto,fit=cover,w=1200,h=635,q=80/https://builtin.com/sites/www.builtin.com/files/2024-10/data-science.jpg",
  },
  {
    id: 3,
    title: "Mobile App Development",
    category: "Mobile Development",
    level: "Beginner",
    duration: "20 weeks",
    description: "Create native and cross-platform mobile applications for iOS and Android.",
    eligibility: "Basic programming concepts",
    syllabus: [
      "Mobile UI/UX Design",
      "React Native Fundamentals",
      "State Management",
      "API Integration",
      "Native Device Features",
      "App Testing & Debugging",
      "App Store Deployment",
    ],
    link:"https://www.udemy.com/courses/development/mobile-apps/?srsltid=AfmBOop6fOc1FKLTIUFuIpzcyn-2uwSKyFdQHoYqiJsbKHA-tUqjNKu1",
    careers: ["Mobile App Developer", "React Native Developer", "UI/UX Designer", "Cross-Platform Developer"],
    image: "https://t3.ftcdn.net/jpg/06/51/77/96/360_F_651779668_RtIuIZwT2J248KpR1H5eIs3J8yOGd4mC.jpg",
  },
  {
    id: 4,
    title: "Cloud Computing & DevOps",
    category: "Cloud Computing",
    level: "Intermediate",
    duration: "16 weeks",
    description: "Learn cloud infrastructure, automation, and continuous integration/deployment.",
    eligibility: "Basic system administration, Command line experience",
    syllabus: [
      "Cloud Service Providers (AWS, Azure, GCP)",
      "Infrastructure as Code",
      "Containerization with Docker",
      "Orchestration with Kubernetes",
      "CI/CD Pipelines",
      "Monitoring & Logging",
      "Security Best Practices",
    ],
    link:"https://www.simplilearn.com/professional-certificate-program-cloud-computing-devops",
    careers: ["DevOps Engineer", "Cloud Architect", "Site Reliability Engineer", "Infrastructure Engineer"],
    image: "https://media.istockphoto.com/id/1398516315/vector/devsecops-concept-integration-of-security-testing-throughout-the-development-and-operations.jpg?s=612x612&w=0&k=20&c=JV-bF57yE-lCmEWVBEgchwDJ_ciSO_VKpBxwx0i94z4=",
  },
  {
    id: 5,
    title: "Cybersecurity Fundamentals",
    category: "Cybersecurity",
    level: "Advanced",
    duration: "28 weeks",
    description: "Master the techniques to protect systems and networks from digital attacks.",
    eligibility: "Networking basics, Operating system knowledge",
    syllabus: [
      "Security Fundamentals",
      "Network Security",
      "Cryptography",
      "Ethical Hacking",
      "Security Auditing",
      "Incident Response",
      "Digital Forensics",
      "Security Compliance",
    ],
    link:"https://www.coursera.org/learn/cyber-security-fundamentals",
    careers: ["Security Analyst", "Ethical Hacker", "Security Consultant", "Cybersecurity Specialist"],
    image: "https://t4.ftcdn.net/jpg/02/45/63/69/360_F_245636933_kY23ohGptK5t6n8wGSXIgLgVXWeHJRct.jpg",
  },
  {
    id: 6,
    title: "UI/UX Design",
    category: "Design",
    level: "Beginner",
    duration: "12 weeks",
    description: "Learn to create user-centered designs and intuitive interfaces.",
    eligibility: "Basic design interest, No prior experience required",
    syllabus: [
      "Design Thinking",
      "User Research",
      "Wireframing & Prototyping",
      "Visual Design Principles",
      "Interaction Design",
      "Usability Testing",
      "Design Systems",
    ],
    link:"https://www.coursera.org/specializations/ui-ux-design",
    careers: ["UI Designer", "UX Designer", "Product Designer", "Interaction Designer"],
    image: "https://img.freepik.com/free-vector/gradient-ui-ux-landing-page-template_23-2149053801.jpg",
  },
  {
    id: 7,
    title: "Artificial Intelligence & Deep Learning",
    category: "AI & Machine Learning",
    level: "Advanced",
    duration: "36 weeks",
    description: "Explore neural networks, deep learning frameworks, and AI applications.",
    eligibility: "Python proficiency, Mathematics (Linear Algebra, Probability)",
    syllabus: [
      "Neural Networks & Deep Learning",
      "Convolutional Neural Networks (CNN)",
      "Recurrent Neural Networks (RNN) & LSTMs",
      "Transformers & NLP",
      "Computer Vision",
      "AI Model Optimization",
      "Ethics & AI Governance"
    ],
    link:"https://www.deeplearning.ai/",
    careers: ["AI Engineer", "Deep Learning Engineer", "Computer Vision Specialist", "NLP Engineer"],
    image: "https://cdn.pixabay.com/photo/2024/01/29/22/47/ai-generated-8540920_640.jpg"
  },
  {
    id: 8,
    title: "Blockchain Development",
    category: "Blockchain",
    level: "Intermediate",
    duration: "24 weeks",
    description: "Learn how to build decentralized applications and smart contracts using blockchain technology.",
    eligibility: "Basic programming knowledge, Understanding of cryptography concepts",
    syllabus: [
      "Blockchain Basics & Cryptography",
      "Ethereum & Smart Contracts",
      "Solidity Programming",
      "Decentralized Finance (DeFi)",
      "NFT Development",
      "Hyperledger & Enterprise Blockchain",
      "Security in Blockchain"
    ],
    link:"https://www.coursera.org/courses?query=blockchain",
    careers: ["Blockchain Developer", "Smart Contract Developer", "Decentralized Application (DApp) Developer", "Crypto Analyst"],
    image: "https://img.freepik.com/free-vector/vector-blockchain-poster_1441-1999.jpghttps://img.freepik.com/free-vector/blockchain-technology-security-template-vector-data-payment-securing-blog-banner_53876-112174.jpghttps://img.freepik.com/premium-vector/vector-blockchain-round-concept-colorful-line-illustration_104589-4543.jpg?semt=ais_hybrid"
  },
  {
    id: 9,
    title: "Internet of Things (IoT) Development",
    category: "IoT",
    level: "Intermediate",
    duration: "20 weeks",
    description: "Understand the fundamentals of IoT and develop applications for connected devices.",
    eligibility: "Basic electronics knowledge, Programming basics",
    syllabus: [
      "Introduction to IoT & Hardware",
      "Embedded Systems & Microcontrollers",
      "IoT Communication Protocols",
      "IoT Cloud Platforms",
      "Data Collection & Processing",
      "IoT Security",
      "Building Scalable IoT Solutions"
    ],
    link:"https://www.coursera.org/courses?query=iot",
    careers: ["IoT Developer", "Embedded Systems Engineer", "IoT Security Analyst", "IoT Solutions Architect"],
    image: "https://static.vecteezy.com/system/resources/thumbnails/009/288/681/small_2x/iot-internet-of-things-logo-in-the-shape-of-sphere-with-hexagon-pattern-in-wireframe-hand-everything-connectivity-device-concept-network-and-business-with-internet-illustration-vector.jpg"
  },
  {
    id: 10,
    title: "Game Development with Unity",
    category: "Game Development",
    level: "Beginner",
    duration: "18 weeks",
    description: "Create immersive games using Unity and C# programming.",
    eligibility: "Basic programming knowledge, Interest in game development",
    syllabus: [
      "Game Design Principles",
      "Unity Engine & C# Basics",
      "2D & 3D Game Development",
      "Physics & Animation in Games",
      "Multiplayer Game Development",
      "Game AI & Procedural Generation",
      "Publishing & Monetization"
    ],
    link:"https://www.tcsion.com/courses/ve/multimedia/unity-game-development-certification-course/",
    careers: ["Game Developer", "Unity Developer", "Game Designer", "VR/AR Developer"],
    image: "https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1711571024/catalog/1773075245199159296/ci5lrulmjqp1evhd9bdr.jpg"
  },
  {
    id: 11,
    title: "Embedded Systems & Robotics",
    category: "Robotics",
    level: "Advanced",
    duration: "30 weeks",
    description: "Learn to design and develop robotic applications using embedded systems.",
    eligibility: "Basic electronics & programming knowledge",
    syllabus: [
      "Embedded Systems & Microcontrollers",
      "Real-Time Operating Systems (RTOS)",
      "Sensor Integration & Actuators",
      "Robotics Programming",
      "Autonomous Navigation",
      "Human-Robot Interaction",
      "Robotic Process Automation (RPA)"
    ],
    link:"https://www.mooc.e-yantra.org/embedded_elsi",
    careers: ["Robotics Engineer", "Embedded Systems Developer", "Automation Engineer", "Mechatronics Engineer"],
    image: "https://thumbs.dreamstime.com/b/robot-manipulator-smart-farming-technology-robotic-agriculture-decoration-wallpaper-desktop-poster-booklet-cover-printing-296884565.jpg"
  },
  {
    id: 12,
    title: "Software Testing & Automation",
    category: "Software Testing",
    level: "Intermediate",
    duration: "16 weeks",
    description: "Master manual and automated testing methodologies for software quality assurance.",
    eligibility: "Basic programming knowledge",
    syllabus: [
      "Software Testing Fundamentals",
      "Manual Testing Techniques",
      "Test Automation with Selenium",
      "API Testing & Postman",
      "Performance Testing with JMeter",
      "CI/CD in Test Automation",
      "Security & Penetration Testing"
    ],
    link:"https://www.coursera.org/specializations/software-testing-automation",
    careers: ["QA Engineer", "Test Automation Engineer", "Software Tester", "Security Tester"],
    image: "https://t3.ftcdn.net/jpg/01/36/51/44/360_F_136514488_j1u863gh50fsRqIFQDHIn1HW7JeHPJVz.jpg"
  }

];

export default function CourseList() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [category, setCategory] = useState("all");
  const [level, setLevel] = useState("all");

  const filteredCourses = courses.filter((course) => {
    return (category === "all" || course.category === category) && (level === "all" || course.level === level);
  });

  const categories = ["all", ...new Set(courses.map((course) => course.category))];
  const levels = ["all", ...new Set(courses.map((course) => course.level))];

  return (
    <div>
      <div className="filter-container">
        <div className="filter-title">
          <Filter className="filter-icon" />
          <span>Filter Courses:</span>
        </div>

        <div className="filter-controls">
          <select className="filter-dropdown" value={category} onChange={(e) => setCategory(e.target.value)}>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat === "all" ? "All Categories" : cat}
              </option>
            ))}
          </select>

          <select className="filter-dropdown" value={level} onChange={(e) => setLevel(e.target.value)}>
            {levels.map((lvl) => (
              <option key={lvl} value={lvl}>
                {lvl === "all" ? "All Levels" : lvl}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="course-grid">
        {filteredCourses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <CourseCard course={course} onClick={() => setSelectedCourse(course)} />
          </motion.div>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="no-courses">
          <p>No courses match your filters. Try adjusting your criteria.</p>
          <button
            className="reset-button"
            onClick={() => {
              setCategory("all");
              setLevel("all");
            }}
          >
            Reset Filters
          </button>
        </div>
      )}

      {selectedCourse && <CourseModal course={selectedCourse} onClose={() => setSelectedCourse(null)} />}
    </div>
  );
}
