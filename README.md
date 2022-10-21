## SAD on MongoDB

# Details
This is a Educational sharing  software application written with React, Express accessing MongoDB and deployed on Heroku.
The app is for software development students to help them understand critical subjects, share comments, and resources. 

|Users will be able to:|
-----------------------
| *Select a subject |
| *Choose a topic on a particular subject and view comments and resources |
| *add a comment on a specific topic |
| *view resources added by all users |
| *add new resources |
| *update existing resources |
| *delete any outdated resources |

# The API Routes available

|Method      |Path                     |Purpose |
|------------|-------------------------|---------------------------------------------|
|GET         |/                        |  Home page |
|GET         | /topics                 |   topics index page with links for content |
|GET         | /topics/:id             |   content for a particular topic |
|POST        | /topics/:id/comment     |   Create a comment about a particular topic |
|GET         | /resources/new          |   Form page for creating a new resource |
|GET         | /resources/:id          |   resources for a particular topic |
|PUT         | /resources/:id          |   Update a particular topic resource |
|GET         | /resources/:id/edit     |   Form page for editing an existing resource |
|DELETE      | /resources/:id          |   Delete a particular resource |
|GET         | /*                      |   404 page (matches any route not defined above |

#  Cluster, Database, Collections  and Documents stored
CLUSTER: SADMongoDB
Database: sad-mongodb

|collection: subjects|
|--------------------|
|document: { |
|subject_id: Integer|
|    subject_name: String|
|    subject_img_url: String |
|} |


collection: topics
document: {
    topic_id: Integer
    topic_subject_id: Integer Foreign Key to subject table
    topic_name: String
}


collection: comments
document: {
    comment_id: Integer
    comment_text: String
    comment_topic_id: Integer Foreign Key to Topics table
    comment_user: String
    comment_date: Date
}


collection: resources
document: {
    resources_id: Integer
    resources_name: String
    resources_link: String
    resources_type: String
    resources_topic_id: String Foreign Key to topics table
}

Used Mongosh to create the collection using the command: db.createCollection("sad-mongodb")
The documents were auto created when inserting the seed data using the command: db.COLLECTION_Name.inserMany({})

Developed by: Adrian Mitre, Travis Storie and Alex Aguirre


