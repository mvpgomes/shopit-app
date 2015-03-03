import json

from rest_framework import permissions, status, views, viewsets
from rest_framework.response import Response

from promotions_app.models import Promotion
from promotions_app.serializers import PromotionSerializer

'''
    @name : PromotionViewSet
    @desc : Defines the promotion viewset.
'''
class PromotionViewSet(viewsets.ModelViewSet):
    queryset = Account.objects.all()
    serializer_class = PromotionSerializer
    pass
