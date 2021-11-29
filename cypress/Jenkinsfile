pipeline {
    agent any

    stages {
       stage('Setup'){
            steps{
                bat "npm ci"
            }
        }
        git credentialsId: 'Github_Login', url: 'https://github.com/lecosta10/Cypress-CI'
        stage('Home') {
            steps {
               // git url: 'https://github.com/lecosta10/'
                
                bat 'npm run cypress:home-test'
            }
        }
        stage('Meus endereços') {
            steps {
               
                bat 'npm run cypress:my_addresses-test'
            }
        }
        stage('Meus pedidos') {
            steps {
                
                bat 'npm run cypress:My_requests-test'
            }
        }
        
    }
}