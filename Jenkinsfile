pipeline {
    agent any

    tools {
        nodejs("20.9.0") // Adapte selon ta version
    }

    stages {
        stage('Install Node.js') {
            steps {
                sh 'npm version'
            }
        }

        stage('Install Angular CLI') {
            steps {
              sh 'npm install -g @angular/cli@17'
            }
        }

        stage('Check Node & Angular CLI') {
            steps {
                sh 'node -v'
                sh 'npm -v'
                sh 'npx ng version' // Vérifie si Angular CLI est bien installé
            }
        }

        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/Aliou-Diop/Jenkins-angular--test.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        /*stage('Build Angular') {
            steps {
                sh 'npm run build'
            }
        }*/

        stage('Install Xvfb (Virtual Display)') {
            steps {
                sh 'sudo apt-get update && sudo apt-get install -y xvfb' 
            }
        }

        stage('Run Cypress Tests') {
            steps {
                sh 'npx cypress run'
            }
        }

    }

   
}
