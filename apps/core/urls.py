from django.urls import path
from apps.core import views

urlpatterns = [
    path('', views.home, name='home'),
    path('dashboard/', views.dashboard, name='dashboard'),
    path('characters/', views.characters, name='characters'),
    path('characters/<str:fullname>/', views.characters_detail, name='characters-detail'),
    path('bosses/', views.bosses, name='bosses'),
    path('fishing/', views.fishing, name='fishing'),
    path('catalog/', views.catalog, name='catalog'),
    path('lordofmana/', views.lord_of_mana, name='lord-of-mana'),
    path('legal/', views.legal, name='legal'),
]
