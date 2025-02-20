pipeline {
    agent any

    environment {
        NODE_VERSION = '20.9.0'  // Adapte selon ta version
    }

    stages {
         stage('Install Node.js') {
            steps {
                script {
                    sh '''
                    # Installer nvm (Node Version Manager)
                    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
                    export NVM_DIR="$HOME/.nvm"
                    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
                    nvm install 20.9.0  # Installer Node.js 20.9.0
                    nvm use 20.9.0  # Utiliser Node.js 20.9.0
                    '''
                }
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
