pipeline {
    agent any

    stages {
        stage('Dependencies') {
            steps {
                bat 'npm i'
            }
        }
     
        stage('Unit Tests') {
            steps {
                git credentialsId: 'Github_Login', url: 'https://github.com/lecosta10/fc-TestesFront'
                bat 'npm test'
            }
        }
        
    }
}