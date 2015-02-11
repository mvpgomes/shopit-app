from django.db import models


class Greeting(models.Model):
    when = models.DateTimeField('date created', auto_now_add=True)

# User model: contains a name, an ID and has associated its promotions.
class User(models.Model):
    name = models.CharField(max_length=200)
    user_id = models.IntegerField(default=0)

# Promotions model: contains a text, an image and is associated to its owner. 
class Promotion(models.Model):
    text = models.CharField(max_length=200)
    image = models.ImageField(upload_to='promotions')
