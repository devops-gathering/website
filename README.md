# devops-gathering.io website

[![CircleCI](https://circleci.com/gh/devops-gathering/website/tree/master.svg?style=svg&circle-token=67bab8ff4f7d75ef4cff31e48925a2bf060955b3)](https://circleci.com/gh/devops-gathering/website/tree/master)

## Local Development

Before we start we should ensure that we can work correctly. So lets build all required containers.

```bash
mkdir -p devops-gathering
```

```
cd devops-gathering
```

```bash
git clone git@github.com/devops-gathering/website.git
```

```bash
docker-compose build
```

After this lets start our local development with

```bash
docker-compose up -d
```

Now you can visit your local development page under [http://localhost:1313](http://localhost:1313)


## Write new content

**Important**

Every content must be on:

```
+++
draft = false
+++
```
Otherwise he will not rendered

## start for your local mobile devices

```
$ hugo server --bind "0.0.0.0" --baseURL http://$(hostname):1313
```
