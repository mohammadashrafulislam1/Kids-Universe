const Blogs = () => {
    return (
        <div>
    <div className="block lg:w-1/2 mx-6 lg:mx-auto my-10 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">An access token is an identification that represents user authorization in a web application. It's used to access protected data. A refresh token is an identification used to obtain a new access token when the current one expires. Access tokens are typically stored in browser cookies or local storage on the client-side. Refresh tokens should be securely stored, preferably on a server-side session store or database, to prevent unauthorized access.</p>
      </div> 

      <div className="block lg:w-1/2 mx-6 lg:mx-auto my-10 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Compare SQL and NoSQL databases?</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">SQL databases are structured. They ensure data integrity and support complex queries using SQL. NoSQL databases, on the other hand, nonstructured that offer flexibility in data modeling and horizontal scalability. </p>
      </div>

      <div className="block lg:w-1/2 mx-6 lg:mx-auto my-10 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">What is express js? What is Nest JS?</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">Express.js is a lightweight web application framework for Node.js that simplifies the process of building web applications and APIs.
        NestJS is a dynamic Node.js framework that builds on top of Express.js and offers additional features like dependency injection and modularity, making it suitable for building scalable server-side applications. Both frameworks are popular for backend development.</p>
      </div> 

      <div className="block lg:w-1/2 mx-6 lg:mx-auto my-10 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">What is MongoDB aggregate and how does it work?</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400"> The MongoDB aggregate method is used to perform advanced operations on collections of documents. It allows you to group, filter, sort, and transform data in a flexible way. By chaining multiple stages together, you can create powerful queries to analyze and extract meaningful information from your data.</p>
      </div> 
        </div>
    );
};

export default Blogs;