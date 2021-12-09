pipeline {
    agent any

    stages {
       stage('Setup'){
            steps{
                bat "npm ci"
            }
        }
        stage('Home') {
            steps {
               // git url: 'https://github.com/lecosta10/'
                 git credentialsId: 'Github_Login', url: 'https://github.com/lecosta10/Fc-Front'
                bat 'npm run cypress:home-test'
            }
        }
        stage('Meus enderecos') {
            steps {
                git credentialsId: 'Github_Login', url: 'https://github.com/lecosta10/Fc-Front'
                bat 'npm run cypress:my_addresses-test'
            }
        }
        stage('Meus pedidos') {
            steps {
                git credentialsId: 'Github_Login', url: 'https://github.com/lecosta10/Fc-Front'
                bat 'npm run cypress:My_requests-test'
            }
        }
        stage('PDP') {
            steps {
                git credentialsId: 'Github_Login', url: 'https://github.com/lecosta10/Fc-Front'
                bat 'npm run cypress:product_page'
            }
        }
          stage('Carrinho') {
            steps {
                git credentialsId: 'Github_Login', url: 'https://github.com/lecosta10/Fc-Front'
                bat 'npm run cypress:Cart'
            }
        }
    }
}