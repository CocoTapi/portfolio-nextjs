import { Course_List, ProfileData, ProjectsData } from "@/util/types";

export const social = {
    gitHub: "https://github.com/CocoTapi",
    linkedIn: "https://www.linkedin.com/in/shiori-yoshida/",
    email: "shioriavino@gmail.com"
}

export const course_list: Course_List[] = [
    {
        media_id: 3,
        name: 'React - The Complete Guide 2023 (incl. Next.js, Redux) | Udemy',
        link: "https://github.com/CocoTapi/REACT_2023"
    },
    {
        media_id: 2,
        name: 'Modern React with Redux 2023 | Udemy',
        link: "https://github.com/CocoTapi/modern_react_2023"
    },
    {
        media_id: 4,
        name: 'JavaScript Algorithms and Data Structures Masterclass | Udemy',
        link: "https://github.com/CocoTapi/algorithms_and_data_structure"
    },
    {
        media_id: 7,
        name: 'The Advanced CSS and Sass: Flexbox, Grid, Animations and More | Udemy',
        link: "https://github.com/CocoTapi/advanced-css-and-sass"
    },
    {
        media_id: 6,
        name: 'The Complete SQL: Go from Zero to Hero | Udemy',
        link: "https://www.udemy.com/course/the-complete-sql-bootcamp/"
    },
    {
        media_id: 9,
        name: 'Angular - The Complete Guide (2025 Edition) | Udemy',
        link: "https://www.udemy.com/course/the-complete-guide-to-angular-2/"
    },
    {
        media_id: 10,
        name: 'A complete guide to Angular 19 Unit Testing and End to End (E2E) Testing, including Testing best practices and CI | Udemy',
        link: "https://www.udemy.com/course/angular-testing-course"
    }
]

export const profile_data: ProfileData = {
    my_email: 'shioriavino@gmail.com',
    top_page_description: 
        `I combine my passion for education with communication and 
        innovative power of coding, striving to create reliable solutions.`,
    short_self_introduction: 
        `I began my career as an ESL teacher, a role I deeply cherished. When my visa status paused my career, a friend launched an educational project we had been discussing — using his software engineering skills. Inspired, I dove into coding and quickly found joy in solving complex puzzles, building creative solutions, and crafting designs that reflected my vision. Though the journey has been challenging, with the support of engineer friends and incredible online resources, I’ve found real fulfillment in overcoming obstacles.`,
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
        Recently, I like playing pickleball too!`,
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
            slug: 'lessonLab',
            project_url: `https://cocotapi.github.io/lesson-lab-frontend/`,
            video: 'lessonLabDemo.webm',
            topImg: '',
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
                ui_description: 'First, I designed low-fi version of user interface. Once I decided brief ideas of entire app, I added colors and images to match the app theme using Figma. These are the main part of the app design.',
                frontend_features: [
                    {
                        id: 1,
                        title: `Filter & Search functions`,
                        paragraphs: [
                            {
                                id: 'Filter1',
                                text: `Users can search for class activities using keywords, filter them based on various criteria (e.g., subject, grade level, duration), and sort results by popularity or relevance.`,
                                img: ''
                            },
                            {
                                id: 'Filter2',
                                text: `This feature ensures that educators can quickly find activities that perfectly match their teaching needs, saving them time and effort.`,
                                img: ''
                            },
                        ]
                },
                    {
                        id: 2,
                        title: `Responsive Design`,
                        paragraphs: [
                            {
                                id: 'Responsive1',
                                text: `The application adapts seamlessly to different screen sizes and devices, ensuring a consistent and user-friendly experience whether accessed from a desktop, tablet, or mobile phone.`,
                                img: ''
                            },
                            {
                                id: 'Responsive2',
                                text: `Responsive design improves accessibility and usability by automatically adjusting layouts and components, making the platform visually appealing and functional for all users.`,
                                img: ''
                            },
                        ]
                    },
                    

                ],
                backend_features: [
                    {
                        id: 1,
                        title: `Data Validation`,
                        paragraphs: [
                            {
                                id: 'Data1',
                                text: `Implemented robust validation functions to ensure that all user data meets the required criteria before being processed or stored in the database.`,
                                img: ''
                            },
                            {
                                id: 'Data2',
                                text: `This feature prevents invalid or malicious data from entering the system, ensuring data integrity and security.`,
                                img: ''
                            },
                        ]
                    },
                    {
                        id: 2,
                        title: `Secure User Authentication`,
                        paragraphs: [       
                            {
                                id: 'Auth1',
                                text: `Used bcrypt to encrypt user passwords and JSON Web Tokens (JWT) for generating secure tokens to manage user sessions and authorize access to protected routes.`,
                                img: ''
                            },
                            {
                                id: 'Auth2',
                                text: `This feature enhances security by ensuring that user passwords are stored securely and that only authorized users can access sensitive parts of the application.`,
                                img: ''
                            },
                        ]
                    }, 
                    {
                        id: 4,
                        title: `Asynchronous Handling & Error Management`,
                        paragraphs: [
                            {
                                id: 'Async1',
                                text: `Integrated asynchronous handlers and error management to handle operations smoothly and provide clear feedback when issues arise.`,
                                img: ''
                            }, 
                            {
                                id: 'Async2',
                                text: `This feature ensures that the backend can manage multiple operations simultaneously without crashing and that any errors are caught and handled gracefully.`,
                                img: ''
                            }, 
                        ]
                    },
                    {
                        id: 6,
                        title: `PostgreSQL Database Design`,
                        paragraphs: [
                            {
                                id: 'SQL1',
                                text:  `Designed and structured PostgreSQL tables to efficiently handle user data, activities, and relationships between them.`,
                                img: ''
                            }, 
                            {
                                id: 'SQL2',
                                text:   `A well-designed database schema ensures data consistency, easy maintenance, and scalability as the application grows.`,
                                img: ''
                            }, 
                        ]
                    }
                ],
                challenges: [       
                    {
                        id: 1,
                        title: `OAuth Integration Challenge`,
                        paragraphs: [
                            {
                                id: 'OAuth1',
                                text: `While integrating OAuth into my application, I initially relied on the passport npm package with everything handled on the frontend. However, as I moved toward a more robust solution with separate frontend and backend implementations, I encountered challenges understanding how to securely coordinate communication between the frontend, backend, and Google without relying on pre-built packages. To overcome this, I conducted extensive research on OAuth integration patterns, took detailed handwritten notes to map out the flow, and consulted with senior engineers to validate my approach. `,
                                img: ''
                            },
                            {
                                id: 'OAuth2',
                                text: `I send a POST request to the backend to retrieve a Google authentication URL, then initiate the login process—either via a popup window (on desktop) or a full-page redirect (on mobile), depending on the device type.`,
                                img: 'p2.png'
                            },
                            {
                                id: 'OAuth3',
                                text: `
                                    After the user successfully logs in, the backend receives a token from Google and checks the database to determine whether the user has previously logged into the website. It then generates a JSON Web Token (JWT) and sends it to the frontend via a redirect URL, with the token attached as a query parameter.
                                    This is a temporary workaround, as GitHub Pages does not support setting custom headers (e.g. Set-Cookie), sending credentials with CORS, or controlling headers via server configuration. I recognize it's less secure and plan to switch to cookie-based authentication.
                                `,
                                img: 'p3.png',
                            },
                            {
                                id: 'OAuth4',
                                text: `
                                    The frontend’s userLoader function checks for the token in the URL parameters, stores it along with its expiration time in localStorage, and sends a postMessage containing the token.
                                    This message triggers the handleGoogleAuthEvent(event) function in the main window, which stores the token and expiration again (in the main window’s context) and then closes the popup.
                                `,   
                                img: 'p4.png'
                            },
                             {
                                id: 'OAuth5',
                                text: `This challenge not only deepened my understanding of OAuth but also improved my ability to research, collaborate, and implement secure authentication solutions. The implementation works well and is built to scale. I also have plans to make it even more secure by using cookies once the domain setup allows it.`,
                                img: ''
                            },
                        ]
                    },
                    {
                        id: 2,
                        title: `Maintaining User Session Across Routes`,
                        paragraphs: [
                            {
                                id: 'Routes1',
                                text: `Previously, the website would lose the user's session and revert to the pre-login state whenever a logged-in user refreshed the page or navigated to a different child route, which disrupted the user experience.`,
                                img: ''
                            },
                            {
                                id: 'Routes2',
                                text: `To address this, I first created React Context to store user data across routes. While this approach worked for accessing data within the app, it didn’t persist the session after a page refresh. I then consulted with other developers, explored online resources, and reviewed Udemy courses and open-source projects to deepen my understanding of React Router DOM. Ultimately, I implemented a token check at the parent level of the home route to validate and restore the user's session, which resolved the issue.`,
                                img: 'c2.png'
                            },
                            {
                                id: 'Routes3',
                                text: `This solution successfully maintained session persistence across refreshes and route changes. However, it relies on frequent GET requests to the backend, which could be optimized for better performance. I'm continuing to explore more efficient strategies to further refine and improve this approach.`,
                                img: '',
                            },
                        ]
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
            project_title: 'Calorie Calc App',
            onGoing: true,
            slug: 'calorie-calc',
            project_url: ``,
            video: 'catApp.webm',
            topImg: '',
            project_summary: `This ongoing project is a mobile app designed to help cat and dog owners calculate food calories and maintain their pet’s healthy weight. Many members of my cat community struggle to track their pets' intake—especially when mixing dry and wet food. This app aims to simplify that process and provide personalized feeding guidance.`,
            tech_list: ['Angular', 'TypeScript', 'HTML', 'Sass', 'Git', 'GitHub', 'Figma'],
            tech_summary: `I’m focused on writing clean, maintainable code with clear documentation to support collaboration with other developers. I'm also using Jasmine for unit testing to ensure the app is reliable and testable as it evolves.`,
            project_details: {
                project_description: `This project is currently in development and focuses on helping pet owners manage their pets’ weight more easily. I'm open to any advice or feature suggestions—feel free to open an issue on GitHub or share your thoughts!`,
                frontend_tech: ['Angular', 'TypeScript', 'HTML', 'Sass'],
                backend_tech: [],
                tools_tech: ['Git', 'GitHub', 'Jasmine', 'Cypress', 'Figma'],
                deployment_tech: [],
                my_roles: `UI/UX design, Frontend Development`,
                ui_img: 'catLow.png',
                ui_description: 'I created the initial wireframe in Figma to establish the core layout and user flow for each screen. Visual styling, including colors and final design details, will be added in the next phase, as the design is still under active discussion.',
                frontend_features: [
                    {
                        id: 1,
                        title: `Sliding Panel for Editing Pet Profile`,
                        paragraphs: [
                            {
                                id: 'Panel1',
                                text: `I implemented a reusable sliding panel that appears from the bottom when the user clicks the edit button. After updating the profile, the user can simply slide the panel down to close it and apply the changes.`,
                                img: ""
                            }
                        ]
                        // paragraph_1: `I implemented a reusable sliding panel that appears from the bottom when the user clicks the edit button. After updating the profile, the user can simply slide the panel down to close it and apply the changes.`,
                        // paragraph_2: ``,
                    },
                    {
                        id: 2,
                        title: `Multi-Language Support`,
                        paragraphs: [
                            {
                                id: 'Language1',
                                text:  `I integrated a multi-language service using @ngx-translate/core, allowing users to switch between English and Japanese. The app dynamically updates content based on the selected language for a more accessible user experience.`,
                                img: ""
                            },
                            {
                                id: 'Language2',
                                text:   `Support for Spanish and Chinese is planned for future updates to make the platform even more inclusive for a global audience.`,
                                img: ""
                            },
                        ]
                        // paragraph_1: `I integrated a multi-language service using @ngx-translate/core, allowing users to switch between English and Japanese. The app dynamically updates content based on the selected language for a more accessible user experience.`,
                        // paragraph_2: `Support for Spanish and Chinese is planned for future updates to make the platform even more inclusive for a global audience.`,
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
        {
            project_id: 3,
            project_title: 'My Portfolio Website',
            onGoing: false,
            slug: 'portfolio-website',
            project_url: ``,
            video: '',
            topImg: 'portfolio.png',
            project_summary: `I designed and built this personal website from scratch using React, TypeScript, and Next.js. The goal was to create a responsive, fast, and accessible platform to showcase my projects and skills.`,
            tech_list: ['React', 'TypeScript', 'Next.js', 'HTML', 'CSS', 'Git', 'GitHub', 'Figma'],
            tech_summary: ``,
            project_details: {
                project_description: ``,
                frontend_tech: ['React', 'TypeScript', 'Next.js', 'HTML', 'CSS'],
                backend_tech: [],
                tools_tech: ['Git', 'GitHub','Figma'],
                deployment_tech: ['Vercel'],
                my_roles: `UI/UX design, Frontend Development`,
                frontend_features: [
                    {
                        id: 1,
                        title: `Reusable components`,
                        paragraphs: [
                             {
                                id: 'reuse1',
                                text:   `I built a flexible and reusable component system to ensure consistency across the app. Elements like videos, buttons, and images were abstracted into modular components, which made the codebase cleaner, easier to maintain, and more scalable as the project evolved.`,
                                img: ""
                            },
                        ]
                        // paragraph_1: `I built a flexible and reusable component system to ensure consistency across the app. Elements like videos, buttons, and images were abstracted into modular components, which made the codebase cleaner, easier to maintain, and more scalable as the project evolved.`,
                        // paragraph_2: ``,
                    }, 
                    {
                        id: 1,
                        title: `Responsive design for all size screen`,
                        paragraphs: [
                            {
                                id: 'size1',
                                text:   `I implemented responsive design techniques to ensure the site displays cleanly across different screen sizes. Using fluid layouts, relative units, and media queries, I adjusted spacing, typography, and images to provide a consistent experience on laptops, tablets, and smaller devices.`,
                                img: ""
                            },
                        ]
                        // paragraph_1: `I implemented responsive design techniques to ensure the site displays cleanly across different screen sizes. Using fluid layouts, relative units, and media queries, I adjusted spacing, typography, and images to provide a consistent experience on laptops, tablets, and smaller devices.`,
                        // paragraph_2: ``,
                    },                    
                ],              
                code_samples: {
                    frontend_url: `https://github.com/CocoTapi/portfolio-nextjs`,
                    backend_url: ``
                },
                outcomes_and_improvements: ``
            }
        },

    ]
}