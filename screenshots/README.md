# 🎮 Tic Tac Toe - CI/CD Pipeline with Jenkins, Docker & AWS EC2

A simple Tic Tac Toe web application built using **HTML, CSS, JavaScript, and Python Flask**. The application is containerized using **Docker** and deployed on an **AWS EC2** instance through an automated **Jenkins CI/CD Pipeline**.

---

# 🚀 Features

- Interactive Tic Tac Toe game
- Responsive and modern UI
- Displays current player's turn
- Detects winner or draw
- Restart game functionality
- Frontend and Backend separated into different containers
- Dockerized application
- Automated CI/CD pipeline using Jenkins
- Docker Hub integration
- Automated deployment on AWS EC2

---

# 🛠️ Tech Stack

- HTML5
- CSS3
- JavaScript
- Python
- Flask
- Docker
- Docker Compose
- Jenkins
- Docker Hub
- AWS EC2
- Git & GitHub
- Linux (Ubuntu)
- Nginx

---

# 🏗️ CI/CD Workflow

```text
Developer
    │
    ▼
GitHub Repository
    │
    ▼
GitHub Webhook
    │
    ▼
Jenkins Pipeline
    │
    ├── Pull Latest Code
    ├── Build Docker Images
    ├── Push Images to Docker Hub
    └── Deploy Application on AWS EC2
            │
            ▼
      Docker Containers
            │
            ▼
          Browser
```

---

# 📂 Project Structure

```text
tic-tac-toe/
│
├── frontend/
│
├── backend/
│
├── screenshots/
│
├── docker-compose.yml
│
├── Jenkinsfile
│
└── README.md
```

---

# ⚙️ Run with Docker

### Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
```

### Navigate to the Project Directory

```bash
cd YOUR_REPOSITORY
```

### Build and Start the Containers

```bash
docker compose up --build -d
```

---

# 🌐 Access the Application

Frontend

```
http://localhost:8080
```

Backend

```
http://localhost:5000
```

---

# 📸 Screenshots

## Home Screen

![Home](screenshots/game-homepage.png)

---

## Docker Images

![Docker Images](screenshots/game-images.png)

---

## Running Containers

![Containers](screenshots/container-running.png)

---

## Jenkins Pipeline

![Jenkins Pipeline](screenshots/jenkins-pipeline.png)

---

## 📚 What I Learned

- Building a full-stack web application
- Creating REST APIs using Flask
- Writing Dockerfiles for multiple services
- Managing multi-container applications with Docker Compose
- Building automated CI/CD pipelines using Jenkins
- Integrating GitHub with Jenkins using Webhooks
- Managing Docker images using Docker Hub
- Deploying containerized applications on AWS EC2
- Automating application deployment

---

# 🔮 Future Improvements

- Deploy on Kubernetes
- Add HTTPS using Nginx Reverse Proxy
- Implement Blue-Green Deployment
- Add Monitoring with Prometheus & Grafana
- Deploy using Amazon ECS/EKS

---

# 👩‍💻 Author

**Samidha Nitin Wani**

GitHub: https://github.com/samidha1-1

---

⭐ If you found this project useful, don't forget to Star ⭐ the repository!

