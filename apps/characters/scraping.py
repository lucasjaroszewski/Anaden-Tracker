from django.http import HttpResponse
from apps.characters.models import Character, Weapon
from bs4 import BeautifulSoup as bs4
import requests
import re


def characterScrape(request):
    print('>> Initiating Character Scraping')

    url = 'https://anothereden.miraheze.org/wiki/Characters'
    request = requests.get(url)
    soup = bs4(request.content, 'html.parser')
    tags = soup.find_all("tr", {"data-name": True})[::-1] # Aldo: 142

    for tag in tags:
        fullname = tag.attrs["data-name"]
        icon = tag.find("img")["src"]
        print(fullname)

        # Validation for rarity
        if "another" in fullname.lower():
            rarity = "AS"
        elif "extra" in fullname.lower():
            rarity = "ES"
        else:
            rarity = "3"

        name = tag.attrs["data-name"].split(" (")[0]
        url = 'https://anothereden.miraheze.org/wiki/' + fullname

        request = requests.get(url)
        soup = bs4(request.content, 'html.parser')

        images = soup.find_all("img", {"width": "400"})
        for image in images:
            image = image["src"]

        tables = soup.find_all("tbody")

        # Scraping General Information
        information = tables[0].find_all("td")
        element = information[1].text.strip()
        attack_type = information[2].text.strip()
        weapon_type = information[3].text.strip()
        accessory_type = information[4].text.strip()
        dungeon_info = information[5].text[7:]
        dungeon = dungeon_info.split('(')[0].strip()
        ls_type = information[5].text.strip().split(' ')[0]
        personality = information[6].text.strip()

        # Scraping Stats Data
        stats = tables[1].find_all("td")
        hp = stats[1].text.strip()
        mp = stats[3].text.strip()
        pwr = stats[5].text.split("(")[0].strip()
        int = stats[7].text.split("(")[0].strip()
        end = stats[9].text.split("(")[0].strip()
        spr = stats[11].text.split("(")[0].strip()
        spd = stats[13].text.split("(")[0].strip()
        lck = stats[15].text.split("(")[0].strip()

        # Scraping Light/Shadow Stat Bonuses
        bonuses = tables[5].find_all("td")[1::2]
        bonus = {'bonus1': '', 'bonus2': '', 'bonus3': '', 'bonus4': '', 'bonus5': '', 'bonus6': '', 'bonus7': '', 'bonus8': '', 'bonus9': '', 'bonus10': ''}
        i = 1

        for b in bonuses:
            bonus["bonus{0}".format(i)] = b.text
            i += 1

        # Scraping Skills
        rows = soup.find_all("div", {"class": "character-skill-row"})

        skill = {'skill0': '', 'skill1': '', 'skill2': '', 'skill3': '', 'skill4': '', 'skill5': '', 'skill6': '', 'skill7': '', 'skill8': ''}
        mod = {'mod1': '', 'mod2': '', 'mod3': '', 'mod4': '', 'mod5': '', 'mod6': '', 'mod7': '', 'mod8': ''}

        j = 1
        for row in rows:
            skills = row.find("div", {"class": "skill-name"})
            mods = row.find("div", {"class": "skill-mod"})

            if skills.text != skill["skill{0}".format(j-1)]:
                skill["skill{0}".format(j)] = skills.text
                mod["mod{0}".format(j)] = mods.text
                j += 1

        # Saving into database
        try:
            new_character = Character(
                fullname = fullname,
                name = name,
                icon = icon,
                image = image,
                rarity = rarity,
                element = element,
                attack_type = attack_type,
                weapon_type = weapon_type,
                accessory_type = accessory_type,
                ls_type = ls_type,
                personality = personality,
                dungeon = dungeon,
                hp = hp,
                mp = mp,
                pwr = pwr,
                int = int,
                end = end,
                spr = spr,
                spd = spd,
                lck = lck,
                bonus1 = bonus['bonus1'],
                bonus2 = bonus['bonus2'],
                bonus3 = bonus['bonus3'],
                bonus4 = bonus['bonus4'],
                bonus5 = bonus['bonus5'],
                bonus6 = bonus['bonus6'],
                bonus7 = bonus['bonus7'],
                bonus8 = bonus['bonus8'],
                bonus9 = bonus['bonus9'],
                bonus10 = bonus['bonus10'],
                skill1 = skill['skill1'],
                skill2 = skill['skill2'],
                skill3 = skill['skill3'],
                skill4 = skill['skill4'],
                skill5 = skill['skill5'],
                skill6 = skill['skill6'],
                skill7 = skill['skill7'],
                skill8 = skill['skill8'],
                mod1 = mod['mod1'],
                mod2 = mod['mod2'],
                mod3 = mod['mod3'],
                mod4 = mod['mod4'],
                mod5 = mod['mod5'],
                mod6 = mod['mod6'],
                mod7 = mod['mod7'],
                mod8 = mod['mod8']
            )
            new_character.save()
            print(fullname, 'added!')

        except:
            print(fullname, 'is already in database!')

    print('>> Finished!')
    return HttpResponse('Web scraping done successfully', status=200)

def weaponsScrape(request):
    print('>> Initiating Weapon Scraping')

    url = 'https://anothereden.miraheze.org/wiki/Weapons'
    request = requests.get(url)
    soup = bs4(request.content, 'html.parser')
    tags = soup.find_all("tr", {"data-name": True, "data-weapon": True})[::-1]

    for tag in tags:
        information = tag.find_all("td")
        stats = tag.find_all("li")
        if int(information[3].text) > 59:
            name = tag.attrs["data-name"]
            category = tag.attrs["data-weapon"]
            icon = tag.find("img")["src"]

            atk = information[4].text
            matk = information[5].text

            hp = 0
            hps = tag.find_all(text=re.compile('^HP\+'))
            for hp in hps:
                hp = re.search('\(([^)]+)', hp).group(1)

            mp = 0
            mps = tag.find_all(text=re.compile('^MP\+'))
            for mp in mps:
                mp = re.search('\(([^)]+)', mp).group(1)

            pwr = 0
            pwrs = tag.find_all(text=re.compile('^PWR\+'))
            for pwr in pwrs:
                pwr = re.search('\(([^)]+)', pwr).group(1)

            mag = 0
            mags = tag.find_all(text=re.compile('^INT\+'))
            for mag in mags:
                mag = re.search('\(([^)]+)', mag).group(1)

            spr = 0
            sprs = tag.find_all(text=re.compile('^SPR\+'))
            for spr in sprs:
                spr = re.search('\(([^)]+)', spr).group(1)

            end = 0
            ends = tag.find_all(text=re.compile('^END\+'))
            for end in ends:
                end = re.search('\(([^)]+)', end).group(1)

            spd = 0
            spds = tag.find_all(text=re.compile('^SPD\+'))
            for spd in spds:
                spd = re.search('\(([^)]+)', spd).group(1)

            spd_loss = 0
            spds_losses = tag.find_all(text=re.compile('^SPD\-'))
            for spd_loss in spds_losses:
                spd_loss = re.search('\(([^)]+)', spd_loss).group(1)

            lck = 0
            lcks = tag.find_all(text=re.compile('^LCK\+'))
            for lck in lcks:
                lck = re.search('\(([^)]+)', lck).group(1)

            elemental_type = 0
            elemental_types = tag.find_all(text=re.compile('^[tT]ype [aA]ttack'))
            for elemental_type in elemental_types:
                elemental_type = re.search('\(([^)]+)', elemental_type).group(1)

            non_type = 0
            non_types = tag.find_all(text=re.compile('^[nN]on-[tT]ype'))
            for non_type in non_types:
                non_type = re.search('\(([^)]+)', non_type).group(1)

            damage_plus = 0
            damages_plus = tag.find_all(text=re.compile('^[dD]amage\+'))
            for damage_plus in damages_plus:
                damage_plus = re.search('\(([^)]+)', damage_plus).group(1)

            # Saving into database
            try:
                new_weapon = Weapon(
                    name = name,
                    category = category,
                    icon = icon,
                    atk = atk,
                    matk = matk,
                    hp_gain = hp,
                    mp_gain = mp,
                    pwr_gain = pwr,
                    int_gain = mag,
                    end_gain = end,
                    spr_gain = spr,
                    spd_gain = spd,
                    lck_gain = lck,
                    spd_loss = spd_loss,
                    elemental_type = elemental_type,
                    non_type = non_type,
                    damage_plus = damage_plus
                )
                new_weapon.save()
                print(name, 'added!')

            except Exception:
                print(name, 'is already in database!')

    print('>> Finished')

    return HttpResponse('Web scraping done successfully', status=200)
