+++
title ="Intel and ARM, let Kubernetes rule them all!"
speaker = "Lucas Käldström"
speaker_link="/speakers/lucas-kaldstrom/"
image="/img/speakers/lucas-kaldstrom.PNG"
bio="""
Lucas Käldström (@luxas on Github) is an upper secondary school student who is a Kubernetes maintainer on his spare time. He has been actively engaged in the Kubernetes project for more than one and a half year now and ported Kubernetes to other platforms, including ARM 32 and 64-bit. He also wrote a design doc about how a multi-platform Kubernetes cluster should function and he has been a core member in the sig-cluster-lifecycle group since July 2016 and have been hacking code on kubeadm and been organizing kubeadm releases.

"""
weight = 3
abstract = """
Kubernetes is a great container orchestration system; does it work on other architectures? Yes, it does! This is a talk and presentation about the multi-architecture features Kubernetes has and the talk shows how easy it now is to set up a Kubernetes cluster with nodes of three different architectures with kubeadm. Raspberry Pi’s of different flavours, Odroids and Up Boards are all invited to the party!
"""
+++

The talk will explain what the difficulties are when dealing with clusters of various platforms, as well as how to solve them. As a demo, a cross-platform nginx workload backed with persistent, reliable storage will be deployed from the dashboard, monitored with Heapster, InfluxDB and Grafana and autoscaled while traffic is generated against the Ingress controller. There might be a chance for someone from the audience to be a chaos monkey and unplug a power cable from any node at any time during the heavy traffic in order to demonstrate the auto-healing functions of Kubernetes.

Key takeaways:
* Learn how easy it is to setup kubernetes on ARM Clusters
* Learn how kubernetes administration work on ARM
* Learn how to publish microservices with kubernetes
* Learn how to monitor the complete cluster and services
