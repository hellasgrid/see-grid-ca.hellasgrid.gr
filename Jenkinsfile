pipeline {
    agent any
    options {
        checkoutToSubdirectory('see-grid-ca.hellasgrid.gr')
    }
    environment {
        PROJECT_DIR = 'see-grid-ca.hellasgrid.gr'
    }
    stages {
        stage ('Deploy Docs') {
            when {
                anyOf {
                    changeset 'docs/**'
                    changeset 'website/**'
                }
            }
            agent {
                docker {
                    image 'node:buster'
                }
            }
            steps {
                echo 'Publish see-grid-ca.hellasgrid.gr docs...'
                sh '''
                    cd $WORKSPACE/$PROJECT_DIR/website
                    npm install
                    npm run build
                '''
                sshagent (credentials: ['newgrnetci-hellasgrid']) {
                    sh '''
                        cd $WORKSPACE/$PROJECT_DIR/website
                        ssh -o "StrictHostKeyChecking no" root@see-grid-ca.hellasgrid.gr rm -rf /var/www/see-grid-ca.hellasgrid.gr/*
                        scp -o "StrictHostKeyChecking no" -r ../assets build/* root@see-grid-ca.hellasgrid.gr:/var/www/see-grid-ca.hellasgrid.gr/
                    '''
                }
            }
        }
    }
    post {
        always {
            cleanWs()
        }
        success {
            script {
                if ( env.BRANCH_NAME == 'master' || env.BRANCH_NAME == 'devel' ) {
                    slackSend( message: ":rocket: New version for <$BUILD_URL|$PROJECT_DIR>:$BRANCH_NAME Job: $JOB_NAME !")
                }
            }
        }
        failure {
            script {
                if ( env.BRANCH_NAME == 'master' || env.BRANCH_NAME == 'devel' ) {
                    slackSend( message: ":rain_cloud: Build Failed for <$BUILD_URL|$PROJECT_DIR>:$BRANCH_NAME Job: $JOB_NAME")
                }
            }
        }
    }
}

