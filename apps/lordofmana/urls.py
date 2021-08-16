from django.urls import path, include
from apps.lordofmana.scraping import lordofmanaScrape
from apps.lordofmana import views

urlpatterns = [
    path('friends/', views.friendList, name="friend-list"),
    path('friend-create/', views.friendCreate, name="friend-create"),
    path('friend-update/<str:id>/', views.friendUpdate, name="friend-update"),
    path('friend-delete/<str:id>/', views.friendDelete, name="friend-delete"),

    # Scraping
    path('scrape-lordofmana/', lordofmanaScrape, name='scrape-lordofmana')
]
