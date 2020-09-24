from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('fishing/', views.fishing, name='fishing'),
    path('legal/', views.legal, name='legal'),
]
