from django.urls import path, include
from . import views

urlpatterns = [
    path('user-characters/<str:user>/', views.userCharacters, name="user-characters"),
    path('character-create/', views.characterCreate, name="character-create"),
    path('character-update/<str:id>/', views.characterUpdate, name="character-update"),
    path('character-delete/<str:id>/', views.characterDelete, name="character-delete"),
]
