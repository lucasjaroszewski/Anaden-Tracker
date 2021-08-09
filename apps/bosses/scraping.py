from django.http import HttpResponse
from apps.bosses.models import Boss
from bs4 import BeautifulSoup as bs4
import requests
import re


def bossesScrape(request):
    print('>> Initiating Bosses Scraping')

    url = 'https://anothereden.miraheze.org/wiki/Enemies'
    request = requests.get(url)
    soup = bs4(request.content, 'html.parser')

    tags = soup.find_all("tr")[::-1]

    for tag in tags:
        information = tag.find_all("td")
        try:
            if information[1].text == 'Hidden Boss':
                name = information[0].text

                blocked_names = ['Aldo', 'Melina', 'Mistrare', 'Prai', 'Rosetta', 'Thillelille']
                if name in blocked_names:
                    print('Couldnt include ' + name + ' as a Boss.')
                else:
                    location = ''
                    location = information[4].text
                    weakness = ''
                    weakness = information[5].text
                    resists = ''
                    resists = information[6].text
                    absorbs = ''
                    absorbs = information[7].text
                    nullifies = ''
                    nullifies = information[8].text
                    loot = ''
                    loot = information[9].text

                    # Saving into database
                    try:
                        new_boss = Boss(
                            name = name,
                            location = location,
                            weakness = weakness,
                            resists = resists,
                            absorbs = absorbs,
                            nullifies = nullifies,
                            loot = loot,
                        )
                        new_boss.save()
                        print(name, 'added!')

                    except Exception:
                        print(name, 'is already in database!')

        except:
            print('No more data to scrape')
    print('>> Finished')

    return HttpResponse('Web scraping done successfully', status=200)
