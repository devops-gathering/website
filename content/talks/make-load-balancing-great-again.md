+++
title ="Make load-balancing great again!"
speaker = "Emile Vauge"
speaker_link="/speakers/emile-vauge/"
bio ="""
Creator of traefik.io, Emile is developer and founder of containo.us. More than 10 years experience developing applications for the web and the industry, certified Docker trainer, he got interested lately in the DevOps method. He is particularly interested in orchestration tools like Swarm, Mesos and Kubernetes.
"""
weight = 2
abstract = """
How to effectively manage inbound network traffic in your container based infrastructure? This talk will be a deep dive into Traefik, a modern reverse-proxy and load balancer made to deploy microservices with ease. You will get a lot of demos with Docker Swarm, Let’s Encrypt and Kubernetes.
"""
+++

Microservices seem to come off over the years and has now become the model for the development of modern applications. This model, initiated by some web giants (Netflix, Google …), promotes extreme applications modularization, runs counter to the monolithic model. Microservices allows: reduced release cycle, loose coupling between services, standardization of communication (REST), reduction of risks during deliveries, cloud orientation, etc.

But it still remains tedious to easily connect these services without changing the application code. Traefik was born from this.

traefik.io, a reverse-proxy that can watch orchestrators’ API to generate its configuration automatically. This tiny tools solves what can be a huge pain when dealing with microservices deployed in an orchestrator.

This talk will be co-presented with Manuel Laufenberg, maintainer on Traefik.
