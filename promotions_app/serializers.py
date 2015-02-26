from rest_framework import serializers
from promotion_app.models import Promotion

'''
    @name : PromotionSerializer
    @desc : Define a serializer that transforms a Promotion into a JSON object.
'''
class PromotionSerializer(serializers.ModelSerializer):
    #TODO : Verify the serialization of the image_field at rest_framework
    class Meta:
        model = Promotion
        fields = ('id', 'name', 'desc', 'created_at', 'updated_at', 'expire_date',
                  'image',)
        read_only_fields = ('created_at', 'updated_at')

        def created(self, validated_data):
            pass

        def update(self, validated_data):
            pass

        def delete(self, validated_data):
            pass
