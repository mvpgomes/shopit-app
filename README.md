# python-getting-started

A barebones Python app, which can easily be deployed to Heroku.

This application support the [Getting Started with Python on Heroku](https://devcenter.heroku.com/articles/getting-started-with-python) article - check it out.

## Running Locally

Make sure you have Python [installed properly](http://install.python-guide.org).  Also, install the [Heroku Toolbelt](https://toolbelt.heroku.com/).

### Creating a virtual environment

Make sure that you have virtualenv installed. To install virtualenv you need to make sure that you have **pip**
installed.

```sh
$ which pip
```
If **pip** is installed, the resulting output should be like `/usr/local/bin/pip`. Otherwise, install **pip** according to the oficial instructions.

```sh
$ curl https://raw.githubusercontent.com/pypa/pip/master/contrib/get-pip.py | python
```
Install **virtualenv**.

```sh
$ pip install virtualenv
```
Now that **virtualenv** is installed you are able to create a virtual environment.

```sh
$ virtualenv venv
$ source venv/bin/activate
```

Install the dependencies of your project to run the application locally.

```sh
$ pip install -r requirements.txt --allow-all-external
```
Run the application locally

```sh
$ foreman start web
```
Now your application is running on http://localhost:5000.

After you finished the development in the virtual environment make sure to deactivate then.

```sh
$ deactivate
```

## Deploying to Heroku

## Documentation

For more information about using Python on Heroku, see these Dev Center articles:

- [Python on Heroku](https://devcenter.heroku.com/categories/python)
