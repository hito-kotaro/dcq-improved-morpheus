COMPOSE = docker compose -f ./infrastructure/docker-compose.yml
API_CONTAINER_NAME = morpheus_api
DB_CONTAINER_NAME = morpheus_api
APP_DOCKERFILE = ./infrastructure/api/Dockerfile
PROFILE = tohi.work-admin
REGION = ap-northeast-1
TASK_DEF_FILE = file://./infrastructure/ecs-task-def.json

.PHONY: up
up:
	$(COMPOSE) up -d

.PHONY: stop
stop:
	$(COMPOSE) stop

.PHONY: restart
restart:
	$(COMPOSE) restrt

.PHONY: down
down:
	$(COMPOSE) down

.PHONY: log
log:
	docker logs $(API_CONTAINER_NAME) -f

.PHONY: check_aws_profile
check_aws_profile:
	aws configure list
	@read -p "Are you sure?[y/N]: " ans; \
	if [ "$$ans" != y ]; then \
		exit 1; \
	fi

.PHONY: build
build:
	docker build -t morpheus-sample -f $(APP_DOCKERFILE) .

.PHONY: task
task:
	aws ecs --profile $(PROFILE) --region $(REGION)  register-task-definition --cli-input-json $(TASK_DEF_FILE)

