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

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Aliou-Diop/Jenkins-angular--test.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    def nodeHome = tool name: 'NodeJS', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
                    env.PATH = "${nodeHome}/bin:${env.PATH}"
                }
                sh 'npm install'
            }
        }

        stage('Build Angular') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                sh 'npx cypress run'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'cypress/videos/**/*.mp4', fingerprint: true
            junit 'cypress/results/*.xml'
        }
    }
}
