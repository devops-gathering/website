+++
title ="Docker and Kubernetes for Java Developers"

speaker = "Roland Huss"
speaker_link="/speakers/roland-huss/"
image="/img/speakers/roland-huss.png"
bio="""
Dr. Roland Huss is a Principal Software Engineer at Red Hat working on Fuse. He has been developing in Java for twenty years now but never forgot his roots as system administrator. Roland is an active open source contributor, lead developer of the JMX-HTTP bridge Jolokia and the popular fabric8io/docker-maven-plugin. And he loves chilli pepper.
"""
weight = 3
time="09:00-12:30"
abstract = """
Java is still the main platform for developing business applications and drives most of the enterprise applications out there. However, the way how we operate those applications is currently changing disruptively. The industry is adopting container based runtime platforms rapidly, with Docker and Kubernetes as the leading technologies. This workshop is for Java developers and shows how new or existing Java applications can be easily moved into the world of containers.
"""
+++

In the first part we will learn, how you can add the creation of Docker images to your Maven builds and how integration tests can be simplified by Docker. This will be demonstrated live by two connected Microservices based on Wildly-Swarm and Spring-Boot. Here we will also meet the peculiarities which have to be respected when putting JVMs into Docker containers, especially when it comes to memory allocation or thread tuning.  

The second part then shows how to bring these images to the container orchestration platform Kubernetes, whose concepts will be introduced first. It will be shown live how easy it is to install a local Kubernetes development environment and how our sample application is moved step-by-step to Kubernetes. A Maven build integration with the fabric8-maven-plugin will be explained in detail.

At the end the attendees will not only have a good overview how Java applications can be brought frictionlessly into this new shiny world, but also why putting Java application into containers makes sense for so many use cases. 


## Key takeaways:

* Learn how to integrate Docker into your Java builds
* Learn what to take care of when running Java in Docker containers
* Get an introduction into Kubernetes and its concepts
* Learn how to bring easily your Java apps to Kubernetes and integrate the generation of Kubernetes resource descriptors into your Java build

## What you will need:

* Basic Docker knowledge required
* Some minimal Kubernetes knowlegde would be nice, but is not mandatory
