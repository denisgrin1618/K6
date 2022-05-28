# K6

Load tests api on different platforms

## Prepare environment

- Incrise open files run **ulimit -n 65535**
-

## Test PHP Laravel

```
docker-compose up --build -d
k6 run ./K6_scripts/get_ping.js
```

## Test Go Gin

```
./GO_Gin/example_gin
k6 run ./K6_scripts/get_ping.js
```
