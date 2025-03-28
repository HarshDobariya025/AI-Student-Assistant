"use client"

import { useState } from "react"
import "./Practice.css"

// Mock data for different topics
const quizTopics = [
  { id: "ai-ml", name: "Artificial Intelligence (AI) & Machine Learning (ML)" },
  { id: "data-science", name: "Data Science & Big Data" },
  { id: "cybersecurity", name: "Cybersecurity" },
  { id: "cloud-computing", name: "Cloud Computing" },
  { id: "web-development", name: "Web Development" },
  { id: "mobile-app", name: "Mobile App Development" },
  { id: "software-engineering", name: "Software Engineering" },
  { id: "devops", name: "DevOps" },
  { id: "blockchain", name: "Blockchain Technology" },
  { id: "game-development", name: "Game Development" },
]

// Mock questions for each topic
const quizQuestions = {
  "ai-ml": [
    {
      id: 1,
      question: "What is the difference between supervised and unsupervised learning?",
      options: [
        "Supervised learning uses labeled data while unsupervised learning uses unlabeled data",
        "Supervised learning is faster than unsupervised learning",
        "Unsupervised learning requires more data than supervised learning",
        "There is no difference between them",
      ],
      correctAnswer: "Supervised learning uses labeled data while unsupervised learning uses unlabeled data",
    },
    {
      id: 2,
      question: "What is a neural network?",
      options: [
        "A computing system inspired by biological neural networks in animal brains",
        "A network of computers working together",
        "A type of computer hardware",
        "A programming language for AI",
      ],
      correctAnswer: "A computing system inspired by biological neural networks in animal brains",
    },
    {
      id: 3,
      question: "What is deep learning?",
      options: [
        "A subset of machine learning using neural networks with multiple layers",
        "Learning that occurs at a deep, philosophical level",
        "A type of reinforcement learning",
        "Learning that requires deep concentration",
      ],
      correctAnswer: "A subset of machine learning using neural networks with multiple layers",
    },
    {
      id: 4,
      question: "What is the purpose of the activation function in neural networks?",
      options: [
        "To introduce non-linearity into the network's output",
        "To activate the neural network",
        "To speed up the training process",
        "To reduce overfitting",
      ],
      correctAnswer: "To introduce non-linearity into the network's output",
    },
    {
      id: 5,
      question: "What is overfitting in machine learning?",
      options: [
        "When a model learns the training data too well, including noise and outliers",
        "When a model is too complex for the available data",
        "When a model performs well on training data but poorly on new data",
        "All of the above",
      ],
      correctAnswer: "All of the above",
    },
    {
      id: 6,
      question: "What is gradient descent?",
      options: [
        "An optimization algorithm used to minimize the cost function in machine learning models",
        "A visualization technique for high-dimensional data",
        "A type of neural network architecture",
        "A method for feature selection",
      ],
      correctAnswer: "An optimization algorithm used to minimize the cost function in machine learning models",
    },
    {
      id: 7,
      question: "What is transfer learning?",
      options: [
        "A technique where a pre-trained model is used as a starting point for a new task",
        "Transferring data between different machine learning platforms",
        "Learning that transfers between different programming languages",
        "A method to transfer knowledge between human experts and AI systems",
      ],
      correctAnswer: "A technique where a pre-trained model is used as a starting point for a new task",
    },
    {
      id: 8,
      question: "What is a confusion matrix?",
      options: [
        "A table used to evaluate the performance of a classification model",
        "A matrix that confuses the neural network during training",
        "A visualization of complex data relationships",
        "A matrix used to initialize neural network weights",
      ],
      correctAnswer: "A table used to evaluate the performance of a classification model",
    },
    {
      id: 9,
      question: "What is reinforcement learning?",
      options: [
        "A type of machine learning where an agent learns by interacting with an environment",
        "Learning that is reinforced by human feedback",
        "A learning method that reinforces existing knowledge",
        "A technique to strengthen neural connections",
      ],
      correctAnswer: "A type of machine learning where an agent learns by interacting with an environment",
    },
    {
      id: 10,
      question: "What is the purpose of regularization in machine learning?",
      options: [
        "To prevent overfitting by adding a penalty term to the loss function",
        "To make the model more complex",
        "To speed up the training process",
        "To increase the model's accuracy on training data",
      ],
      correctAnswer: "To prevent overfitting by adding a penalty term to the loss function",
    },
  ],
  "data-science": [
    {
      id: 1,
      question: "What is the difference between data science and data analytics?",
      options: [
        "Data science focuses on future predictions while data analytics focuses on historical data insights",
        "Data science uses only machine learning while data analytics uses only statistics",
        "Data science is for big data while data analytics is for small data",
        "There is no difference between them",
      ],
      correctAnswer:
        "Data science focuses on future predictions while data analytics focuses on historical data insights",
    },
    {
      id: 2,
      question: "What is a data warehouse?",
      options: [
        "A system used for reporting and data analysis of structured data from multiple sources",
        "A physical location where data is stored",
        "A database that contains only raw data",
        "A tool for data visualization",
      ],
      correctAnswer: "A system used for reporting and data analysis of structured data from multiple sources",
    },
    {
      id: 3,
      question: "What is the purpose of data cleaning?",
      options: [
        "To identify and correct errors, inconsistencies, and inaccuracies in datasets",
        "To make data look visually appealing",
        "To compress data for storage efficiency",
        "To encrypt sensitive data",
      ],
      correctAnswer: "To identify and correct errors, inconsistencies, and inaccuracies in datasets",
    },
    {
      id: 4,
      question: "What is a feature in data science?",
      options: [
        "An individual measurable property or characteristic of a phenomenon being observed",
        "A special function in a data science tool",
        "A visualization technique",
        "A type of data storage",
      ],
      correctAnswer: "An individual measurable property or characteristic of a phenomenon being observed",
    },
    {
      id: 5,
      question: "What is dimensionality reduction?",
      options: [
        "The process of reducing the number of random variables under consideration",
        "Reducing the physical size of data storage",
        "Simplifying data visualization",
        "Decreasing the number of data points in a dataset",
      ],
      correctAnswer: "The process of reducing the number of random variables under consideration",
    },
    {
      id: 6,
      question: "What is Apache Hadoop?",
      options: [
        "A framework for distributed storage and processing of big data",
        "A programming language for data science",
        "A data visualization tool",
        "A machine learning algorithm",
      ],
      correctAnswer: "A framework for distributed storage and processing of big data",
    },
    {
      id: 7,
      question: "What is the purpose of A/B testing?",
      options: [
        "To compare two versions of a variable to determine which performs better",
        "To test the reliability of data storage systems",
        "To validate machine learning models",
        "To check data quality",
      ],
      correctAnswer: "To compare two versions of a variable to determine which performs better",
    },
    {
      id: 8,
      question: "What is a time series analysis?",
      options: [
        "A statistical technique dealing with time-ordered data points",
        "Analysis of how long data processing takes",
        "A method to predict when a system will fail",
        "A technique to optimize database query time",
      ],
      correctAnswer: "A statistical technique dealing with time-ordered data points",
    },
    {
      id: 9,
      question: "What is ETL in data processing?",
      options: [
        "Extract, Transform, Load - a process to prepare data for analysis",
        "Evaluate, Test, Learn - a machine learning workflow",
        "Efficient Time Learning - an algorithm optimization technique",
        "External Tool Library - a collection of data science tools",
      ],
      correctAnswer: "Extract, Transform, Load - a process to prepare data for analysis",
    },
    {
      id: 10,
      question: "What is the purpose of data normalization?",
      options: [
        "To scale features to a similar range to improve model performance",
        "To organize data in a database to reduce redundancy",
        "To convert data into a normal distribution",
        "To remove outliers from a dataset",
      ],
      correctAnswer: "To scale features to a similar range to improve model performance",
    },
  ],
  cybersecurity: [
    {
      id: 1,
      question: "What is a firewall?",
      options: [
        "A network security device that monitors and filters incoming and outgoing network traffic",
        "A physical barrier to prevent unauthorized access to a server room",
        "A software that detects viruses",
        "A backup system for data protection",
      ],
      correctAnswer: "A network security device that monitors and filters incoming and outgoing network traffic",
    },
    {
      id: 2,
      question: "What is encryption?",
      options: [
        "The process of converting information into a code to prevent unauthorized access",
        "The process of compressing data to save storage space",
        "A method to speed up data transmission",
        "A technique to organize data in databases",
      ],
      correctAnswer: "The process of converting information into a code to prevent unauthorized access",
    },
    {
      id: 3,
      question: "What is a DDoS attack?",
      options: [
        "An attempt to make an online service unavailable by overwhelming it with traffic from multiple sources",
        "A direct attack on a specific user's account",
        "A virus that deletes data from a system",
        "An attack that targets database systems only",
      ],
      correctAnswer:
        "An attempt to make an online service unavailable by overwhelming it with traffic from multiple sources",
    },
    {
      id: 4,
      question: "What is two-factor authentication (2FA)?",
      options: [
        "A security process requiring two different authentication factors to verify identity",
        "A system that requires two passwords",
        "A security protocol that uses two different firewalls",
        "A method that requires two different users to approve access",
      ],
      correctAnswer: "A security process requiring two different authentication factors to verify identity",
    },
    {
      id: 5,
      question: "What is a zero-day vulnerability?",
      options: [
        "A software vulnerability unknown to those who should be interested in mitigating it",
        "A vulnerability that exists for zero days before being discovered",
        "A vulnerability that can be exploited in zero seconds",
        "A vulnerability that affects zero users",
      ],
      correctAnswer: "A software vulnerability unknown to those who should be interested in mitigating it",
    },
    {
      id: 6,
      question: "What is phishing?",
      options: [
        "A fraudulent attempt to obtain sensitive information by disguising as a trustworthy entity",
        "A technique to fish for information in databases",
        "A method to extract data from damaged storage devices",
        "A legitimate way to gather user feedback",
      ],
      correctAnswer: "A fraudulent attempt to obtain sensitive information by disguising as a trustworthy entity",
    },
    {
      id: 7,
      question: "What is a VPN?",
      options: [
        "A service that encrypts your internet connection and hides your online identity",
        "A type of network protocol used only by governments",
        "A virtual private network card for computers",
        "A visual processing node in graphics systems",
      ],
      correctAnswer: "A service that encrypts your internet connection and hides your online identity",
    },
    {
      id: 8,
      question: "What is a security audit?",
      options: [
        "A systematic evaluation of an organization's security posture",
        "A financial review of security expenditures",
        "A test of physical security measures only",
        "An audit of security personnel performance",
      ],
      correctAnswer: "A systematic evaluation of an organization's security posture",
    },
    {
      id: 9,
      question: "What is ransomware?",
      options: [
        "Malware that encrypts files and demands payment for the decryption key",
        "Software that randomly changes system settings",
        "A tool used by security professionals to test system vulnerabilities",
        "A type of firewall that requires payment",
      ],
      correctAnswer: "Malware that encrypts files and demands payment for the decryption key",
    },
    {
      id: 10,
      question: "What is the principle of least privilege?",
      options: [
        "A security concept in which a user is given the minimum levels of access necessary to complete their job",
        "A concept that states security systems should be as simple as possible",
        "The idea that security measures should be invisible to users",
        "A principle stating that security should be the highest priority in system design",
      ],
      correctAnswer:
        "A security concept in which a user is given the minimum levels of access necessary to complete their job",
    },
  ],
  "cloud-computing": [
    {
      id: 1,
      question: "What is cloud computing?",
      options: [
        "The delivery of computing services over the internet",
        "Computing that uses weather forecasting data",
        "A type of computing that works only with cloud storage",
        "Computing performed in high-altitude data centers",
      ],
      correctAnswer: "The delivery of computing services over the internet",
    },
    {
      id: 2,
      question: "What is IaaS (Infrastructure as a Service)?",
      options: [
        "A cloud computing service that provides virtualized computing resources over the internet",
        "A service that installs software on physical infrastructure",
        "A service that provides only storage solutions",
        "A service that manages internal network infrastructure",
      ],
      correctAnswer: "A cloud computing service that provides virtualized computing resources over the internet",
    },
    {
      id: 3,
      question: "What is PaaS (Platform as a Service)?",
      options: [
        "A cloud computing model that provides a platform allowing customers to develop, run, and manage applications",
        "A service that provides physical hardware platforms",
        "A service that manages passwords and authentication",
        "A performance analysis service for applications",
      ],
      correctAnswer:
        "A cloud computing model that provides a platform allowing customers to develop, run, and manage applications",
    },
    {
      id: 4,
      question: "What is SaaS (Software as a Service)?",
      options: [
        "A software licensing and delivery model in which software is licensed on a subscription basis and centrally hosted",
        "A service that secures applications against attacks",
        "Software that automatically scales based on demand",
        "A service that tests software for bugs",
      ],
      correctAnswer:
        "A software licensing and delivery model in which software is licensed on a subscription basis and centrally hosted",
    },
    {
      id: 5,
      question: "What is a hybrid cloud?",
      options: [
        "A computing environment that uses a mix of on-premises, private cloud and public cloud services",
        "A cloud service that uses both Windows and Linux operating systems",
        "A cloud that combines storage and computing services",
        "A cloud service provided by multiple vendors",
      ],
      correctAnswer: "A computing environment that uses a mix of on-premises, private cloud and public cloud services",
    },
    {
      id: 6,
      question: "What is auto-scaling in cloud computing?",
      options: [
        "A feature that automatically adjusts resources based on current demand",
        "Automatic resizing of cloud storage",
        "A feature that automatically updates software",
        "A billing model that scales with usage",
      ],
      correctAnswer: "A feature that automatically adjusts resources based on current demand",
    },
    {
      id: 7,
      question: "What is a container in cloud computing?",
      options: [
        "A lightweight, standalone executable package that includes everything needed to run a piece of software",
        "A storage unit for cloud data",
        "A virtual machine with limited capabilities",
        "A security boundary for cloud applications",
      ],
      correctAnswer:
        "A lightweight, standalone executable package that includes everything needed to run a piece of software",
    },
    {
      id: 8,
      question: "What is serverless computing?",
      options: [
        "A cloud computing execution model where the cloud provider manages the infrastructure",
        "Computing that doesn't use any servers",
        "A model where companies manage their own servers in the cloud",
        "Computing that uses peer-to-peer networks instead of servers",
      ],
      correctAnswer: "A cloud computing execution model where the cloud provider manages the infrastructure",
    },
    {
      id: 9,
      question: "What is a cloud region?",
      options: [
        "A geographic area where a cloud provider's data centers are located",
        "A specific type of cloud service offering",
        "A virtual boundary in cloud storage",
        "A regulatory framework for cloud services",
      ],
      correctAnswer: "A geographic area where a cloud provider's data centers are located",
    },
    {
      id: 10,
      question: "What is cloud migration?",
      options: [
        "The process of moving digital assets to cloud infrastructure",
        "The movement of clouds in weather systems",
        "Transferring data between different cloud providers",
        "Upgrading from one cloud service tier to another",
      ],
      correctAnswer: "The process of moving digital assets to cloud infrastructure",
    },
  ],
  "web-development": [
    {
      id: 1,
      question: "What is the difference between HTML and HTML5?",
      options: [
        "HTML5 introduces new semantic elements, form controls, and multimedia support",
        "HTML5 is just a marketing term; there is no technical difference",
        "HTML is for websites while HTML5 is for mobile apps",
        "HTML5 requires JavaScript while HTML does not",
      ],
      correctAnswer: "HTML5 introduces new semantic elements, form controls, and multimedia support",
    },
    {
      id: 2,
      question: "What is CSS used for?",
      options: [
        "To style and layout web pages",
        "To create interactive elements on web pages",
        "To structure the content of web pages",
        "To communicate with web servers",
      ],
      correctAnswer: "To style and layout web pages",
    },
    {
      id: 3,
      question: "What is the DOM?",
      options: [
        "A programming interface for web documents that represents the page as nodes and objects",
        "A JavaScript library for web development",
        "A design pattern for web applications",
        "A type of database for web content",
      ],
      correctAnswer: "A programming interface for web documents that represents the page as nodes and objects",
    },
    {
      id: 4,
      question: "What is responsive web design?",
      options: [
        "An approach to web design that makes web pages render well on a variety of devices and window or screen sizes",
        "A design that responds to user interactions with animations",
        "A website that loads quickly",
        "A design that changes colors based on time of day",
      ],
      correctAnswer:
        "An approach to web design that makes web pages render well on a variety of devices and window or screen sizes",
    },
    {
      id: 5,
      question: "What is a RESTful API?",
      options: [
        "An API that conforms to the constraints of REST architectural style",
        "An API that requires authentication",
        "An API that only works with JSON data",
        "An API that allows developers to rest while it works automatically",
      ],
      correctAnswer: "An API that conforms to the constraints of REST architectural style",
    },
    {
      id: 6,
      question: "What is AJAX?",
      options: [
        "A technique for creating fast and dynamic web pages by exchanging data with a server behind the scenes",
        "A JavaScript library",
        "A programming language for web development",
        "A type of web server",
      ],
      correctAnswer:
        "A technique for creating fast and dynamic web pages by exchanging data with a server behind the scenes",
    },
    {
      id: 7,
      question: "What is the purpose of JavaScript in web development?",
      options: [
        "To create interactive and dynamic content on web pages",
        "To style web pages",
        "To structure web content",
        "To communicate directly with databases",
      ],
      correctAnswer: "To create interactive and dynamic content on web pages",
    },
    {
      id: 8,
      question: "What is a Single Page Application (SPA)?",
      options: [
        "A web application that loads a single HTML page and dynamically updates it as the user interacts with the app",
        "A website with only one page of content",
        "An application that can only be used by one user at a time",
        "A mobile application that looks like a website",
      ],
      correctAnswer:
        "A web application that loads a single HTML page and dynamically updates it as the user interacts with the app",
    },
    {
      id: 9,
      question: "What is a web framework?",
      options: [
        "A software framework designed to support the development of web applications",
        "The structure that holds a website's server hardware",
        "A tool for testing websites across different browsers",
        "A type of web hosting service",
      ],
      correctAnswer: "A software framework designed to support the development of web applications",
    },
    {
      id: 10,
      question: "What is CORS?",
      options: [
        "A mechanism that allows restricted resources on a web page to be requested from another domain",
        "A CSS framework",
        "A JavaScript runtime environment",
        "A type of web server configuration",
      ],
      correctAnswer: "A mechanism that allows restricted resources on a web page to be requested from another domain",
    },
  ],
  "mobile-app": [
    {
      id: 1,
      question: "What is the difference between native and hybrid mobile apps?",
      options: [
        "Native apps are built for a specific platform, while hybrid apps work across multiple platforms",
        "Native apps are free, while hybrid apps are paid",
        "Hybrid apps are faster than native apps",
        "Native apps cannot access device features, while hybrid apps can",
      ],
      correctAnswer: "Native apps are built for a specific platform, while hybrid apps work across multiple platforms",
    },
    {
      id: 2,
      question: "What is React Native?",
      options: [
        "A framework for building native apps using React and JavaScript",
        "A native implementation of React for mobile browsers",
        "A testing framework for mobile applications",
        "A design system for mobile interfaces",
      ],
      correctAnswer: "A framework for building native apps using React and JavaScript",
    },
    {
      id: 3,
      question: "What is Flutter?",
      options: [
        "Google's UI toolkit for building natively compiled applications from a single codebase",
        "A JavaScript framework for mobile development",
        "Apple's design system for iOS apps",
        "A testing tool for mobile applications",
      ],
      correctAnswer: "Google's UI toolkit for building natively compiled applications from a single codebase",
    },
    {
      id: 4,
      question: "What is the purpose of a mobile app manifest file?",
      options: [
        "To provide metadata about the app such as name, author, and required permissions",
        "To store user data and preferences",
        "To manage network requests",
        "To define the app's visual appearance",
      ],
      correctAnswer: "To provide metadata about the app such as name, author, and required permissions",
    },
    {
      id: 5,
      question: "What is a push notification?",
      options: [
        "A message that is 'pushed' from a server to a mobile device without a specific request from the app",
        "A notification that requires the user to push a button to acknowledge",
        "A type of in-app purchase",
        "A method to push updates to an app",
      ],
      correctAnswer:
        "A message that is 'pushed' from a server to a mobile device without a specific request from the app",
    },
    {
      id: 6,
      question: "What is the purpose of app store optimization (ASO)?",
      options: [
        "To improve an app's visibility in app stores and increase downloads",
        "To optimize the app's performance and reduce crashes",
        "To reduce the app's size and memory usage",
        "To optimize in-app purchases and revenue",
      ],
      correctAnswer: "To improve an app's visibility in app stores and increase downloads",
    },
    {
      id: 7,
      question: "What is a mobile app wireframe?",
      options: [
        "A visual guide that represents the skeletal framework of a mobile application",
        "The internal hardware components of a mobile device",
        "A framework for developing mobile apps",
        "The network infrastructure that supports mobile apps",
      ],
      correctAnswer: "A visual guide that represents the skeletal framework of a mobile application",
    },
    {
      id: 8,
      question: "What is the purpose of mobile app analytics?",
      options: [
        "To track user behavior and app performance to make data-driven improvements",
        "To analyze competitors' apps",
        "To predict future mobile technology trends",
        "To optimize app store rankings",
      ],
      correctAnswer: "To track user behavior and app performance to make data-driven improvements",
    },
    {
      id: 9,
      question: "What is a progressive web app (PWA)?",
      options: [
        "A web application that functions like a mobile app with features such as offline access and push notifications",
        "A mobile app that progressively adds features as users need them",
        "A web development framework",
        "An app that progressively loads content to improve performance",
      ],
      correctAnswer:
        "A web application that functions like a mobile app with features such as offline access and push notifications",
    },
    {
      id: 10,
      question: "What is the purpose of mobile app testing?",
      options: [
        "To ensure the app functions correctly across different devices and scenarios",
        "To test if users like the app",
        "To determine the app's price point",
        "To test the app's marketing strategy",
      ],
      correctAnswer: "To ensure the app functions correctly across different devices and scenarios",
    },
  ],
  "software-engineering": [
    {
      id: 1,
      question: "What is the software development life cycle (SDLC)?",
      options: [
        "A process used by software industry to design, develop, and test high-quality software",
        "The average time a software product remains useful",
        "The time between software releases",
        "A cycle of hardware upgrades needed for software development",
      ],
      correctAnswer: "A process used by software industry to design, develop, and test high-quality software",
    },
    {
      id: 2,
      question: "What is version control?",
      options: [
        "A system that records changes to files over time so you can recall specific versions later",
        "A method to control which version of software users can access",
        "A technique to version software releases with semantic numbering",
        "A way to control access to different versions of documentation",
      ],
      correctAnswer: "A system that records changes to files over time so you can recall specific versions later",
    },
    {
      id: 3,
      question: "What is test-driven development (TDD)?",
      options: [
        "A software development process relying on software requirements being converted to test cases before software is developed",
        "Development that is driven by the quality assurance team",
        "A development approach where tests are written after the code",
        "A testing methodology that drives development costs down",
      ],
      correctAnswer:
        "A software development process relying on software requirements being converted to test cases before software is developed",
    },
    {
      id: 4,
      question: "What is a design pattern in software engineering?",
      options: [
        "A general reusable solution to a commonly occurring problem in software design",
        "A visual design template for user interfaces",
        "A pattern of code organization specific to a programming language",
        "A formal document describing software architecture",
      ],
      correctAnswer: "A general reusable solution to a commonly occurring problem in software design",
    },
    {
      id: 5,
      question: "What is refactoring?",
      options: [
        "The process of restructuring existing code without changing its external behavior",
        "Completely rewriting a software application",
        "Changing the functionality of code to add new features",
        "Optimizing code to run faster",
      ],
      correctAnswer: "The process of restructuring existing code without changing its external behavior",
    },
    {
      id: 6,
      question: "What is continuous integration (CI)?",
      options: [
        "The practice of merging all developers' working copies to a shared mainline several times a day",
        "Continuously integrating new features into software",
        "A software development approach that integrates all aspects of software development",
        "The integration of continuous delivery with continuous deployment",
      ],
      correctAnswer: "The practice of merging all developers' working copies to a shared mainline several times a day",
    },
    {
      id: 7,
      question: "What is the difference between functional and non-functional requirements?",
      options: [
        "Functional requirements describe what the system should do, while non-functional requirements describe how the system should behave",
        "Functional requirements are required, while non-functional requirements are optional",
        "Functional requirements relate to functions in code, while non-functional requirements don't",
        "Functional requirements are written by developers, while non-functional requirements are written by users",
      ],
      correctAnswer:
        "Functional requirements describe what the system should do, while non-functional requirements describe how the system should behave",
    },
    {
      id: 8,
      question: "What is a software architecture?",
      options: [
        "The fundamental structures of a software system and the discipline of creating such structures and systems",
        "The visual design of software user interfaces",
        "The hardware infrastructure that supports software",
        "The process of architecting software from scratch",
      ],
      correctAnswer:
        "The fundamental structures of a software system and the discipline of creating such structures and systems",
    },
    {
      id: 9,
      question: "What is technical debt?",
      options: [
        "The implied cost of additional rework caused by choosing an easy solution now instead of using a better approach that would take longer",
        "The cost of technical resources used in software development",
        "The debt incurred from purchasing technical equipment",
        "The financial investment in technical training for developers",
      ],
      correctAnswer:
        "The implied cost of additional rework caused by choosing an easy solution now instead of using a better approach that would take longer",
    },
    {
      id: 10,
      question: "What is the Agile software development methodology?",
      options: [
        "An approach to software development under which requirements and solutions evolve through the collaborative effort of cross-functional teams",
        "A methodology that requires extensive documentation before development begins",
        "A fast-paced development methodology that prioritizes speed over quality",
        "A methodology focused on individual developer productivity",
      ],
      correctAnswer:
        "An approach to software development under which requirements and solutions evolve through the collaborative effort of cross-functional teams",
    },
  ],
  devops: [
    {
      id: 1,
      question: "What is DevOps?",
      options: [
        "A set of practices that combines software development and IT operations to shorten the development lifecycle",
        "A programming language for operations",
        "A type of server configuration",
        "A software development methodology focused only on deployment",
      ],
      correctAnswer:
        "A set of practices that combines software development and IT operations to shorten the development lifecycle",
    },
    {
      id: 2,
      question: "What is continuous deployment?",
      options: [
        "The practice of automatically deploying every change that passes automated tests to production",
        "Deploying software continuously throughout the day",
        "A deployment that never stops",
        "Deploying software only after extensive manual testing",
      ],
      correctAnswer: "The practice of automatically deploying every change that passes automated tests to production",
    },
    {
      id: 3,
      question: "What is infrastructure as code (IaC)?",
      options: [
        "The process of managing and provisioning infrastructure through code instead of manual processes",
        "Writing code that runs on infrastructure",
        "Code that describes infrastructure without actually provisioning it",
        "A programming paradigm for system administrators",
      ],
      correctAnswer: "The process of managing and provisioning infrastructure through code instead of manual processes",
    },
    {
      id: 4,
      question: "What is a CI/CD pipeline?",
      options: [
        "A series of automated steps that code changes go through from development to deployment",
        "A physical pipeline for cooling computer infrastructure",
        "A visualization tool for code dependencies",
        "A communication channel between development and operations teams",
      ],
      correctAnswer: "A series of automated steps that code changes go through from development to deployment",
    },
    {
      id: 5,
      question: "What is Docker?",
      options: [
        "A platform for developing, shipping, and running applications in containers",
        "A tool for documenting code",
        "A server monitoring system",
        "A version control system",
      ],
      correctAnswer: "A platform for developing, shipping, and running applications in containers",
    },
    {
      id: 6,
      question: "What is Kubernetes?",
      options: [
        "An open-source container orchestration platform for automating deployment, scaling, and management of containerized applications",
        "A programming language for DevOps",
        "A type of virtual machine",
        "A continuous integration tool",
      ],
      correctAnswer:
        "An open-source container orchestration platform for automating deployment, scaling, and management of containerized applications",
    },
    {
      id: 7,
      question: "What is the purpose of monitoring in DevOps?",
      options: [
        "To track the performance and health of applications and infrastructure to identify and resolve issues",
        "To monitor developers' work hours",
        "To ensure compliance with company policies",
        "To track project deadlines",
      ],
      correctAnswer:
        "To track the performance and health of applications and infrastructure to identify and resolve issues",
    },
    {
      id: 8,
      question: "What is a microservices architecture?",
      options: [
        "An architectural style that structures an application as a collection of loosely coupled services",
        "A very small service running on a server",
        "An architecture that uses minimal resources",
        "A design pattern for small applications",
      ],
      correctAnswer:
        "An architectural style that structures an application as a collection of loosely coupled services",
    },
    {
      id: 9,
      question: "What is configuration management in DevOps?",
      options: [
        "The process of systematically handling changes to a system to maintain integrity over time",
        "Managing the configuration files of an application",
        "Setting up development environments",
        "Managing user configurations and preferences",
      ],
      correctAnswer: "The process of systematically handling changes to a system to maintain integrity over time",
    },
    {
      id: 10,
      question: "What is the purpose of a blue-green deployment?",
      options: [
        "To reduce downtime and risk by running two identical production environments",
        "A deployment strategy that uses blue and green as visual indicators",
        "A deployment that is environmentally friendly",
        "A deployment strategy for blue and green colored themes",
      ],
      correctAnswer: "To reduce downtime and risk by running two identical production environments",
    },
  ],
  blockchain: [
    {
      id: 1,
      question: "What is blockchain technology?",
      options: [
        "A distributed ledger technology that records transactions across multiple computers",
        "A type of cryptocurrency",
        "A method for encrypting data",
        "A programming language for financial applications",
      ],
      correctAnswer: "A distributed ledger technology that records transactions across multiple computers",
    },
    {
      id: 2,
      question: "What is a smart contract?",
      options: [
        "Self-executing contracts with the terms directly written into code",
        "A legally binding contract created by AI",
        "A contract that adapts to changing conditions",
        "A contract between smart devices in IoT",
      ],
      correctAnswer: "Self-executing contracts with the terms directly written into code",
    },
    {
      id: 3,
      question: "What is a consensus mechanism in blockchain?",
      options: [
        "A method to achieve agreement on a single data value among distributed processes or systems",
        "A mechanism for users to reach consensus on blockchain governance",
        "A legal agreement between blockchain users",
        "A mechanism to consolidate multiple blockchains",
      ],
      correctAnswer: "A method to achieve agreement on a single data value among distributed processes or systems",
    },
    {
      id: 4,
      question: "What is a public key in blockchain?",
      options: [
        "A cryptographic key that can be shared with anyone and is used to verify digital signatures",
        "A key that gives public access to a blockchain",
        "A publicly available blockchain address",
        "The main key used by blockchain administrators",
      ],
      correctAnswer: "A cryptographic key that can be shared with anyone and is used to verify digital signatures",
    },
    {
      id: 5,
      question: "What is a 51% attack in blockchain?",
      options: [
        "An attack where a group of miners controlling more than 50% of the network's mining hash rate manipulates the blockchain",
        "An attack that affects 51% of blockchain users",
        "A situation where 51% of transactions fail",
        "An attack that reduces blockchain efficiency by 51%",
      ],
      correctAnswer:
        "An attack where a group of miners controlling more than 50% of the network's mining hash rate manipulates the blockchain",
    },
    {
      id: 6,
      question: "What is a decentralized application (DApp)?",
      options: [
        "An application that runs on a distributed computing system",
        "An application that doesn't have a central server",
        "An application that works without internet connection",
        "An application that distributes processing across user devices",
      ],
      correctAnswer: "An application that runs on a distributed computing system",
    },
    {
      id: 7,
      question: "What is a token in blockchain?",
      options: [
        "A digital asset designed with utility or security features that resides on its own blockchain",
        "A physical device used for blockchain authentication",
        "A reward given to miners",
        "A unit of measurement for blockchain processing power",
      ],
      correctAnswer: "A digital asset designed with utility or security features that resides on its own blockchain",
    },
    {
      id: 8,
      question: "What is a hash function in blockchain?",
      options: [
        "A mathematical function that converts an input of arbitrary length into an encrypted output of a fixed length",
        "A function that determines the speed of mining",
        "A method to distribute tokens to users",
        "A function that connects different blocks together",
      ],
      correctAnswer:
        "A mathematical function that converts an input of arbitrary length into an encrypted output of a fixed length",
    },
    {
      id: 9,
      question: "What is a fork in blockchain?",
      options: [
        "A change to the protocol that creates two paths forward, either with a new rule or reverting to old rules",
        "A tool used to mine cryptocurrency",
        "A division of cryptocurrency into smaller units",
        "A method to merge two different blockchains",
      ],
      correctAnswer:
        "A change to the protocol that creates two paths forward, either with a new rule or reverting to old rules",
    },
    {
      id: 10,
      question: "What is a wallet in blockchain technology?",
      options: [
        "A tool that allows users to store and manage their cryptocurrencies",
        "A record of all transactions on the blockchain",
        "A smart contract that manages funds",
        "A node in the blockchain network",
      ],
      correctAnswer: "A tool that allows users to store and manage their cryptocurrencies",
    },
  ],
  "game-development": [
    {
      id: 1,
      question: "What is a game engine?",
      options: [
        "A software framework designed for the creation and development of video games",
        "The main processor in a gaming console",
        "A tool that only handles game graphics",
        "The storyline that drives a game forward",
      ],
      correctAnswer: "A software framework designed for the creation and development of video games",
    },
    {
      id: 2,
      question: "What is Unity?",
      options: [
        "A cross-platform game engine developed by Unity Technologies",
        "A concept of bringing different game elements together",
        "A programming language for games",
        "A gaming console",
      ],
      correctAnswer: "A cross-platform game engine developed by Unity Technologies",
    },
    {
      id: 3,
      question: "What is a sprite in game development?",
      options: [
        "A 2D bitmap graphic that is integrated into a larger scene",
        "A type of game character",
        "A 3D model used in games",
        "A special effect in games",
      ],
      correctAnswer: "A 2D bitmap graphic that is integrated into a larger scene",
    },
    {
      id: 4,
      question: "What is procedural generation in games?",
      options: [
        "A method of creating data algorithmically rather than manually",
        "A step-by-step procedure for game development",
        "The generation of game procedures and rules",
        "A technique for generating game code automatically",
      ],
      correctAnswer: "A method of creating data algorithmically rather than manually",
    },
    {
      id: 5,
      question: "What is a game loop?",
      options: [
        "The central component of any game, running continuously during gameplay to process user input and update game state",
        "A repetitive section of a game's storyline",
        "A circular level design in games",
        "A programming loop that causes games to crash",
      ],
      correctAnswer:
        "The central component of any game, running continuously during gameplay to process user input and update game state",
    },
    {
      id: 6,
      question: "What is a hitbox in game development?",
      options: [
        "An invisible shape used for collision detection in games",
        "A box that contains power-ups in games",
        "A box that appears when a character is hit",
        "The main menu of a fighting game",
      ],
      correctAnswer: "An invisible shape used for collision detection in games",
    },
    {
      id: 7,
      question: "What is a game design document (GDD)?",
      options: [
        "A detailed document that describes all aspects of a game, serving as a blueprint for its development",
        "A legal document that grants rights to develop a game",
        "A document listing all bugs in a game",
        "A manual provided with the game for players",
      ],
      correctAnswer:
        "A detailed document that describes all aspects of a game, serving as a blueprint for its development",
    },
    {
      id: 8,
      question: "What is a texture in game development?",
      options: [
        "A 2D image applied to the surface of a 3D object",
        "The feel of a game's controls",
        "The difficulty level of a game",
        "A special effect that adds grain to game graphics",
      ],
      correctAnswer: "A 2D image applied to the surface of a 3D object",
    },
    {
      id: 9,
      question: "What is a game mechanic?",
      options: [
        "A rule or set of rules governing a specific interaction within a game",
        "A person who fixes gaming hardware",
        "The physical components of a game console",
        "A character in a game that repairs items",
      ],
      correctAnswer: "A rule or set of rules governing a specific interaction within a game",
    },
    {
      id: 10,
      question: "What is level design in game development?",
      options: [
        "The process of creating levels, missions, or stages in a video game",
        "Determining the difficulty levels of a game",
        "Designing the user interface levels",
        "Creating character level progression systems",
      ],
      correctAnswer: "The process of creating levels, missions, or stages in a video game",
    },
  ],
}

// Topic card icons (simplified representations)
const topicIcons = {
  "ai-ml": "🧠",
  "data-science": "📊",
  cybersecurity: "🔒",
  "cloud-computing": "☁️",
  "web-development": "🌐",
  "mobile-app": "📱",
  "software-engineering": "⚙️",
  devops: "🔄",
  blockchain: "🔗",
  "game-development": "🎮",
}

export default function Practice() {
  const [selectedTopic, setSelectedTopic] = useState("")
  const [quizStarted, setQuizStarted] = useState(false)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [score, setScore] = useState(0)
  const [searchQuery, setSearchQuery] = useState("")

  const handleTopicSelect = (topicId) => {
    setSelectedTopic(topicId)
    setQuizStarted(true)
    setCurrentQuestionIndex(0)
    setSelectedAnswers({})
    setQuizCompleted(false)
    setScore(0)
  }

  const handleAnswerSelect = (answer) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestionIndex]: answer,
    })
  }

  const goToNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions[selectedTopic].length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      // Calculate score
      let correctAnswers = 0
      quizQuestions[selectedTopic].forEach((question, index) => {
        if (selectedAnswers[index] === question.correctAnswer) {
          correctAnswers++
        }
      })
      setScore(correctAnswers)
      setQuizCompleted(true)
    }
  }

  const resetQuiz = () => {
    setQuizStarted(false)
    setCurrentQuestionIndex(0)
    setSelectedAnswers({})
    setQuizCompleted(false)
    setScore(0)
    setSelectedTopic("")
  }

  // Filter topics based on search query
  const filteredTopics = quizTopics.filter((topic) => topic.name.toLowerCase().includes(searchQuery.toLowerCase()))

  const currentQuestion = selectedTopic && quizQuestions[selectedTopic][currentQuestionIndex]
  const progress = selectedTopic ? ((currentQuestionIndex + 1) / quizQuestions[selectedTopic].length) * 100 : 0

  return (
    <div className="interview-practice-container">
      <div className="interview-practice-content">
        <h1 className="interview-practice-title">Interview Practice Quiz</h1>

        {!quizStarted ? (
          <div className="topic-selection-section">
            <div className="search-container">
              <input
                type="text"
                placeholder="Search topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>

            <div className="topic-cards-grid">
              {filteredTopics.map((topic) => (
                <div key={topic.id} className="topic-card" onClick={() => handleTopicSelect(topic.id)}>
                  <div className="topic-card-icon">{topicIcons[topic.id]}</div>
                  <h3 className="topic-card-title">{topic.name}</h3>
                  <p className="topic-card-description">10 questions</p>
                </div>
              ))}
            </div>

            {filteredTopics.length === 0 && (
              <div className="no-topics-found">
                <p>No topics found matching "{searchQuery}"</p>
              </div>
            )}
          </div>
        ) : quizCompleted ? (
          <div className="card results-card">
            <div className="card-header">
              <h2 className="card-title">Quiz Results</h2>
              <p className="card-description">
                You've completed the {quizTopics.find((t) => t.id === selectedTopic)?.name} quiz
              </p>
            </div>
            <div className="card-content results-content">
              <div className="score-display">{score} / 10</div>
              <p className="score-message">
                {score === 10
                  ? "Perfect score! Excellent job!"
                  : score >= 7
                    ? "Great job! You're well prepared!"
                    : score >= 5
                      ? "Good effort! Keep practicing!"
                      : "Keep studying and try again!"}
              </p>
              <div className="score-progress-container">
                <div className="score-progress-bar" style={{ width: `${(score / 10) * 100}%` }}></div>
              </div>
            </div>
            <div className="card-footer results-footer">
              <button
                onClick={() => {
                  setQuizStarted(true)
                  setQuizCompleted(false)
                  setCurrentQuestionIndex(0)
                  setSelectedAnswers({})
                }}
                className="button retry-button"
              >
                Retry Quiz
              </button>
              <button onClick={resetQuiz} className="button new-topic-button">
                Choose New Topic
              </button>
            </div>
          </div>
        ) : (
          <div className="card quiz-card">
            <div className="card-header">
              <div className="quiz-header-info">
                <div className="quiz-topic">Topic: {quizTopics.find((t) => t.id === selectedTopic)?.name}</div>
                <div className="quiz-progress-text">
                  Question {currentQuestionIndex + 1} of {quizQuestions[selectedTopic].length}
                </div>
              </div>
              <div className="progress-container">
                <div className="progress-bar" style={{ width: `${progress}%` }}></div>
              </div>
              <h2 className="question-title">{currentQuestion.question}</h2>
            </div>
            <div className="card-content">
              <div className="answer-options">
                {currentQuestion.options.map((option, index) => (
                  <div
                    key={index}
                    className={`answer-option ${
                      selectedAnswers[currentQuestionIndex] === option ? "selected-answer" : ""
                    }`}
                    onClick={() => handleAnswerSelect(option)}
                  >
                    <div className="radio-container">
                      <div
                        className={`radio-button ${selectedAnswers[currentQuestionIndex] === option ? "checked" : ""}`}
                      >
                        {selectedAnswers[currentQuestionIndex] === option && <div className="radio-inner"></div>}
                      </div>
                      <label className="answer-label">{option}</label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="card-footer">
              <button
                onClick={goToNextQuestion}
                disabled={!selectedAnswers[currentQuestionIndex]}
                className="button next-button"
              >
                {currentQuestionIndex < quizQuestions[selectedTopic].length - 1 ? "Next Question" : "Finish Quiz"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

