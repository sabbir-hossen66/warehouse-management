import React from 'react';
import '../Blog/Blog.css'

const Blog = () => {
    return (
        <div className='body-style'>
            <h1 className='question-title'>Ans The Question</h1>
            <div className='container question-ans-part'>
                <h3 className='text-info'>1.Different between javascript and node.js</h3>
                <h4 className='text-white'><span className='ans-style'>Ans:javascript-</span> is a programming language.It is running in any web browser with a proper browser engine.Mainly using for any client-side activity for a web application, like possible attribute validation or refreshing the page in a specific interval or provide some dynamic changes in web pages without refreshing the page. JavaScript running any engine like Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome).</h4> <br />
                <h4 className='text-white' ><span className='ans-style'>Node.js-</span>It is an interpreter and environment for JavaScript with some specific useful libraries which JavaScript programming can use separately.It mainly used for accessing or performing any non-blocking operation of any operating system, like creating or executing a shell script or accessing any hardware-specific information or running any backend job.Node JS only run in a V8 engine which mainly used by google chrome. And javascript program which will be written under this Node JS will be always run in V8 Engine.</h4>

            </div>
            <div className='container question-ans-part  my-4'>
                <h3 className='text-info'>2.When should we use nodejs and when should we use mongodb ?</h3>
                <h4 className='text-white'><span className='ans-style'>Ans:Use nodejs:</span> Any project needs a programming environment and a runtime library that offers you basic programming tools/support and can compile and/or interpret your code. Nodejs is such as tool for the Javascript programming language. There are other similar tools for other languages such as Python, Java, PHP, C#, C++, Go, etc...

                    So, if you want to write some kind of stand-alone program or server in Javascript, then you can use nodejs for it.</h4>

                <h4 className='text-white' ><span className='ans-style'>Mongodb-</span> If your application needs the ability to persistently store data in a way that you can efficiently query or update it later, then you would typically use some form of database. There are dozens of popular databases. MongoDB is one such database. MariaDB, MySql, CouchDB, DynamoDB (on AWS), Postgres are examples of other databases. Different databases have different strengths (things they are best at) and different ways of using them so it's a whole different question to choose the right/best database for what you're doing.</h4>
            </div>

            <div className='container question-ans-part  my-4'>
                <h3 className='text-info'>3.Difference between sql and no sql databases</h3>
                <h4 className='text-white'><span className='ans-style'>Ans:SQL-</span> RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS).These databases have fixed or static or predefined schema.These databases are not suited for hierarchical data storage.These databases are best suited for complex queries.Vertically Scalable.Follows ACID property</h4>
                <h4 className='text-white mb-4'><span className='ans-style'>Ans:NoSQL</span>Non-relational or distributed database system.They have dynamic schema.These databases are best suited for hierarchical data storage.These databases are not so good for complex queries.Horizontally scalable.Follows CAP(consistency, availability, partition tolerance)</h4>
            </div>

        </div>
    );
};

export default Blog;