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
        nodejs NodeJs
    }
    stages {
        steps("build node"){
            script {
                echo "Building the application"
                sh "npm run build"
            }
        }

        steps("build image"){
            script {
                echo "Building the docker image"
                withCredentials([usernamePassword(credentialsId: docker-hun-repo, passwordVariable: "PASS", usernameVariable: "USER")]) {
                    sh "docker build -t abdulshafey24/my-node-app:1.2 ."
                    sh "docker $PASS | login -u $USER --password-stdin"
                    sh "docker push abdulshafey24/my-node-app:1.2"
                }
            }
        }

        steps("deploy"){
            script {
                echo "Deploying the application"
            }
        }
    }
}