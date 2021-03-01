# Test task for Future Group

## Clone & Run

## Clone repo

### `git clone https://github.com/vanilla64/test-task-future-group.git`

## Build Docker Image

### `docker build -t test-task-future-group .`

## Run

### `docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 3001:3000 -e CHOKIDAR_USEPOLLING=true test-task-future-group`
