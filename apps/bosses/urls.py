from django.urls import path, include
from apps.bosses.scraping import bossesScrape
from apps.bosses import views

urlpatterns = [
    path('bosses/', views.bossList, name="boss-list"),
    path('boss-create/', views.bossCreate, name="boss-create"),
    path('boss-update/<str:id>/', views.bossUpdate, name="boss-update"),
    path('boss-delete/<str:id>/', views.bossDelete, name="boss-delete"),

    # Scraping
    path('scrape-bosses/', bossesScrape, name='scrape-bosses'),
]
