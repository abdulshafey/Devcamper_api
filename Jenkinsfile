// def gv
// pipeline {
//     agent any
//     parameters {
//         choice(name: "VERSION", choices: ['1.1.0', '1.2.1', '1.3.0'], description: '')
//         booleanParam(name: 'executeTest', defaultValue: true, description: '')
//     }

//     stages {
//         stage('init') {
//             steps {
//                 script {
//                     gv = load "script.groovy"
//                 }
//             }
//         }
//         stage('build') {
//             steps {
//                 script {
//                     gv.buildApp()
//                 }
//             }
//         }
//         stage('test'){
//             when {
//                 expression {
//                     params.executeTest
//                 }
//             }
//             steps {
//                 script {
//                      gv.testApp()
//                 }
//             }
//         }
//         stage('deploy') {
//             input {
//                 message "Select the environment to deploy "
//                 ok "Done"
//                 parameters {
//                      choice(name: "ENV", choices: ['dev', 'staging', 'prod'], description: '')
//                 }
//             }
//             steps {
//               script {
//                 gv.deployApp()
//                 echo "Deploying to ${ENV}"
//               }
//             }
//         }
//     }
// }

pipeline {
    agent any

    tools {
        nodejs 'my-node' // Ensure this matches the name of your Node.js installation in Jenkins
    }

    environment {
        DOCKER_IMAGE = 'abdulshafey24/my-node-app:1.2'
        DOCKERHUB_CREDENTIALS = 'docker-hub-repo' // Ensure this matches your DockerHub credentials ID in Jenkins
    }

    stages {
        stage('Build Node') {
            steps {
                script {
                    echo "Building the application"
                    sh "npm run build"
                }
            }
        }

        stage('Build Image') {
            steps {
                script {
                    echo "Building the docker image"
                    withCredentials([usernamePassword(credentialsId: env.DOCKERHUB_CREDENTIALS, passwordVariable: 'PASS', usernameVariable: 'USER')]) {
                        sh "docker build -t ${DOCKER_IMAGE} ."
                        sh "echo $PASS | docker login -u $USER --password-stdin"
                        sh "docker push ${DOCKER_IMAGE}"
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    echo "Deploying the application"
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
