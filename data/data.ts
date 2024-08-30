import { MediaData, ProfileData, ProjectsData } from "@/util/types";
import { lessonLab_image_data } from "./image-data";

export const media_data: MediaData = {
    gitHub: "https://github.com/CocoTapi",
    linkedIn: "https://linkedin.com",
    0: "https://github.com/CocoTapi/web_developer_bootcamp_2023/tree/main/Sections",
    1: "https://github.com/CocoTapi/REACT_2023",
    2: "https://github.com/CocoTapi/modern_react_2023",
    3: "https://github.com/CocoTapi/algorithms_and_data_structure",
    4: "https://github.com/CocoTapi/coding_interview_bootcamp",
    6: "https://github.com/CocoTapi/The-Complete-Angular-Course"
}

export const profile_data: ProfileData = {
    my_email: 'shioriavino@gmail.com',
    top_page_description: `I combine my passion for education with problem-solving and 
                           creative power of coding, striving to create impactful and innovative solutions.`,
    short_self_introduction: `I began my career as an ESL teacher, a role I cherished deeply. When faced with an unexpected career pause, I was inspired by a friend who quickly launched a project using his software engineering skills. Seizing the opportunity, I explored software engineering and quickly found joy in building programs, solving complex puzzles, and crafting designs that reflected my vision. Though the journey has been challenging, with the support of engineer friends and incredible online resources, I’ve found fulfillment in overcoming obstacles.`,
    long_self_introduction1: `I began my career as an ESL teacher, a role I cherished deeply, but I always had a curiosity to explore something new. When the time came to change my visa, I faced the reality of being unable to work for nearly two years. Rather than see this as a setback, I viewed it as an opportunity to grow my skills and complete a project I had been planning during my master's degree.`,
    long_self_introduction2: `I refined my project, diving into data and technologies, and sought advice from software engineers. While they encouraged me to learn coding, I initially resisted. However, that all changed when my software engineer friend successfully launched a project we had been discussing, quickly turning it into a business. This moment opened my eyes to the incredible power and potential of software engineering.`,
    long_self_introduction3: `Inspired, I began learning to code and quickly found joy in building programs, solving complex puzzles, and crafting designs that reflected my vision. The journey has been far from easy—every new challenge brings unknown errors and difficulties. But with the support of engineer friends and incredible resources available online, I’ve found fulfillment in overcoming them.`,
    long_self_introduction4: `Now, as a software engineer, I combine my passion for education with the problem-solving and creative power of coding, continuously striving to create impactful and innovative solutions.`,
    hobbies: `I love spending time with my cat (who is also my coding partner), cooking, baking, and gardening. Recently, I like playing pickle ball too!`,
    skills: ['JavaScript', 'TypeScript','React', 'Angular', 'HTML', 'CSS', 'Sass', 'Node.js', 'Node Express', 'PostgreSQL', 'MongoDB', 'PgAdmin', 'Postman', 'AWS', 'Git', 'GitHub', 'Figma', 'English', 'Japanese'],
    professional_development: [
        'Web Developer Bootcamp 2023 | Udemy',
        'React - The Complete Guide 2023 (incl. Next.js, Redux) | Udemy',
        'Modern React with Redux 2023 | Udemy',
        'JavaScript Algorithms and Data Structures Masterclass | Udemy',
        'Master the Coding Interview: Data Structures + Algorithms | Udemy',
        'The Complete SQL Bootcamp: Go from Zaro to Hero | Udemy',
        'The Complete Angular Course: Beginner to Advanced | Udemy (Ongoing)'
    ],
}

export const projects_data: ProjectsData = {
    projects: [
        {
            project_id: 1,
            project_title: 'Lesson Lab',
            onGoing: false,
            slug: 'lesson-lab',
            project_url: `https://cocotapi.github.io/full-stack-project-frontend/`,
            images: lessonLab_image_data,
            project_summary: `Lesson Lab App is a Web 2.0 application designed to empower educators 
                                          to manage high-quality class activities while reducing workload.`,
            tech_list: ['React', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Node.js', 'Node Express', 'PostgreSQL', 'PgAdmin', 'Postman', 'AWS', 'Git', 'GitHub', 'Figma'],
            tech_summary: `I focused on creating a seamless and responsive user experience. 
                                       On the frontend, I built a multi-page application using React Router DOM with login options, 
                                       including OAuth. The backend was engineered to handle data efficiently using REST APIs and 
                                       PostgreSQL, ensuring secure authorization. The entire application is deployed on AWS, 
                                       with the frontend hosted on GitHub.`,
            project_details: {
                project_description: `Lesson Lab App is an innovative Web 2.0 platform crafted to empower educators by streamlining 
                                  the creation and sharing of classroom activities. The app features a dynamic playlist system, 
                                  enabling teachers to organize and customize learning activities to meet their educational 
                                  objectives effortlessly.`,
                frontend_tech: ['React', 'JavaScript', 'HTML', 'CSS'],
                backend_tech: ['TypeScript', 'Node.js','Node Express', 'PostgreSQL'],
                tools_tech: ['PgAdmin', 'Postman','AWS', 'Git', 'GitHub'],
                deployment_tech: ['AWS', 'GitHub'],
                my_roles: `UI/UX design, Frontend Development, Backend Development, and Deployment.`,
                frontend_features: [
                    {
                        feature_id: 1,
                        feature_title: `User Registration & Authentication`,
                        feature_description: `Users can search for class activities using keywords, filter them based on various criteria (e.g., subject, grade level, duration), and sort results by popularity or relevance.`,
                        feature_importance: `This feature ensures that educators can quickly find activities that perfectly match their teaching needs, saving them time and effort.`,
                    },
                    {
                        feature_id: 2,
                        feature_title: `Google OAuth Integration`,
                        feature_description: `Users can log in using their Google account, streamlining the authentication process and reducing the need for remembering additional passwords.`,
                        feature_importance: `This feature enhances user experience by offering a quick and secure way to log in, leveraging the trust and convenience of Google’s OAuth system.`,
                    },
                    {
                        feature_id: 3,
                        feature_title: `Personalized Playlists`,
                        feature_description: `Users can create and manage playlists of their favorite activities, allowing them to organize lessons in a sequence that fits their teaching plan.`,
                        feature_importance: `This feature helps educators plan their lessons more effectively, ensuring a smooth flow of activities throughout the school day.`,
                    },
                    {
                        feature_id: 4,
                        feature_title: `User Engagement & Feedback`,
                        feature_description: ``,
                        feature_importance: ``,
                    },
                    {
                        feature_id: 5,
                        feature_title: `Advanced Search & Filtering`,
                        feature_description: `Users can search for class activities using keywords, filter them based on various criteria (e.g., subject, grade level, duration), and sort results by popularity or relevance.`,
                        feature_importance: `This feature ensures that educators can quickly find activities that perfectly match their teaching needs, saving them time and effort.`,
                    },
                    {
                        feature_id: 6,
                        feature_title: `Responsive Design`,
                        feature_description: `Implemented responsive design principles to ensure the application provides an optimal viewing experience across a wide range of devices, including desktops, tablets, and mobile phones.`,
                        feature_importance: `This feature guarantees that the application is accessible and user-friendly on any device, improving the overall user experience and reaching a broader audience.`,
                    }
                ],
                backend_features: [
                    {
                        feature_id: 1,
                        feature_title: `Data Validation`,
                        feature_description: `Implemented robust validation functions to ensure that all user data meets the required criteria before being processed or stored in the database.`,
                        feature_importance: `This feature prevents invalid or malicious data from entering the system, ensuring data integrity and security.`,
                    },
                    {
                        feature_id: 2,
                        feature_title: `Secure User Authentication`,
                        feature_description: `Used bcrypt to encrypt user passwords and JSON Web Tokens (JWT) for generating secure tokens to manage user sessions and authorize access to protected routes.`,
                        feature_importance: `This feature enhances security by ensuring that user passwords are stored securely and that only authorized users can access sensitive parts of the application.`,
                    },
                    {
                        feature_id: 3,
                        feature_title: `Google OAuth Integration`,
                        feature_description: `Implemented Google OAuth in the backend to facilitate secure third-party authentication, allowing users to log in using their Google accounts.`,
                        feature_importance: `This feature provides a seamless and secure login experience for users, leveraging Google’s authentication infrastructure while reducing the need to manage passwords directly.`,
                    },
                    {
                        feature_id: 4,
                        feature_title: `Asynchronous Handling & Error Management`,
                        feature_description: `Integrated asynchronous handlers and error management to handle operations smoothly and provide clear feedback when issues arise.`,
                        feature_importance: `This feature ensures that the backend can manage multiple operations simultaneously without crashing and that any errors are caught and handled gracefully.`,
                    },
                    {
                        feature_id: 5,
                        feature_title: `Optimized Database Queries`,
                        feature_description: `Minimized the number of query functions to reduce database load and improve application performance.`,
                        feature_importance: ` Efficient querying reduces server response time and improves the overall user experience by ensuring that data retrieval and storage are optimized.`,
                    },
                    {
                        feature_id: 6,
                        feature_title: `PostgreSQL Database Design`,
                        feature_description: `Designed and structured PostgreSQL tables to efficiently handle user data, activities, and relationships between them.`,
                        feature_importance: `A well-designed database schema ensures data consistency, easy maintenance, and scalability as the application grows.`,
                    }
                ],
                challenges: [
                    {
                        challenge_id: 1,
                        challenge_title: `OAuth Integration Challenge`,
                        first_stanza: `While integrating OAuth into my application, I initially relied on the passport npm package, with everything handled on the frontend. However, when transitioning to a more robust solution involving separate frontend and backend implementations, I faced challenges in understanding how to securely communicate between the frontend, backend, and Google without relying on pre-built packages.`,
                        second_stanza: `To overcome this, I conducted extensive research on how other developers approach OAuth integration. I took detailed handwritten notes to map out the OAuth flow, ensuring I understood each step of the process. Additionally, I consulted with senior engineers to gain insights and validate my approach. With this guidance, I manually implemented the code to handle token exchange, authorization, and secure communication between the frontend and backend.`,
                        third_stanza: `After receiving the token from Google on the backend, I implemented a check against my database to determine if the user had previously logged into the website. Then, I generated a JSON Web Token (JWT) and sent it to the frontend via a redirect URL with the token attached as a query parameter. Initially, I wanted to use cookies to send the JWT for added security but the different domains for the frontend and backend caused CORS issues that prevented this approach. In the future, once the frontend and backend are hosted on the same domain, I plan to use cookies to securely transmit the JWT, further enhancing the security of the authentication process.
`,
                        fourth_stanza: `This challenge not only deepened my understanding of OAuth but also improved my ability to research, collaborate, and implement secure authentication solutions. The implementation works well and is built to scale. I also have plans to make it even more secure by using cookies once the domain setup allows it.`
                    },
                    {
                        challenge_id: 2,
                        challenge_title: `Maintaining User Session Across Routes`,
                        first_stanza: `The website would revert to the pre-login state when a logged-in user refreshed the page or navigated to a different child route, disrupting the user experience.`,
                        second_stanza: `I initially attempted to solve this by creating a reusable component using React Router DOM and React Context to store user data across different routes. While this worked for accessing data, the refresh issue persisted. I then consulted other developers, researched online, and reviewed Udemy courses and open-source projects to understand React Router DOM better. Finally, I implemented a token check when rendering the home page's parent route, which resolved the problem.`,
                        third_stanza: `The solution effectively resolved the session persistence issue, allowing users to stay logged in even after refreshing the page or navigating to different routes. However, the frequent GET requests to the backend could be optimized for better performance. I plan to continue exploring more efficient approaches to further improve this solution.`
                    },
                    {
                        challenge_id: 3,
                        challenge_title: `Other Challenges`,
                        first_stanza: `In addition to these major challenges, I encountered and resolved numerous smaller issues, ranging from optimizing API responses to refining the user interface for a seamless experience. Each of these challenges required problem-solving and attention to detail, contributing to the overall success of the project.`
                    }
                ],
                frontend_deployment: `The frontend was hosted on GitHub Pages, providing a quick and cost-effective solution for static site hosting.`,
                backend_deployment: `The backend was deployed using AWS EC2 for hosting and RDS for managing the PostgreSQL database, ensuring scalability and reliability.`,
                code_samples: { 
                        frontend_url: `https://github.com/CocoTapi/full-stack-project-frontend`,
                        backend_url: `https://github.com/CocoTapi/full-stack-project-backend`
                    },
                outcomes_and_improvements: `Successfully integrated key features like advanced search, personalized playlists, and Google OAuth, establishing a solid foundation for a user-friendly platform. Looking ahead, improvements include optimizing the drag-and-drop functionality for mobile devices, enhancing load balancing techniques to handle larger datasets as the app scales, refining search and filtering accuracy, implementing more dynamic data loading methods, and adding multiple language options to broaden accessibility.`  
            }
        },
        {
            project_id: 2,
            project_title: 'Calorie Calc App',
            onGoing: true,
            slug: 'calorie-calc',
            project_url: `https://github.com/CocoTapi/Calorie-Calc-Frontend`,
            images: lessonLab_image_data,
            project_summary: `Lesson Lab App is a Web 2.0 application designed to empower educators 
                                          to manage high-quality class activities while reducing workload.`,
            tech_list: ['React', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Node.js', 'Node Express', 'PostgreSQL', 'PgAdmin', 'Postman', 'AWS', 'Git', 'GitHub', 'Figma'],
            tech_summary: `I focused on creating a seamless and responsive user experience. 
                                       On the frontend, I built a multi-page application using React Router DOM with login options, 
                                       including OAuth. The backend was engineered to handle data efficiently using REST APIs and 
                                       PostgreSQL, ensuring secure authorization. The entire application is deployed on AWS, 
                                       with the frontend hosted on GitHub.`,
            project_details: {
                project_description: ``,
                frontend_tech: ['Angular', 'TypeScript', 'HTML', 'SCSS'],
                backend_tech: [],
                tools_tech: ['Git', 'GitHub'],
                deployment_tech: [],
                my_roles: ``,
                frontend_features: [
                    {
                        feature_id: 1,
                        feature_title: ``,
                        feature_description: ``,
                        feature_importance: ``,
                    },
                   
                ],
                backend_features: [
                    {
                        feature_id: 1,
                        feature_title: ``,
                        feature_description: ``,
                        feature_importance: ``,
                    }
                ],
                challenges: [
                    {
                        challenge_id: 1,
                        challenge_title: ``,
                        first_stanza: ``,
                        second_stanza: ``,
                        fourth_stanza: ``
                    }
                ],
                frontend_deployment: ``,
                backend_deployment: ``,
                code_samples: { 
                        frontend_url: `https://github.com/CocoTapi/Calorie-Calc-Frontend`,
                        backend_url: ``
                    },
                outcomes_and_improvements: ``  
            }
        },
       
    ]
}