import { Course_List, ProfileData, ProjectsData } from "@/util/types";

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
            project_url: `https://cocotapi.github.io/lesson-lab-frontend/`,
            video: 'lessonLabDemo.webm',
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
                        title: `Responsive Design`,
                        paragraph_1: `The application adapts seamlessly to different screen sizes and devices, ensuring a consistent and user-friendly experience whether accessed from a desktop, tablet, or mobile phone.`,
                        paragraph_2: `Responsive design improves accessibility and usability by automatically adjusting layouts and components, making the platform visually appealing and functional for all users.`
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
                        id: 4,
                        title: `Asynchronous Handling & Error Management`,
                        paragraph_1: `Integrated asynchronous handlers and error management to handle operations smoothly and provide clear feedback when issues arise.`,
                        paragraph_2: `This feature ensures that the backend can manage multiple operations simultaneously without crashing and that any errors are caught and handled gracefully.`,
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
                        paragraph_1: `While integrating OAuth into my application, I initially relied on the passport npm package with everything handled on the frontend. However, as I moved toward a more robust solution with separate frontend and backend implementations, I encountered challenges understanding how to securely coordinate communication between the frontend, backend, and Google without relying on pre-built packages. To overcome this, I conducted extensive research on OAuth integration patterns, took detailed handwritten notes to map out the flow, and consulted with senior engineers to validate my approach. `,
                        paragraph_2: `I send a POST request to the backend to retrieve a Google authentication URL, then initiate the login process—either via a popup window (on desktop) or a full-page redirect (on mobile), depending on the device type.`,
                        paragraph_3: `After the user successfully logs in, the backend receives a token from Google and checks the database to determine whether the user has previously logged into the website. It then generates a JSON Web Token (JWT) and sends it to the frontend via a redirect URL, with the token attached as a query parameter.`,
                        paragraph_4: `The frontend’s userLoader function checks for the token in the URL parameters, stores it along with its expiration time in localStorage, and sends a postMessage containing the token.
                        This message triggers the handleGoogleAuthEvent(event) function in the main window, which stores the token and expiration again (in the main window’s context) and then closes the popup.`,   
                        paragraph_5: `This challenge not only deepened my understanding of OAuth but also improved my ability to research, collaborate, and implement secure authentication solutions. The implementation works well and is built to scale. I also have plans to make it even more secure by using cookies once the domain setup allows it.`,
                        img2: 'p2.png',
                        img3: 'p3.png',
                        img4: 'p4.png',
                    },
                    {
                        id: 2,
                        title: `Maintaining User Session Across Routes`,
                        paragraph_1: `Previously, the website would lose the user's session and revert to the pre-login state whenever a logged-in user refreshed the page or navigated to a different child route, which disrupted the user experience.`,
                        paragraph_2: `To address this, I first created React Context to store user data across routes. While this approach worked for accessing data within the app, it didn’t persist the session after a page refresh. I then consulted with other developers, explored online resources, and reviewed Udemy courses and open-source projects to deepen my understanding of React Router DOM. Ultimately, I implemented a token check at the parent level of the home route to validate and restore the user's session, which resolved the issue.`,
                        paragraph_3: `This solution successfully maintained session persistence across refreshes and route changes. However, it relies on frequent GET requests to the backend, which could be optimized for better performance. I'm continuing to explore more efficient strategies to further refine and improve this approach.`,
                        img2: 'c2.png',
                    },
                ],
                frontend_deployment: `The frontend was hosted on GitHub Pages, providing a quick and cost-effective solution for static site hosting.`,
                backend_deployment: `I previously deployed the backend using AWS EC2 for hosting and RDS for managing the PostgreSQL database, but I'm not currently maintaining the deployment due to updated Google OAuth changes and AWS cost considerations. I plan to redeploy once the new authentication flow is finalized.`,
                code_samples: {
                    frontend_url: `https://github.com/CocoTapi/lesson-lab-frontend/tree/main_no_backend`,
                    backend_url: `https://github.com/CocoTapi/full-stack-project-backend`
                },
                outcomes_and_improvements: `Successfully integrated core features such as advanced search, personalized playlists, and Google OAuth, creating a solid foundation for the platform. However, the current codebase includes some repetition, lacks proper documentation, and relies on hard-coded strings, which makes maintenance difficult. Test coverage is also missing. In future projects, I plan to improve code quality by writing cleaner, modular functions, introducing automated testing, and multi-language support.`
            }
        },
        {
            project_id: 2,
            project_title: 'Packing Lists',
            onGoing: false,
            slug: 'packing-lists',
            project_url: ``,
            video: 'task.webm',
            project_summary: `The Packing List is designed to simplify travel preparation by allowing users to create and manage packing lists for their trips.`,
            tech_list: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind', 'Redux Toolkit'],
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
                challenges: [
                    {
                        id: 1,
                        title: ``,
                        paragraph_1: ``,
                        paragraph_2: ``,
                        paragraph_4: ``
                    }
                ],
                code_samples: {
                    frontend_url: `https://github.com/CocoTapi/packing-list`,
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
            project_url: ``,
            video: 'catApp.webm',
            project_summary: `This ongoing project is a mobile app designed to help cat and dog owners calculate food calories and maintain their pet’s healthy weight. Many members of my cat community struggle to track their pets' intake—especially when mixing dry and wet food. This app aims to simplify that process and provide personalized feeding guidance.`,
            tech_list: ['Angular', 'TypeScript', 'HTML', 'Sass', 'Git', 'GitHub', 'Figma'],
            tech_summary: `I’m focused on writing clean, maintainable code with clear documentation to support collaboration with other developers. I'm also using Jasmine for unit testing to ensure the app is reliable and testable as it evolves.`,
            project_details: {
                project_description: `This project is currently in development and focuses on helping pet owners manage their pets’ weight more easily. I'm open to any advice or feature suggestions—feel free to open an issue on GitHub or share your thoughts!`,
                frontend_tech: ['Angular', 'TypeScript', 'HTML', 'Sass'],
                backend_tech: [],
                tools_tech: ['Git', 'GitHub', 'Jasmine', 'Cypress'],
                deployment_tech: [],
                my_roles: `UI/UX design, Frontend Development`,
                ui_img: 'catLow.png',
                ui_description: 'This is the wireframe of the app, showcasing the foundational layout and structure of each screen before visual styling was applied. It focuses on the core user journey, content placement, and navigation flow, allowing for early feedback and iteration.',
                frontend_features: [
                    {
                        id: 1,
                        title: `Sliding Panel for Editing Pet Profile`,
                        paragraph_1: `I implemented a reusable sliding panel that appears from the bottom when the user clicks the edit button. After updating the profile, the user can simply slide the panel down to close it and apply the changes.`,
                        paragraph_2: ``,
                    },
                    {
                        id: 2,
                        title: `Multi-Language Support`,
                        paragraph_1: `I integrated a multi-language service using @ngx-translate/core, allowing users to switch between English and Japanese. The app dynamically updates content based on the selected language for a more accessible user experience.`,
                        paragraph_2: `Support for Spanish and Chinese is planned for future updates to make the platform even more inclusive for a global audience.`,
                    }                      

                ],              
                frontend_deployment: ``,
                backend_deployment: ``,
                code_samples: {
                    frontend_url: `https://github.com/CocoTapi/Cat-Calorie-Calc-Frontend`,
                    backend_url: ``
                },
                outcomes_and_improvements: ``
            }
        },

    ]
}