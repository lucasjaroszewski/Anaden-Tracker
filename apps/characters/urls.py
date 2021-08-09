from django.urls import path, include
from apps.characters.scraping import characterScrape, weaponsScrape
from apps.characters import views

urlpatterns = [

    # Create-Read-Update-Delete
    path('characters/', views.characterList, name="character-list"),
    path('character-create/', views.characterCreate, name="character-create"),
    path('character-update/<str:id>/', views.characterUpdate, name="character-update"),
    path('character-delete/<str:id>/', views.characterDelete, name="character-delete"),

    # Scraping
    path('scrape-characters/', characterScrape, name='scrape-characters'),
    path('scrape-weapons/', weaponsScrape, name='scrape-weapons'),
]
