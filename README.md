# 🚀 Containerized Web Application Deployment

This project demonstrates how to deploy a containerized Node.js web application using Docker on AWS EC2, with Nginx configured as a reverse proxy and load balancer.

---

## 📌 Features

* 🐳 Dockerized Node.js application
* ☁️ Deployed on AWS EC2 (Ubuntu)
* 🌐 Nginx reverse proxy setup
* ⚖️ Load balancing with multiple containers
* 🔄 GitHub version control

---

## 🧱 Tech Stack

* Node.js (Express)
* Docker
* AWS EC2
* Nginx
* Git & GitHub

---

## 📁 Project Structure

```
docker-web-app/
│── app.js
│── package.json
│── Dockerfile
```

---

## ⚙️ Prerequisites

Make sure you have:

* Docker installed
* Git installed
* AWS account (for deployment)

---

## 🟢 Run Locally (Without Docker)

```bash
npm install
node app.js
```

Open: http://localhost:3000

---

## 🐳 Run Using Docker

### 1. Build Docker Image

```bash
docker build -t my-app .
```

### 2. Run Container

```bash
docker run -p 3000:3000 my-app
```

Open: http://localhost:3000

---

## ☁️ Deploy on AWS EC2

### 1. Launch EC2 Instance

* Ubuntu OS
* Allow ports: 22, 80, 3000

### 2. Connect to EC2

```bash
ssh ubuntu@your-ec2-ip
```

### 3. Install Docker

```bash
sudo apt update
sudo apt install docker.io -y
sudo systemctl start docker
sudo usermod -aG docker ubuntu
```

(Re-login after this)

---

### 4. Clone Repository

```bash
git clone <your-repo-url>
cd docker-web-app
```

---

### 5. Build & Run

```bash
docker build -t my-app .
docker run -d -p 3000:3000 my-app
```

---

## 🌐 Setup Nginx Reverse Proxy

### Install Nginx

```bash
sudo apt install nginx -y
```

### Configure

```bash
sudo nano /etc/nginx/sites-enabled/default
```

Paste:

```
server {
    listen 80;

    location / {
        proxy_pass http://localhost:3000;
    }
}
```

Save and run:

```bash
sudo nginx -t
sudo systemctl restart nginx
```

---

## ⚖️ Load Balancing Setup

Run multiple containers:

```bash
docker run -d -p 3001:3000 my-app
docker run -d -p 3002:3000 my-app
```

Update Nginx config:

```
upstream backend {
    server 127.0.0.1:3001;
    server 127.0.0.1:3002;
}

server {
    listen 80;

    location / {
        proxy_pass http://backend;
    }
}
```

Restart:

```bash
sudo systemctl restart nginx
```

---

## 🌍 Access Application

* With Docker: http://<EC2-IP>:3000
* With Nginx: http://<EC2-IP>

---

## 🧠 Learning Outcomes

* Containerization using Docker
* Cloud deployment using AWS EC2
* Reverse proxy and load balancing using Nginx
* Debugging real-world deployment issues

---

## 👨‍💻 Author

Sankalp Tripathi
