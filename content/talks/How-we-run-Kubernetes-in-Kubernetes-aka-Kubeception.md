+++
title ="How we run Kubernetes in Kubernetes, aka Kubeception"
keywords = ["kubernetes", "kubernetes caas", "orchestration", "cloud", "docker talk", "devops", "devops gathering"]
speaker = "Timo Derstappen"
speaker_link="/speakers/timo-derstappen/"
image="/img/speakers/timo-derstappen.png"

bio ="""
Timo Derstappen is co-founder of Giant Swarm in Cologne. He has many years of experience in building scalable and automated cloud architectures. He likes his minimal linux desktop setup, puts nearly everything into containers and thinks Minecraft is a gateway drug.
"""
weight = 6
abstract = """
In this talk we explain how we use a “mother” Kubernetes to deploy and manage fully-isolated and encrypted Kubernetes clusters for different customers or teams - aka Kubeception.
"""
+++

How we run Kubernetes in Kubernetes, aka Kubeception

At Giant Swarm our users want fully-managed Kubernetes clusters without any limitations (incl. privileged access to the nodes). We deploy and manage these clusters either in our data center, in the preferred cloud of the customer, or even on-premise. Both for ourselves as well as for enterprise customers we need full isolation between clusters and a easy way to manage and update clusters without downtime.

In this talk we explain how we use a “mother” Kubernetes to deploy and manage fully-isolated and encrypted Kubernetes clusters for different customers or teams - aka Kubeception. Our model treats (inner) Kubernetes clusters as a third party resource and manages them with a custom controller. This way we have an automated way of provisioning and managing clusters without additional tooling or complex monitoring setups. Further, through our API, we are to be able to spin clusters up and down on demand, scale them, update them, keep track of which clusters are available, and be able to assign them to organizations and teams flexibly.

## Key takeaways:

* Learn how a modern kubernetes CaaS works
* Learn how to publish many dynamic kubernetes cluster OnPremise.
* Learn how easy to use kubernetes with Giant Swarm toolset
