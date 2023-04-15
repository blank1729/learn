from flask import Flask

app = Flask(__name__)

@app.get("/")
def root_func():
	return "You piece of shit"

if __name__ == '__main__':
	app.run()