# ShopIT app

An AngularJS and Django to manage promotions that are available to customers through the ShopIT mobile app.

## Running Locally

Make sure you have Python [installed properly](http://install.python-guide.org).  Also, install the [Heroku Toolbelt](https://toolbelt.heroku.com/). You also must have Node.js [installed](http://nodejs.org/) in your development machine.

### Creating a local PostgreSQL database.

In order to run the application locally you must to have a local postgres database installed.

If you are in a Linux environment you must to install  the dependencies for PostgreSQL work with Django and  then install PostgreSQL.

```sh
$ sudo apt-get install libpq-dev python-dev
$ sudo apt-get install postgresql postgresql-contrib
```

If you are using a Mac Os environment you can install PostgreSQL via [Homebrew](http://brew.sh/).

```sh
$ brew install postgresql
```

Now you need to create a database, a user and grant the created user access to the database. Start by running the command:

```sh
$ sudo su - postgres
```

Your terminal prompt should now say "postgres@yourserver". If this is the case, then run this command to create your database:

```sh
$ createdb shopit_db
```

Create the database user:

```sh
$ createuser -P
```

You will now be met with a series with 6 prompts. The first one is the name of the user, that in our case is ***shopit***, the next prompt is the user password, that in our case is ***shopit_admin***. You will be prompted to confirm the password and then for the next three prompts just enter "n" and
hit "enter". This menas that your user only has access to what you give it access and nothing else. Now activate the PostgreSQL command line:

```sh
$ psql
```

Grant to the user access to your recently created database:

```sh
$ GRANT ALL PRIVILEGES ON DATABASE shopit_db TO shopit;
```
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
Install bower and its dependencies.

```sh
$ npm install -g bower
$ npm install
$ bower install
```

Apply the migrations the migrations to your database.

```sh
$ python manage.py migrate
```

Run the application locally

```sh
$ python manage.py runserver
```
Now your application is running on http://localhost:8000.

After you finished the development in the virtual environment make sure to deactivate then.

```sh
$ deactivate
```

## Deploying to Heroku

Before to deploy the application on Heroku make sure that you have committed the changes in your local repository. After that execute the command:

```sh
$ git push heroku master
```
## Documentation

For more information about using Python on Heroku, see these Dev Center articles:

- [Python on Heroku](https://devcenter.heroku.com/categories/python)
