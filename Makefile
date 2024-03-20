build:
	docker build -t soul_of_bravery ./app/

start:
	docker run --name soul_of_bravery_app --rm -d -p "80:80" soul_of_bravery

stop:
	docker stop soul_of_bravery_app

clean:
	docker rmi soul_of_bravery