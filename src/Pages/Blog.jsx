import { Helmet } from "react-helmet";

const Blog = () => {
    return (
        <div className="my-10 max-w-7xl mx-auto">
            <Helmet>
                <title>Blog</title>
            </Helmet>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/K5KX8wD/blog-1.jpg" className="h-72" />
                    <div>
                        <h1 className="text-3xl font-bold">What is One way data binding?</h1>
                        <p className="pt-5">Certainly! One-way data binding means that data moves in one direction, like a single road. It goes from a data source (like a database) to a target (like a part of a web page). Changes in the source update the target, but changes in the target don't affect the source.</p>
                        <p className="py-2">Imagine it like a sign on the highway: the sign shows information (the data) that comes from a central place (the source), but you can't change the sign to update the central information. It's a one-way street for data.</p>
                        <p>Suppose, you have a weather app on your phone. The app shows you the current temperature for your location.
                            One-Way Data Binding: In this case, the app gets its data (the temperature) from a weather server. The server sends the temperature to your app, and your app displays it. If the server updates the temperature, your app will show the new temperature, but you can't change the temperature in your app to update the server.
                            So, it's a one-way street for data: Server - App. The app only receives data and shows it to you.</p>
                    </div>
                </div>
            </div>

            <div className="hero bg-white-200 my-10">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/Bc7pJpY/blog-2.jpg" className="h-72" />
                    <div>
                        <h1 className="text-3xl font-bold">What is NPM in node.js?</h1>
                        <p className="pt-5">NPM, which stands for "Node Package Manager," is a tool that helps you easily manage and install packages (libraries or modules) for your Node.js projects. Think of it like a magic box full of tools that you can use in your Node.js programs. For example, let's say you want to create a web server in Node.js. Instead of writing all the code from scratch, you can use an existing package to make your life easier.</p>
                        <p className="py-2">NPM also helps you manage project dependencies, so you can keep track of which packages your project relies on and share your project with others more easily. It's like having a super handy tool to find, install, and organize code you need for your Node.js projects.</p>
                        <p>NPM is a vital tool for Node.js developers. It simplifies package management, version control, and project organization, making it easier to build and share Node.js applications and libraries.</p>
                    </div>
                </div>
            </div>


            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://i.ibb.co/Y0K5J6T/blog-3.jpg" className="h-72" />
                    <div>
                        <h1 className="text-3xl font-bold">Different between Mongodb database vs mySQL database.</h1>
                        <p className="pt-5">MongoDB and MySQL are both popular database management systems, but they have key differences. MongoDB is a NoSQL database, which means it stores data in a flexible, schema-less format, often using JSON-like documents. This makes it ideal for handling unstructured or semi-structured data and scaling horizontally across multiple servers. It's well-suited for applications that need to evolve rapidly and handle large amounts of data, such as social media platforms and big data analytics.</p>
                        <p className="py-2">On the other hand, MySQL is a relational database management system (RDBMS) that organizes data in structured tables with predefined schemas. It's ideal for applications with well-defined data structures and relationships, like e-commerce platforms or financial systems. MySQL offers strong ACID compliance for data integrity, making it a good choice for applications that require strict transaction handling and data consistency. Your choice between MongoDB and MySQL depends on your specific project requirements and data model.</p>
                       </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;