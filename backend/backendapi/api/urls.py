from django.contrib import admin
from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from .views import UserViewSet, DocsViewSet

router = routers.DefaultRouter()
router.register('users', UserViewSet)
router.register('docs', DocsViewSet)

urlpatterns = [
    path('', include(router.urls)),
]