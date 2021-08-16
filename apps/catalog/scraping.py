from django.http import HttpResponse
from apps.catalog.models import Cat
from bs4 import BeautifulSoup as bs4
import requests
import re


def catalogScrape(request):
    print('\n>> Initiating Catalog Scraping')

    url = 'https://anothereden.miraheze.org/wiki/The_Cat_Beyond_its_Territory#Material%20Totals'
    request = requests.get(url)
    soup = bs4(request.content, 'html.parser')

    tags = soup.find_all("tr", {"data-details": True})
    for tag in tags:
        information = tag.find_all("td")

        if information[5].text:
            name = information[1].text

            url = 'https://anothereden.miraheze.org/wiki/' + name
            request = requests.get(url)
            soup = bs4(request.content, 'html.parser')

            icon = soup.find("img")["src"].strip()
            location = soup.find("div", {"class": "cat-home"}).text
            location = location.split("Home Location")[1]
            try:
                location = location.split("(")[0].strip()
                location = location.split(",")[0].strip()
            except:
                Print('There is no parenthesis or comma to split')

            liked_gifts = soup.find("div", {"class": "cat-liked"}).text
            liked_gifts = liked_gifts.split("Liked Gifts")[1].strip()

            loved_gifts = soup.find("div", {"class": "cat-loved"}).text
            loved_gifts = loved_gifts.split("Loved Gifts")[1].strip()

            personality = soup.find("div", {"class": "cat-personality"}).text
            personality = personality.split("Personality")[1].strip()

            common_gift = soup.find("div", {"class": "cat-commonGift"}).text
            common_gift = common_gift.split("Common Gift")[1].strip()

            unique_gift = soup.find("div", {"class": "cat-uniqueGift"}).text
            unique_gift = unique_gift.split("Unique Gift")[1].strip()

            url = 'https://anothereden.miraheze.org/wiki/' + common_gift.replace(" ", "_")
            request = requests.get(url)
            soup = bs4(request.content, 'html.parser')

            icon_commonGift = soup.find("img")["src"].strip()
            print('icon_commonGift: ', icon_commonGift)

            url = 'https://anothereden.miraheze.org/wiki/' + unique_gift.replace(" ", "_")
            request = requests.get(url)
            soup = bs4(request.content, 'html.parser')

            icon_uniqueGift = soup.find("img")["src"].strip()
            print('icon_uniqueGift: ', icon_uniqueGift)

            # Saving into database
            try:
                new_cat = Cat(
                    name = name,
                    icon = icon,
                    location = location,
                    liked_gifts = liked_gifts,
                    loved_gifts = loved_gifts,
                    personality = personality,
                    common_gift = common_gift,
                    common_icon = icon_commonGift,
                    unique_gift = unique_gift,
                    unique_icon = icon_uniqueGift,
                )
                new_cat.save()
                print(name, 'added!')

            except:
                print(name, 'is already in database!')


    print('>> Finished \n')

    return HttpResponse('Web scraping done successfully', status=200)
