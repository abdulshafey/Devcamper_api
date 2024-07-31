pipeline {
    agent any
    parameters {
        choice(name: "VERSION", choices: ['1.1.0', '1.2.1', '1.3.0'], description: '')
        booleanParam(name: 'executeTest', defaultValue: true, description: '')
    }

    stages {
        stage('build') {
            steps {
                echo 'Building the application...'
                echo "Building version ${NEW_VERSION}"
            }
        }
        stage('test'){
            when {
                expression {
                    params.executeTest
                }
            }
            steps {
                 echo 'Testing the application...'
            }
        }
        stage('deploy') {
            steps {
               echo 'Deploying the application...' 
               echo "Deploying version ${params.VERSION}"
            }
        }
    }
}
