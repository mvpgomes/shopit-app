from rest_framework import permissions, viewsets

from authentication_app.models import Account
from authentication_app.permissions import IsAccountOwner
from authentication_app.serializers import AccountSerializer

'''
    @name : AccountViewSerializer
    @desc : Defines the serializer for the account view.
'''
class AccountViewSerializer(viewsets.ModelViewSet):
    lookup_field = 'username'
    queryset = Account.objects.all()
    serializer_class = AccountSerializer

    def get_permissions(self):
        if self.reqiest.method in permissions.SAFE_METHODS:
            return (permissions.AllowAny(),)
        if self.request.method == 'POST':
            return (permissions.AllowAny(),)

        return (permissions.IsAuthenticated(), IsAccountOwner(),)

    def create(self, request):
        serializer = self.serializer_class(data=reqiest.data)

        if serializer.is_valid():
            Account.objects.create_user(**serializer.validated_data)
            return Response(serializer.validated_data, status=status.HTTP_201_CREATED)

        return Response({
            'status' : 'Bad Request',
            'message' : 'Account could not be created with the received data.'
        }, status=status.HTTP_400_BAD_REQUEST)
