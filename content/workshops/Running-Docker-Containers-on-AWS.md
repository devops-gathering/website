+++
title = "Running Docker Containers on AWS"
speaker = "Philipp Garbe"
firm = "AutoScout24"
bio = """
Philipp works as Lead Software Developer at AutoScout24 in Munich. As Docker Captain he shares his knowledge and experience about Containers.
"""
image="/img/speakers/philipp-garbe.png"
speaker_link="/speakers/philipp-garbe/"
time = "13:30 - 17:00"
weight = 5
abstract= """
Running containers locally has been made very easy by Docker with tools like Docker for Mac or Windows. With Docker Swarm a group of Docker engines can be turned into a virtual Docker Engine providing native clustering capabilities.

But how do you setup Docker Swarm cluster on AWS? What is necessary to deploy your application to the swarm?

In this workshop, Philipp guides you step-by-step through the process of setting up Docker Swarm from scratch.
He also shows how to deploy and update applications based on Docker Compose v3.
Principals like immutable infrastructure and configuration as code will influence the entire process as CloudFormation plays an important role.
"""
+++

Running containers locally has been made very easy by Docker with tools like Docker for Mac or Windows. With Docker Swarm a group of Docker engines can be turned into a virtual Docker Engine providing native clustering capabilities.

But how do you setup Docker Swarm cluster on AWS? What is necessary to deploy your application to the swarm?

In this workshop, Philipp guides you step-by-step through the process of setting up Docker Swarm from scratch. He also shows how to deploy and update applications based on Docker Compose v3. Principals like immutable infrastructure and configuration as code will influence the entire process as CloudFormation plays an important role.

**Agenda:**

1. Basic Setup
	*	Local Requirements
	*	Immutable Infrastructure with CloudFormation
	*	Basic VPC Setup

2. Docker 
	*	Run Docker on EC2 (VMs)
	*	Scale with AutoScaling Groups

3. Docker Swarm
	* Setup Manager Nodes
	* Secure Swarm Tokens
	* Automatically join Worker Nodes
	*	Deploy sample application

## Who should join?

* Everyone who wants to setup and run Docker Swarm on AWS
* Some experience with AWS or Docker is recommended (but not required)

## Prerequisites:

* Bring your own laptop
* Have your own AWS account (Free Tier, https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/)
* Install AWS Cli (http://docs.aws.amazon.com/cli/latest/userguide/installing.html)
