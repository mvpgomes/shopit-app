# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('promotions_app', '0002_promotionmanager'),
    ]

    operations = [
        migrations.DeleteModel(
            name='PromotionManager',
        ),
        migrations.AddField(
            model_name='promotion',
            name='account',
            field=models.ForeignKey(default='', to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='promotion',
            name='desc',
            field=models.TextField(),
            preserve_default=True,
        ),
        migrations.AlterField(
            model_name='promotion',
            name='image',
            field=models.ImageField(upload_to=b'promotions'),
            preserve_default=True,
        ),
    ]
