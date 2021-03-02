# Test task for Future Group

Реализованный функционал:




## Clone & Run

### Clone repo
##### `git clone https://github.com/vanilla64/test-task-future-group.git`
##### `cd test-task-future-group`


### Build Docker Image
##### `docker build -t test-task-future-group .`


### Run
##### `docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true test-task-future-group`

### Open in browser 
http://localhost:3001
