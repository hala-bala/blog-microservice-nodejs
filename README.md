# Blog Microservice Application
## Overview
This is a microservice-based blog application built with Node.js and React. The application is containerized using Docker and deployed with Kubernetes.
## Project Structure
The project consists of several microservices:
- **client**: React frontend application
- **posts**: Service for managing blog posts
- **comments**: Service for managing comments on posts
- **query**: Service for querying data across microservices
- **moderation**: Service for content moderation
- **event-bus**: Service for handling communication between microservices

## Technology Stack
- **Frontend**: React 19.1.0
- **Backend**: Node.js with Express 4.18.2
- **TypeScript**: 5.8.3
- **Containerization**: Docker
- **Orchestration**: Kubernetes
- **Development Workflow**: Skaffold

## Infrastructure
All Kubernetes deployment configurations are located in the `infra/k8s` directory:
- Deployment files for each service
- Ingress configuration

## Getting Started
### Prerequisites
- **Docker**: 20.10.x or later - [Docker Documentation](https://docs.docker.com/get-docker/)
- **Kubernetes**: v1.25.x or later - [Kubernetes Documentation](https://kubernetes.io/docs/setup/)
    - For local development, you can use:
        - [Minikube](https://minikube.sigs.k8s.io/docs/start/) v1.29.0 or later
        - [Docker Desktop with Kubernetes](https://docs.docker.com/desktop/kubernetes/)
        - [Kind](https://kind.sigs.k8s.io/docs/user/quick-start/) v0.20.0 or later

- **Node.js**: v18.x or later - [Node.js Downloads](https://nodejs.org/en/download/)
- **npm**: v9.x or later (included with Node.js)
- **Skaffold**: v2.6.x or later - [Skaffold Installation](https://skaffold.dev/docs/install/)
- **kubectl**: v1.25.x or later - [kubectl Installation](https://kubernetes.io/docs/tasks/tools/install-kubectl/)

### Installation
1. Clone the repository
``` bash
git clone <repository-url>
cd blog-microservice-nodejs
```
1. Install dependencies for each service
``` bash
cd client && npm install
cd ../posts && npm install
cd ../comments && npm install
cd ../query && npm install
cd ../moderation && npm install
cd ../event-bus && npm install
```
### Running Locally with Docker and Kubernetes
Use Skaffold to manage the development workflow:
``` bash
skaffold dev
```
This will build all Docker images, deploy to Kubernetes, and set up file watching for development.
### Accessing the Application
Once deployed, the application should be accessible at:
- Frontend: [http://localhost](http://localhost) (or configured domain in ingress)

## Microservice Communication
The services communicate with each other through the event-bus service using a simple event-driven architecture. Events are published to the event-bus and then dispatched to all relevant services.
## Deployment
The application is designed to be deployed to a Kubernetes cluster. The deployment configurations are located in the `infra/k8s` directory.
## Documentation
- [React Documentation](https://react.dev/learn)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Express Documentation](https://expressjs.com/en/guide/routing.html)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Docker Documentation](https://docs.docker.com/)
- [Kubernetes Documentation](https://kubernetes.io/docs/home/)
- [Skaffold Documentation](https://skaffold.dev/docs/)

## Development
Each service can be developed independently. Use the appropriate Dockerfile for building container images.
### Useful Commands
``` bash
# Check the status of your Kubernetes pods
kubectl get pods

# View logs for a specific pod
kubectl logs <pod-name>

# SSH into a running pod
kubectl exec -it <pod-name> -- /bin/bash

# Restart a deployment
kubectl rollout restart deployment <deployment-name>
```
## Troubleshooting
- If you encounter issues with Kubernetes networking, ensure your cluster's DNS and network policies are correctly configured.
- For Skaffold issues, refer to the [Skaffold troubleshooting guide](https://skaffold.dev/docs/references/troubleshooting/).
- Docker image build failures can often be resolved by checking the Dockerfile syntax and ensuring all required files are included in the build context.
