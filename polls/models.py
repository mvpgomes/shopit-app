from django.contrib.auth.models import AbstractBaseUser
from django.db import models


class Greeting(models.Model):
    when = models.DateTimeField('date created', auto_now_add=True)

# User model: contains a name, an ID, a password and has associated its promotions.
class User(models.Model):
    promotion = models.ManyToManyField('Promotion')
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=50)

# Promotions model: contains a text, an image and is associated to its owner.
class Promotion(models.Model):
    #store = models.ForeignKey('Store')
    text = models.CharField(max_length=200)
    image = models.ImageField(upload_to='promotions')
