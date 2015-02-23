from django.db import models

from authentication_app.models import Account

'''
    @name : Promotion
    @desc : The promotion model.
'''
class Promotion(models.Model):
    account = models.ForeignKey(Account)
    name = models.CharField(max_length=50, unique=True)
    desc = models.TextField()

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    expire_date = models.DateTimeField(auto_now=True)

    image = models.ImageField(upload_to='promotions')

    def _unicode_(self):
        return self.name

    def get_short_promotion(self):
        return ' '.join([self.name, self.expire_date])

    def get_promotion(self):
        return ' '.join([self.name, self.desc, self.expire_date])
