pipeline {
    agent {
        docker {
            image 'base/builder:1.0.0'
            args '-e STAGE_SERVER=${STAGE_SERVER} -e EXPOSE=${EXPOSE} -v /var/run/docker.sock:/var/run/docker.sock'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'mvn -B -P prod -DskipTests clean package -Dtest.skip=false'
                archiveArtifacts artifacts: '**/target/*.jar', fingerprint: true
            }
        }
        stage('Deploy') {
            steps {
                sh 'mvn -B -P prod -DskipTests deploy'
            }
        }
        stage('Stage') {
            steps {
                // docker_tag
                sh 'echo -n business/$(xmllint --xpath \'/*[local-name()="project"]/*[local-name()="artifactId"]/text()\' pom.xml): > docker_tag'
                sh 'echo -n $(xmllint --xpath \'/*[local-name()="project"]/*[local-name()="version"]/text()\' pom.xml) >> docker_tag'
                sh 'docker -H ${STAGE_SERVER} network inspect business || docker -H ${STAGE_SERVER} network create --subnet=172.20.0.0/16 business'

                // server
                sh 'docker -H ${STAGE_SERVER} pull $(<docker_tag)'
                sh 'docker -H ${STAGE_SERVER} rm -f $(cut -d: -f1 docker_tag | tr / .) || true'
                sh 'docker -H ${STAGE_SERVER} run -d --restart always ${EXPOSE:+ -p ${EXPOSE//,/ -p }} \
                 -e "BUSINESS_CORE_SERVER=${BUSINESS_CORE_SERVER}" \
                 --net business --ip 172.20.0.109 --name $(cut -d: -f1 docker_tag | tr / .) $(<docker_tag)'

            }
        }
    }
}
