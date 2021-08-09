from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.apiOverView, name="api-overview"),
    path('fishes/', views.fishList, name="fish-list"),
    path('fishes/<str:fish>/', views.fishDetail, name="fish-detail"),
    path('fish-create/', views.fishCreate, name="fish-create"),
    path('fish-update/<str:fish>/', views.fishUpdate, name="fish-update"),
    path('weapon-create/', views.weaponCreate, name='weapon-create'),
    path('loot-create/', views.lootCreate, name='loot-create')
]
