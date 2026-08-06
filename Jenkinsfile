
pipeline {
    agent any

    stages {

        stage('Checkout Latest Code') {
            steps {
                deleteDir()
                checkout scm
                sh 'git rev-parse HEAD'
            }
        }

        stage('Build Frontend Image') {
            steps {
                dir('frontend') {
                    sh 'docker build --no-cache -t student-frontend .'
                }
            }
        }

        stage('Build Backend Image') {
            steps {
                dir('backend') {
                    sh 'docker build --no-cache -t student-backend .'
                }
            }
        }

        stage('Run Backend') {
            steps {
                sh '''
                docker stop backend-container || true
                docker rm backend-container || true

                docker run -d --name backend-container -p 5000:5000 student-backend
                '''
            }
        }

        stage('Run Frontend') {
            steps {
                sh '''
                docker stop frontend-container || true
                docker rm frontend-container || true

                docker run -d --name frontend-container -p 8081:80 student-frontend
                '''
            }
        }
    }
}
