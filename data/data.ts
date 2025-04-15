import { Course_List, ProfileData, ProjectsData } from "@/util/types";
import { lessonLab_image_data } from "./image-data";

export const social = {
    gitHub: "https://github.com/CocoTapi",
    linkedIn: "https://www.linkedin.com/in/shiori-yoshida/",
    email: "shioriavino@gmail.com"
}

export const course_list: Course_List[] = [
    {
        media_id: 0,
        name: 'Web Developer Bootcamp 2023 | Udemy',
        link: "https://github.com/CocoTapi/web_developer_bootcamp_2023/tree/main/Sections"
    },
    {
        media_id: 1,
        name: 'React - The Complete Guide 2023 (incl. Next.js, Redux) | Udemy',
        link: "https://github.com/CocoTapi/REACT_2023"
    },
    {
        media_id: 2,
        name: 'Modern React with Redux 2023 | Udemy',
        link: "https://github.com/CocoTapi/modern_react_2023"
    },
    {
        media_id: 3,
        name: 'JavaScript Algorithms and Data Structures Masterclass | Udemy',
        link: "https://github.com/CocoTapi/algorithms_and_data_structure"
    },
    {
        media_id: 4,
        name: 'Master the Coding Interview: Data Structures + Algorithms | Udemy',
        link: "https://github.com/CocoTapi/coding_interview_bootcamp"
    },
    {
        media_id: 5,
        name: 'The Advanced CSS and Sass: Flexbox, Grid, Animations and More | Udemy',
        link: "https://github.com/CocoTapi/advanced-css-and-sass"
    },
    {
        media_id: 6,
        name: 'The Complete SQL Bootcamp: Go from Zero to Hero | Udemy',
        link: ""
    },
    {
        media_id: 7,
        name: 'Angular - The Complete Guide (2025 Edition) | Udemy',
        link: "https://www.udemy.com/course/the-complete-guide-to-angular-2/"
    },
    {
        media_id: 8,
        name: 'A complete guide to Angular 19 Unit Testing and End to End (E2E) Testing, including Testing best practices and CI | Udemy (Ongoing)',
        link: "https://www.udemy.com/course/angular-testing-course"
    },
]

export const profile_data: ProfileData = {
    my_email: 'shioriavino@gmail.com',
    top_page_description: 
        `I combine my passion for education with problem-solving and 
        creative power of coding, striving to create impactful and innovative solutions.`,
    short_self_introduction: 
        `I began my career as an ESL teacher, a role I cherished deeply. 
        When faced with an unexpected career pause, I was inspired by a friend who quickly launched a project 
        using his software engineering skills. Seizing the opportunity, I explored software engineering and 
        quickly found joy in building programs, solving complex puzzles, and crafting designs that reflected 
        my vision. Though the journey has been challenging, with the support of engineer friends and 
        incredible online resources, I’ve found fulfillment in overcoming obstacles.`,
    long_self_introduction1: 
        `I began my career as an ESL teacher, a role I cherished deeply, but I always had a curiosity 
        to explore something new. When the time came to change my visa, I faced the reality of being unable to 
        work for nearly two years. Rather than see this as a setback, I viewed it as an opportunity 
        to grow my skills and complete a project I had been planning during my master's degree.`,
    long_self_introduction2: 
        `I refined my project, diving into data and technologies, and sought advice from software engineers. 
        While they encouraged me to learn coding, I initially resisted. However, that all changed 
        when my software engineer friend successfully launched a project we had been discussing, 
        quickly turning it into a business. This moment opened my eyes to the incredible power and 
        potential of software engineering.`,
    long_self_introduction3: 
        `Inspired, I began learning to code and quickly found joy in building programs, 
        solving complex puzzles, and crafting designs that reflected my vision. The journey has been far 
        from easy—every new challenge brings unknown errors and difficulties. But with the support of engineer 
        friends and incredible resources available online, I’ve found fulfillment in overcoming them.`,
    long_self_introduction4: 
        `Now, as a software engineer, I combine my passion for education with the problem-solving 
        and creative power of coding, continuously striving to create impactful and innovative solutions.`,
    hobbies: 
        `I love spending time with my cat (who is also my coding partner), cooking, baking, and gardening. 
        Recently, I like playing pickle ball too!`,
    social_media: social,
    skills: [
        'JavaScript', 'TypeScript', 'React', 'Angular', 'HTML', 'CSS', 'Sass', 
        'Node.js', 'Node Express', 'PostgreSQL', 'MongoDB', 'PgAdmin', 'Postman', 
        'AWS', 'Git', 'GitHub', 
        'Figma', 
        'English', 'Japanese'
    ],
    professional_development: course_list,
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
            project_summary: `Lesson Lab is a Web 2.0 application designed to empower educators 
                                          to manage high-quality class activities while reducing workload.`,
            tech_list: ['React', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Node.js', 'Node Express', 'PostgreSQL', 'PgAdmin', 'Postman', 'AWS', 'Git', 'GitHub', 'Figma'],
            tech_summary: `I focused on creating a seamless and responsive user experience. 
                                       On the frontend, I built a multi-page application using React Router DOM with login options, 
                                       including OAuth. The backend was engineered to handle data efficiently using REST APIs and 
                                       PostgreSQL, ensuring secure authorization. The entire application is deployed on AWS, 
                                       with the frontend hosted on GitHub.`,
            project_details: {
                project_description: `This is a Web 2.0 platform crafted to empower educators by streamlining 
                                  the creation and sharing of classroom activities. The app features a dynamic playlist system, 
                                  enabling teachers to organize and customize learning activities to meet their educational 
                                  objectives effortlessly.`,
                frontend_tech: ['React', 'JavaScript', 'HTML', 'CSS'],
                backend_tech: ['TypeScript', 'Node.js', 'Node Express', 'PostgreSQL'],
                tools_tech: ['PgAdmin', 'Postman', 'AWS', 'Git', 'GitHub'],
                deployment_tech: ['AWS', 'GitHub'],
                my_roles: `UI/UX design, Frontend Development, Backend Development, and Deployment.`,
                ui_img: 'lessonLabUI.png',
                ui_description: 'First, I designed low-fi version of user interface and once I decided brief ideas of entire app, I add colors and images to match the app image using Figma. These are the main part of the app design.',
                frontend_features: [
                    {
                        id: 1,
                        title: `Filter & Search functions`,
                        paragraph_1: `Users can search for class activities using keywords, filter them based on various criteria (e.g., subject, grade level, duration), and sort results by popularity or relevance.`,
                        paragraph_2: `This feature ensures that educators can quickly find activities that perfectly match their teaching needs, saving them time and effort.`,
                    },
                    {
                        id: 2,
                        title: `Google OAuth Integration`,
                        paragraph_1: `Users can log in using their Google account, streamlining the authentication process and reducing the need for remembering additional passwords.`,
                        paragraph_2: `This feature enhances user experience by offering a quick and secure way to log in, leveraging the trust and convenience of Google’s OAuth system.`,
                    },

                ],
                backend_features: [
                    {
                        id: 1,
                        title: `Data Validation`,
                        paragraph_1: `Implemented robust validation functions to ensure that all user data meets the required criteria before being processed or stored in the database.`,
                        paragraph_2: `This feature prevents invalid or malicious data from entering the system, ensuring data integrity and security.`,
                    },
                    {
                        id: 2,
                        title: `Secure User Authentication`,
                        paragraph_1: `Used bcrypt to encrypt user passwords and JSON Web Tokens (JWT) for generating secure tokens to manage user sessions and authorize access to protected routes.`,
                        paragraph_2: `This feature enhances security by ensuring that user passwords are stored securely and that only authorized users can access sensitive parts of the application.`,
                    },
                    {
                        id: 3,
                        title: `Google OAuth Integration`,
                        paragraph_1: `Implemented Google OAuth in the backend to facilitate secure third-party authentication, allowing users to log in using their Google accounts.`,
                        paragraph_2: `This feature provides a seamless and secure login experience for users, leveraging Google’s authentication infrastructure while reducing the need to manage passwords directly.`,
                    },
                    {
                        id: 4,
                        title: `Asynchronous Handling & Error Management`,
                        paragraph_1: `Integrated asynchronous handlers and error management to handle operations smoothly and provide clear feedback when issues arise.`,
                        paragraph_2: `This feature ensures that the backend can manage multiple operations simultaneously without crashing and that any errors are caught and handled gracefully.`,
                    },
                    {
                        id: 5,
                        title: `Optimized Database Queries`,
                        paragraph_1: `Minimized the number of query functions to reduce database load and improve application performance.`,
                        paragraph_2: ` Efficient querying reduces server response time and improves the overall user experience by ensuring that data retrieval and storage are optimized.`,
                    },
                    {
                        id: 6,
                        title: `PostgreSQL Database Design`,
                        paragraph_1: `Designed and structured PostgreSQL tables to efficiently handle user data, activities, and relationships between them.`,
                        paragraph_2: `A well-designed database schema ensures data consistency, easy maintenance, and scalability as the application grows.`,
                    }
                ],
                challenges: [
                    {
                        id: 1,
                        title: `OAuth Integration Challenge`,
                        paragraph_1: `While integrating OAuth into my application, I initially relied on the passport npm package, with everything handled on the frontend. However, when transitioning to a more robust solution involving separate frontend and backend implementations, I faced challenges in understanding how to securely communicate between the frontend, backend, and Google without relying on pre-built packages.`,
                        paragraph_2: `To overcome this, I conducted extensive research on how other developers approach OAuth integration. I took detailed handwritten notes to map out the OAuth flow, ensuring I understood each step of the process. Additionally, I consulted with senior engineers to gain insights and validate my approach. With this guidance, I manually implemented the code to handle token exchange, authorization, and secure communication between the frontend and backend.`,
                        paragraph_3: `After receiving the token from Google on the backend, I implemented a check against my database to determine if the user had previously logged into the website. Then, I generated a JSON Web Token (JWT) and sent it to the frontend via a redirect URL with the token attached as a query parameter. Initially, I wanted to use cookies to send the JWT for added security but the different domains for the frontend and backend caused CORS issues that prevented this approach. In the future, once the frontend and backend are hosted on the same domain, I plan to use cookies to securely transmit the JWT, further enhancing the security of the authentication process.
                        `,
                        paragraph_4: `This challenge not only deepened my understanding of OAuth but also improved my ability to research, collaborate, and implement secure authentication solutions. The implementation works well and is built to scale. I also have plans to make it even more secure by using cookies once the domain setup allows it.`
                    },
                    {
                        id: 2,
                        title: `Maintaining User Session Across Routes`,
                        paragraph_1: `The website would revert to the pre-login state when a logged-in user refreshed the page or navigated to a different child route, disrupting the user experience.`,
                        paragraph_2: `I initially attempted to solve this by creating a reusable component using React Router DOM and React Context to store user data across different routes. While this worked for accessing data, the refresh issue persisted. I then consulted other developers, researched online, and reviewed Udemy courses and open-source projects to understand React Router DOM better. Finally, I implemented a token check when rendering the home page's parent route, which resolved the problem.`,
                        paragraph_3: `The solution effectively resolved the session persistence issue, allowing users to stay logged in even after refreshing the page or navigating to different routes. However, the frequent GET requests to the backend could be optimized for better performance. I plan to continue exploring more efficient approaches to further improve this solution.`
                    },
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
            project_title: 'Packing Lists',
            onGoing: false,
            slug: 'packing-lists',
            project_url: ``,
            images: lessonLab_image_data,
            project_summary: `The Packing List is designed to simplify travel preparation by allowing users to create and manage packing lists for their trips.`,
            tech_list: ['Angular', 'TypeScript', 'HTML', 'SCSS', 'Git', 'GitHub', 'Figma'],
            tech_summary: `I used Redux Toolkit's createApi to manage API endpoints and CRUD operations for trips, luggage, and items. 
                            By implementing tags with type and ID, I prevented unnecessary refetching, 
                             while integrating middleware to handle API calls efficiently.`,
            project_details: {
                project_description: `The Packing List is a platform that helps travelers organize their packing needs efficiently. 
                                        Users can create a new trip, add different pieces of luggage under each trip, and list items within each luggage. 
                                        The app allows for easy tracking and updating of items, making it an essential tool for organized travel planning.`,
                frontend_tech: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind', 'Redux Toolkit'],
                backend_tech: [],
                tools_tech: ['Git', 'GitHub'],
                deployment_tech: [],
                my_roles: `UI/UX design, Frontend Development`,
                ui_img: '',
                ui_description: '',
                frontend_features: [
                    {
                        id: 1,
                        title: `Trip Management`,
                        paragraph_1: `Users can create, view, and manage multiple trips, each with its unique packing list.`,
                        paragraph_2: `This feature allows users to organize their travel packing efficiently, ensuring that no trip detail is overlooked.`,
                    },
                    {
                        id: 2,
                        title: "Efficient Data Invalidation",
                        paragraph_1: "To optimize data fetching and prevent unnecessary API calls, I implemented tag-based data invalidation using Redux Toolkit's createApi. By using type and id tags, the app invalidates and re-fetches specific entities efficiently.",
                        paragraph_2: "This feature ensures that only the relevant data that has changed (e.g., a deleted trip) is re-fetched, avoiding unnecessary network requests for data that remains unchanged."
                    }

                ],
                backend_features: [
                    {
                        id: 1,
                        title: ``,
                        paragraph_1: ``,
                        paragraph_2: ``,
                    }
                ],
                challenges: [
                    {
                        id: 1,
                        title: ``,
                        paragraph_1: ``,
                        paragraph_2: ``,
                        paragraph_4: ``
                    }
                ],
                frontend_deployment: ``,
                backend_deployment: ``,
                code_samples: {
                    frontend_url: `https://github.com/CocoTapi/packing-list`,
                    backend_url: ``
                },
                outcomes_and_improvements: `This project strengthened my understanding of React fundamentals, including building reusable components, managing forms, handling reducers, and integrating API queries using Redux Toolkit. 
                                            It also enhanced my knowledge of CRUD operations.
                                            Adding drag-and-drop item organization, reminders for essential items, and the ability to share packing lists would improve the user experience.`
            }
        },
        {
            project_id: 3,
            project_title: 'Calorie Calc App',
            onGoing: true,
            slug: 'calorie-calc',
            project_url: `https://github.com/CocoTapi/Calorie-Calc-Frontend`,
            images: lessonLab_image_data,
            project_summary: `This is an ongoing project aimed at creating a mobile app to calculate cat food calories 
                                and help maintain your cat's weight.`,
            tech_list: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind', 'Redux Toolkit', 'Git', 'GitHub'],
            tech_summary: ``,
            project_details: {
                project_description: ``,
                frontend_tech: ['Angular', 'TypeScript', 'HTML', 'SCSS'],
                backend_tech: [],
                tools_tech: ['Git', 'GitHub'],
                deployment_tech: [],
                my_roles: `UI/UX design, Frontend Development`,
                ui_img: '',
                ui_description: '',
                frontend_features: [
                    {
                        id: 1,
                        title: ``,
                        paragraph_1: ``,
                        paragraph_2: ``,
                    },

                ],
                backend_features: [
                    {
                        id: 1,
                        title: ``,
                        paragraph_1: ``,
                        paragraph_2: ``,
                    }
                ],
                challenges: [
                    {
                        id: 1,
                        title: ``,
                        paragraph_1: ``,
                        paragraph_2: ``,
                        paragraph_4: ``
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