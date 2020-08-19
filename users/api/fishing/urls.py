from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.apiOverView, name="api-overview"),
    path('fish-create/', views.fishCreate, name="fish-create"),
    path('fish-list/', views.fishList, name="fish-list"),
    path('fish-list/<str:fish>/', views.fishDetail, name="fish-detail"),
    path('fish-update/<str:fish>/', views.fishUpdate, name="fish-update"),
    path('user-list/', views.userList, name="user-list"),
    path('user-list/<str:user>/', views.userFishes, name="user-fishes"),
    path('user-profile/<str:user>/', views.userProfile, name="user-profile"),
    path('profile-list/', views.profileList, name="profile-list"),
    path('profile-list/<str:id>/', views.profileDetail, name="profile-detail"),
    path('profile-update/<str:user>/', views.profileUpdate, name="profile-update"),
]
