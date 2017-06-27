+++
title ="Make load-balancing great again with Traefik!"
keywords = ["traefik", "load balancing", "http reverse proxy", "golang", "Rancher", "Kubernetes", "docker talk", "devops", "devops gathering"]
speaker = "Emile Vauge"
speaker_link="/speakers/emile-vauge/"
image="/img/speakers/emile-vauge.png"
bio ="""
Creator of Traefik, Emile is developer and founder of containo.us. He has more than 10 years experience developing applications for the web and the industry and is certified Docker trainer. Lately he got interested in the DevOps methods. He is particularly interested in orchestration tools like Swarm, Mesos and Kubernetes.
"""
speaker2 ="Manuel Laufenberg"
speaker2_link="/speakers/manuel-laufenberg/"
speaker2_image="/img/speakers/manuel-laufenberg.png"
speaker2_firm="Software Developer - Colognetworx"
speaker2_bio="""
Maintainer of Traefik, Manuel is a technical architect for a local cologne based agency called Colognetworx.
"""
time= "16:00 - 16:30"
weight = 7
abstract = """
How to effectively manage inbound network traffic in your container based infrastructure? This talk will be a deep dive into Traefik, a modern reverse-proxy and load balancer made to deploy easily microservices. You will see a lot of demos with Kubernetes, Let’s Encrypt and Rancher.
"""
+++

Microservices seem to come off over the years and has now become the model for the development of modern applications. This model, initiated by some web giants (Netflix, Google …), promotes extreme applications modularization, runs counter to the monolithic model. Microservices allows: reduced release cycle, loose coupling between services, standardization of communication (REST), reduction of risks during deliveries, cloud orientation, etc.

But it still remains tedious to easily connect these services without changing the application code. Traefik was born from this.

[traefik.io](https://traefik.io), a reverse-proxy that can watch orchestrators’ API to generate its configuration automatically. This tiny tools solves what can be a huge pain when dealing with microservices deployed in an orchestrator.


## Key takeaways:

* Learn how a modern reverse-proxy and ingress loadbalancer work
* Learn how to publish many dynamic microservices at container orchestrator.
* Learn how easy it is to setup automatically Let’s Encrypt
* Scale services without any manual reconfiguration
* Learn tricks from active Træfik developers

## Slides:

https://emilevauge.github.io/DOG2017
