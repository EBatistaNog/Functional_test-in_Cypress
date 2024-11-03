//Groovy
pipeline {
    agent any  // significando que qualquer agente disponível pode ser usado no Jenkins 

    parameters {
        choice(name: 'ENV_TYPE', choices: ['dev', 'qa', 'stg', 'prod'], description: 'Choose environment')
        choice(name: 'TEST_TYPE', choices: ['user_creation', 'group_creation'], description: 'Choose test')
        choice(name: 'SCENARIO_TYPE', choices: ['positive', 'negative'], description: 'Test scenario')
        choice(name: 'BROWSER', choices: ['chrome', 'mozilla', 'edge', 'all browsers'], description: 'Choose browser')
    }

    stages {
        stage('Setup') {
            steps {
                script {
                    env.ENV_TYPE = params.ENV_TYPE
                    env.TEST_TYPE = params.TEST_TYPE
                    env.SCENARIO_TYPE = params.SCENARIO_TYPE
                    env.BROWSER = params.BROWSER
                }
            }
        }

        stage('Clone Repository') {
            steps {
                sh 'git clone https://github.com/EBatistaNog/Functional_Testing_with_Cypress.git'
            }
        }

        stage('Starting') {
            steps {
                sh 'echo starting the tests'
            }
        }

        stage('Run Cypress Tests') {
            steps {
                ansiColor('xterm') {
                    script {
                        def cypressCommand = "npm run cypress:${params.ENV_TYPE}${params.TEST_TYPE}${params.SCENARIO_TYPE}${params.BROWSER}" 
                        sh cypressCommand // package.json
                    }
                }
            }
        }

        stage('Generating reports') {
            steps {
                script {
                    publishHTML([
                        allowMissing: true, 
                        alwaysLinkToLastBuild: false, 
                        keepAll: true, 
                        reportDir: 'cypress/reports/html/', 
                        reportFiles: 'index.html', 
                        reportName: 'HTML Report', 
                        reportTitles: '', 
                        useWrapperFileDirectly: true
                    ])
                }
            }
        }
    }
}
