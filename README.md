=======
# React App


#####  Prerequisites  #####
#
install node, yarn


#####  Run the dev server  #####
#
1. run `yarn start`
2. this will run the webpack-dev-server in watch mode
3. access the application in (defult)  http://localhost:8080/


#####  Run the tests  #####
#
run   `yarn test`

or with watch

run   `yarn test:watch`

# React - Redux stuff

#####  Bind a new Action to UI #####
1. create a new action method in `../actions/<filename>`
2. import actions using: import * from `../actions/<filename>`
3. bind action to props using: `connect(mapStateToProps, actions)(<component_name>)`
4. add a method to expose the action, with a name matching the event: <br>
     `onClick(item, event) {
         this.props.<action_name>(item);
     }`
5. to get usually the UI event method (e.g. onClick()) comes only with event object. 
To make the above method get the relevant context (param 'item' in method above) need to bind it to the method inside the render method: <br>
 `let boundOnClick = this.onClick.bind(this, <event context>);`
6. assigning the bound method to the react event: <br>
 `<li onClick={boundOnClick}>`
7. don't forget to add tests :)

#####  css-loader (CSS Modules)  #####
#
The css-loader for webpack was chosen so to work with css files like any other dependency. In addition the 'modules' query parameter was added in order
to load css file as a node style module. This enables Local scoped CSS by default.
Read mode here - https://www.npmjs.com/package/css-loader.

#####  react-intl  #####
#
Build on top of Format.js, this library enables localization and internalization,
Read more here - https://github.com/yahoo/react-intl


Deployment to production
------------------------------

In order to create deployment env for app

1. First step is to generate the relevant jenkins job. In order to generate the jobs please register the repo under jenkins repo. Edit the file:
        https://github.com/kenshoo/jenkins/blob/master/buildscripts/jenkins/dsl/main/helpers/Constants.groovy
        Then run the job: https://jenkins.kenshoo-lab.com/job/main-dsl/
        It will create a new job, with the name: <your repo name>-master-dsl
        Run the new job craeted, it will create the jobs you will need to use below.
        
4.   After the scripts have been generated you need to run the following jenkins jobs synchronously in the following order:
  - S3_stack_operations to create template bucket with params:
        * **StackOperation : deploy**
        * **StackType: cf_template**
        * **Branch : master**
  - S3_stack_operations with params:
        * **StackOperation : deploy**
        * **StackType: website_content**
        * **Branch : master**
  - cloud_front_stack_operation with params:
        * **StackOperation : deploy**
        * **Branch : master**


For general knowledge read the following:


Inside the project under the deployment folder are the following resources:

1. cloudformation -
  A little general knowledge from AWS documentation about stacks:
    >When you use AWS CloudFormation, you manage related resources as a single unit called a stack. 
    >You create, update, and delete a collection of resources by creating, updating, and deleting stacks. 
    >All the resources in a stack are defined by the stack's AWS CloudFormation template. 
    >Suppose you created a template that includes an Auto Scaling group, Elastic Load Balancing load balancer, 
    >and an Amazon Relational Database Service (Amazon RDS) database instance. To create those resources, 
    >you create a stack by submitting the template that you created, and AWS CloudFormation provisions all those resources for you. 
    >You can work with stacks by using the AWS CloudFormation console, API, orAWS CLI.


  Back to our project, under cloudFormation are the AWS stacks that are needed to create a fool working app:
  1. s3-website-content - the definition of the s3 bucket where your app files will be (index.html, bundle.js , style.css etc...)
  2. s3-cf-templates - This is not part of the app. It is used as a container for the aws creation process of other resources, such as the s3-website-content.
  3. Cloud-front - the AWS CDN 
        
2. Git - 
    Contains the hooks exist for this project and the scripts used to copy them to local .git directory.
    For now the only git hook defined is the pre-push hook that block push/push -f/delete on protected branches (default are: master|release-* ). This way the only way to merge to these branches is through a PR.
    In order to setup the git hooks you need to run the following command from terminal:
    '''
    npm run setupGitHooksLocally
    '''
3. buildscripts\jenkins\dsl - 
  Groovy scripts to create jenkins jobs:
  1. features - install node and webpack, runs tests and publish to s3 bucket under branch/{BuildNumber} folder
  2. master - same as features but publish to build folder and if successful to latest folder as well
  3. promoting version to production -  each job in the chain runs the next job only uppon succes:
        a. react_seed_trigger_deployment_flow - gets build number as parameter and starts the deployment to production flow
        b. react_seed_deploy_staging - create staging folder with the build from the job before
        c. react_seed_run_smoke_test - run smoketest against the build in the staging folder
        d. react_seed_frontend_promote_to_production - as the name implies, promotes the app files from under a specific build/{$BuildNumber} folder to the release folder. The release  folder is the one used in production env.
        e. react_seed_rollback_production_version - if last job fails, rolling to the last working build
  4. cloud_front_stack_operation - deploy/remove the cloud-front stack for a specific branch (default branch is master)
  5. S3_stack_operations - deploy/remove  s3 website/template bucket for a speciifc branch (default branch is master)
        
    In order to generate the jobs above one needs to create a job that can generate jobs from scripts:
    A refrence for that can be found in jenkins under the job:
    https://jenkins.kenshoo-lab.com/view/kreative-library/job/kreative-frontend-job-generator
    
    
4. Scripts - 
   Python scripts to deploy resources to aws:
   1. stack_environments -  init values for specific env (account, resources names etc...)
   2. stack_params - init values for each cf of the stack using the stacks created in stack_environments
   3. Stack_deployer - the actual deployment of the resource
   4. fabfile - the entry point to the deployment tasks used in the dsl scripts
   5. init.sh + requirements.txt - used to install python and fabric in order to run the tasks in the fabfile