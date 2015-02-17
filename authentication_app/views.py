import json

from django.contrib.auth import authenticate, login, logout

from rest_framework import permissions, status, views, viewsets
from rest_framework.response import Response

from authentication_app.models import Account
from authentication_app.permissions import IsAccountOwner
from authentication_app.serializers import AccountSerializer

'''
    @name : AccountViewSet
    @desc : Defines the account view set.
'''
class AccountViewSet(viewsets.ModelViewSet):
    lookup_field = 'username'
    queryset = Account.objects.all()
    serializer_class = AccountSerializer

    def get_permissions(self):
        if self.request.method in permissions.SAFE_METHODS:
            return (permissions.AllowAny(),)
        if self.request.method == 'POST':
            return (permissions.AllowAny(),)

        return (permissions.IsAuthenticated(), IsAccountOwner(),)

    def create(self, request):
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            Account.objects.create_user(**serializer.validated_data)
            return Response(serializer.validated_data, status=status.HTTP_201_CREATED)

        return Response({
            'status' : 'Bad Request',
            'message' : 'Account could not be created with the received data.'
        }, status=status.HTTP_400_BAD_REQUEST)


'''
    @name : LoginView
    @desc : Defines the login view.
'''
class LoginView(views.APIView):
    def post(self, request, format=None):
        data = json.loads(request.body)
        email = data.get('email', None)
        password = data.get('password', None)

        account = authenticate(email=email, password=password)

        if account is not None:
            if account.is_active:
                login(request, account)
                serialized = AccountSerializer(account)
                return Response(serialized.data)
            else:
                return Response({
                    'status' : 'Unauthorized',
                    'message' : 'This account has been disabled.'
                }, status=status.HTTP_401_UNAUTHORIZED)
        else:
            return Response({
                'status' : 'Unauthorized',
                'message' : 'Username/password combination invalid.'
            }, status=status.HTTP_401_UNAUTHORIZED)

'''
    @name : LogoutView
    @desc : Defines the logout view.
'''
class LogoutView(views.APIView):
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request, format=None):
        logout(request)
        return Response({}, status=status.HTTP_204_NO_CONTENT)    
