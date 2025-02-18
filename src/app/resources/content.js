import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Muzaffar",
  lastName: "Shaikh",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  location: "Asia/Riyadh", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Arabic", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/muzaffarshaikh",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/muzaffarshaikh",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/mzfrshk",
  },
  {
    name: "Stack Overflow",
    icon: "stackoverflow",
    link: "https://stackoverflow.com/users/12059893/muzaffarshaikh",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:muzaffarshaikh.projects@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Backend Software Engineer</>,
  subline: (
    <>
      I'm Muzaffar, a backend engineer at <InlineCode>Salla</InlineCode>, where
      I develop scalable and resilient microservices. After hours, I watch One
      Piece.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Muzaffar is a software engineer with a passion for building scalable and
        high-performance applications using Node.js, TypeScript, and Cloud
        platforms like AWS and Cloudflare. With around four years of experience,
        he specializes in microservices architecture, serverless computing, and
        CI/CD pipelines, ensuring clean and efficient code.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Salla E-Commerce Platform",
        timeframe: "2024 - Present",
        role: "Senior Backend Engineer",
        achievements: [
          <>
            Developed scalable and resilient microservices, ensuring high
            availability and performance across applications.
          </>,
          <>
            Delivered error-free APIs for dashboards in a fast-paced
            environment, meeting tight deadlines and exceeding quality
            expectations.
          </>,
          <>
            Consistently implemented POCs with new technologies, including
            successful integration with Novu, improving notification management
            in real-time applications.
          </>,
          <>
            Refactored code according to industry best practices, applying TDD
            and writing unit tests to achieve 100% code coverage and enhanced
            code quality.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "Creative Capsule",
        timeframe: "2021 - 2024",
        role: "Software Developer",
        achievements: [
          <>
            Contributed across the entire SDLC in client projects, demonstrating
            flexibility between sprint-based and fast-paced environments.
          </>,
          <>
            Designed and developed scalable REST APIs in a TypeScript-based
            Node.js microservices architecture, with integration to AWS for
            cloud solutions.
          </>,
          <>
            Optimized microservices performance through caching, improved API
            response times, and implemented AWS SNS/SQS for process segregation,
            leading to streamlined system efficiency.
          </>,
          <>
            Maintained 30+ microservices and integrated with internal and
            third-party APIs to enhance functionality, while ensuring smooth
            deployments via Jenkins.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Goa University",
        description: <>Masters in Information Technology</>,
      },
      {
        name: "Goa University",
        description: <>Bachelors in Computer Science</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-15.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-16.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-17.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-18.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-19.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-20.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-21.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-22.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
