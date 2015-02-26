from django.db import models

from authentication_app.models import Account

'''
    @name : PromotionManager.
    @desc : The PromotionManager is responsible to create, delete and update the promotions.
'''
class PromotionManager(models.Manager):

    def get_queryset(name):
        return super(PromotionManager, self).get_queryset().filter(name=name)

    def create_promotion(self, name, desc, expire_date, image):
        promotion = get_queryset(name)
        promotion.save()
        return promotion

    def delete_promotion(self, name):
        promotion = get_queryset(name)
        promotion.delete()

    def update_promotion(self, name, expire_date):
        promotion = get_queryset(name  )
        promotion.set_expire_date(expire_date)
        promotion.save()
        return promotion

'''
    @name : Promotion.
    @desc : Model that represents a promotion.
'''
class Promotion(models.Model):
    account = models.ForeignKey(Account)
    name = models.CharField(max_length=50, unique=True)
    desc = models.TextField()

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    expire_date = models.DateTimeField(auto_now=True)

    image = models.ImageField(upload_to='promotions',)

    objects = PromotionManager()

    def __unicode__(self):
        return self.name

    def get_short_description(self):
        return ' '.join([self.name, self.expire_date])

    def get_description(self):
        return ' '.join([self.name, self.desc, self.expire_date])
