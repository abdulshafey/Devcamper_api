pipeline {
    agent any
    environment{
        NEW_VERSION = '1.2.0'
        SERVER_CREDENTIALS = credentials('github-credentials-1')
    }

    stages {
        stage('build') {
            steps {
                echo 'Building the application...'
                echo "Building version ${NEW_VERSION}"
            }
        }
        stage('test'){
            steps {
                 echo 'Testing the application...'
            }
        }
        stage('deploy') {
            steps {
               echo 'Deploying the application...' 
               withCredentials([
                   usernamePassword(credentials: "github-credentials-1", usernameVariable: USER, passwordVariable: PWD )
                   ]){
                   sh "some command ${USER} ${PWD}"
               }
            }
        }
    }
}
