from django.http import HttpResponse
from apps.lordofmana.models import Friend
from bs4 import BeautifulSoup as bs4
import requests
import re


def lordofmanaScrape(request):
    print('\n>> Initiating Lord of Mana Scraping')

    url = 'https://anothereden.miraheze.org/wiki/Lord_of_Mana'
    request = requests.get(url)
    soup = bs4(request.content, 'html.parser')

    tables = soup.find_all("tbody")
    friends_table = tables[0].find_all("tr")[1::]
    points_table = tables[1].find_all("tr")[1::]

    friends = []
    locationRankUp = []
    lezonaFloor = []
    for row in friends_table:
        cell = row.find_all("td")
        name = cell[0].text.split("(")[0].strip()
        friends.append(name)
        location = cell[2].text.strip()
        locationRankUp.append(location)
        floor = cell[3].text.strip()
        lezonaFloor.append(floor)

    rankTwo = []
    rankThree = []
    rankFour = []
    classes = []
    locationInGame = []
    for row in points_table:
        cell = row.find_all("td")
        classe = cell[1].text.strip()
        classes.append(classe)
        location = cell[5].text.strip()
        locationInGame.append(location)
        rank = cell[6].text.replace(",","").strip()
        rankTwo.append(rank)
        rank = cell[7].text.replace(",","").strip()
        rankThree.append(rank)
        rank = cell[8].text.replace(",","").strip()
        rankFour.append(rank)

    for i in range(len(friends)):
        try:
            new_friend = Friend(
                name = friends[i],
                location_rank_up = locationRankUp[i],
                location_in_game = locationInGame[i],
                lezona_floor = lezonaFloor[i],
                classe = classes[i],
                rank_two = rankTwo[i],
                rank_three = rankThree[i],
                rank_four = rankFour[i]
            )
            new_friend.save()
            print(friends[i], 'added!')
        except Exception:
            print('Error :', Exception)


    print('>> Finished \n')

    return HttpResponse('Web scraping done successfully', status=200)
