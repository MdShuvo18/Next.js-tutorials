import React from 'react';

const page = ({params}) => {
   const {title,description}=blogs.find(blog=>blog.slug===params.slug)
//    console.log(singleBlog);
    return (
        <div>
           <p>{title}</p>
           <p>{description}</p>
        </div>
    );
      
};
const blogs=[
    {
      "slug": "intro-to-javascript",
      "title": "Introduction to JavaScript",
      "description": "A beginner's guide to understanding JavaScript, the language of the web."
    },
    {
      "slug": "react-vs-vue-comparison",
      "title": "React vs Vue: A Comprehensive Comparison",
      "description": "Explore the differences between React and Vue to determine which framework suits your project best."
    },
    {
      "slug": "getting-started-with-nextjs",
      "title": "Getting Started with Next.js",
      "description": "Learn the basics of Next.js and how it enhances the development experience for React developers."
    },
    {
      "slug": "optimizing-performance-in-web-apps",
      "title": "Optimizing Performance in Web Applications",
      "description": "Essential tips and strategies for improving the performance of your web applications."
    },
    {
      "slug": "building-restful-apis",
      "title": "Building RESTful APIs with Node.js",
      "description": "Step-by-step guide on creating efficient and scalable REST APIs using Node.js and Express."
    },
    {
      "slug": "css-flexbox-guide",
      "title": "A Complete Guide to CSS Flexbox",
      "description": "Master the CSS Flexbox layout model to create responsive and flexible layouts with ease."
    },
    {
      "slug": "intro-to-graphql",
      "title": "Introduction to GraphQL",
      "description": "Discover GraphQL and how it simplifies data fetching with flexible and efficient queries."
    },
    {
      "slug": "understanding-async-await",
      "title": "Understanding Async/Await in JavaScript",
      "description": "Learn how async/await syntax makes handling asynchronous JavaScript code cleaner and more readable."
    },
    {
      "slug": "web-security-basics",
      "title": "Web Security Basics Every Developer Should Know",
      "description": "An overview of web security practices to protect applications from common vulnerabilities."
    }
  ]
  

export default page;