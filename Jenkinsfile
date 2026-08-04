pipeline {
    agent any

    environment {
        FRONTEND_IMAGE = "student-frontend"
        BACKEND_IMAGE = "student-backend"
    }

    stages {

        stage('Build Frontend Image') {
            steps {
                dir('frontend') {
                    sh 'docker build -t $FRONTEND_IMAGE .'
                }
            }
        }

        stage('Build Backend Image') {
            steps {
                dir('backend') {
                    sh 'docker build -t $BACKEND_IMAGE .'
                }
            }
        }

        stage('Run Backend') {
            steps {
                sh '''
                docker stop backend-container || true
                docker rm backend-container || true

                docker run -d \
                  --name backend-container \
                  -p 5000:5000 \
                  $BACKEND_IMAGE
                '''
            }
        }

        stage('Run Frontend') {
            steps {
                sh '''
                docker stop frontend-container || true
                docker rm frontend-container || true

                docker run -d \
                  --name frontend-container \
                  -p 8081:80 \
                  $FRONTEND_IMAGE
                '''
            }
        }

    }
}
