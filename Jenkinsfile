pipeline {
    agent any
    stages {
        stage('Install dependencies'){
                steps{
                    cmd 'cd C:\Users\hello\Desktop\practice'
                    cmd 'npm install'
                }
            }
        stage('Build'){
                steps{
                    cmd 'npm run lint'
                    cmd 'npm run build'
                }
            }
        stage('Testing'){
                steps{
                    cmd 'npm run test'
                }
            }
        stage('Deploy'){
                steps{
                    cmd 'node ./dist/main.js'
                }
            }
    }
}