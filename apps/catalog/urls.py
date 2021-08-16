from django.urls import path, include
from apps.catalog.scraping import catalogScrape
from apps.catalog import views

urlpatterns = [
    path('cats/', views.catList, name="cat-list"),
    path('cat-create/', views.catCreate, name="cat-create"),
    path('cat-update/<str:id>/', views.catUpdate, name="cat-update"),
    path('cat-delete/<str:id>/', views.catDelete, name="cat-delete"),

    # Scraping
    path('scrape-catalog/', catalogScrape, name='scrape-catalog')
]
