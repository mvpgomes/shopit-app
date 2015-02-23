from django.db import models

from authentication_app.models import Account

'''
    @name : PromotionManager.
    @desc : The PromotionManager is responsible to create, delete and update the promotions.
'''
class PromotionManager(models.Manager):

    def create_promotion(self, name, desc, expire_date, image):
        promotion = self.create(name=name, desc=desc, expire_date=expire_date, image=image)
        promotion.save()
        return promotion

    def delete_promotion(self, name):
        promotion = super(PromotionManager, self).get_queryset().filter(name=name)
        promotion.delete()

    def update_promotion(self, name, expire_date):
        promotion = super(PromotionManager, self).get_queryset().filter(name=name)
        promotion.set_expire_date(expire_date)
        return promotion

'''
    @name : Promotion.
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

    objects = PromotionManager()

    def _unicode_(self):
        return self.name

    def get_short_promotion(self):
        return ' '.join([self.name, self.expire_date])

    def get_promotion(self):
        return ' '.join([self.name, self.desc, self.expire_date])
