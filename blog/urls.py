from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('fishing/', views.fishing, name='fishing'),
    path('characters/', views.characters, name='characters'),
    path('characters/add/', views.addCharacters, name='add-characters'),
    path('characters/remove/', views.removeCharacters, name='remove-characters'),
    path('legal/', views.legal, name='legal'),
]
