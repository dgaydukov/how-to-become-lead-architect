# Software Architect vs System Architect

There are so many architects out there, to name a few, there are 
* software architect
* application architect
* java architect
* system architect
* solution architect
* enterprise architect

But what is the exact difference between them. As it turns out there are only 2 types of architects
* Software Architect - responsible for building architecture inside an application using some programming language and design patterns. 
For example we have a simple Auth microservice where users can signUp/singIn. So software architect is responsible for building this application in a way
that it would be very easy to maintain the code, make changes and so on. Generally he should decide what kind of architecture (n-layered/hexagonal/onion) to use to build an application.
This position can also be called Application/Java architect it's all the same.
* System Architect - responsible for combining and managing different parts of a system as a whole (network, application, database, ui). As you see this is a little different from software architecture.
System architect doesn't need to know how to build app (although if he knows it's a big advantage), but he definately need to know how application talk with other apps (in case we have microservice architecture),
with database and so on.
This position can also be called Solution/DevOps architect it's all the same.

So as you see all architects can be divide into 2 main groups one who is responsible for building application and another is how to organize/manage all apps in some infrastructure.
There is also enterprise architect, but in reality is usually a high level guy who overseas all other, and usually don't do much handwork in any field.



