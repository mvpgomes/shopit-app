from django.conf import settings
from django.conf.urls import include, patterns, url

from rest_framework_nested import routers

from shopit_app.views import IndexView
from authentication_app.views import AccountViewSet, LoginView

router = routers.SimpleRouter()
router.register(r'accounts', AccountViewSet)

urlpatterns = patterns('',
    # API endpoints
    url(r'^api/v1/', include(router.urls)),
    url(r'^api/v1/auth/login/$', LoginView.as_view(), name='login'),
    url('^.*$', IndexView.as_view(), name='index'),
)
